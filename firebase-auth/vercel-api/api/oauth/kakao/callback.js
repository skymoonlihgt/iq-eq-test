const axios = require('axios');
const admin = require('firebase-admin');

if (!admin.apps.length) {
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    try {
      const sa = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
      admin.initializeApp({ credential: admin.credential.cert(sa) });
    } catch (e) {
      console.error('Invalid FIREBASE_SERVICE_ACCOUNT JSON');
      admin.initializeApp();
    }
  } else {
    admin.initializeApp();
  }
}

function parseCookies(cookieHeader) {
  const list = {};
  if (!cookieHeader) return list;
  cookieHeader.split(';').forEach(function(cookie) {
    const parts = cookie.split('=');
    list[parts.shift().trim()] = decodeURI(parts.join('='));
  });
  return list;
}

async function mintCustomToken(uid, claims = {}) {
  return admin.auth().createCustomToken(uid, claims);
}

module.exports = async (req, res) => {
  const { code, state } = req.query || req;
  if (!code) return res.status(400).send('Missing code');
  try {
    // verify state against cookie
    const cookies = parseCookies(req.headers.cookie || '');
    const cookieState = cookies['oauth_state'];
    if (!cookieState || !state || cookieState !== state) {
      // clear cookie
      res.writeHead(400, { 'Set-Cookie': 'oauth_state=; Max-Age=0; Path=/' });
      return res.status(400).send('Invalid state');
    }

    const redirectUri = `${process.env.ORIGIN || 'http://localhost:3000'}/api/oauth/kakao/callback`;
    const tokenRes = await axios.post('https://kauth.kakao.com/oauth/token', null, {
      params: {
        grant_type: 'authorization_code',
        client_id: process.env.KAKAO_CLIENT_ID,
        client_secret: process.env.KAKAO_CLIENT_SECRET,
        redirect_uri: redirectUri,
        code
      }
    });
    // clear state cookie after successful verification
    const accessToken = tokenRes.data.access_token;
    const profile = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const kakaoId = profile.data.id;
    const uid = `kakao:${kakaoId}`;
    const customToken = await mintCustomToken(uid, { provider: 'kakao' });
    const origin = process.env.ORIGIN || 'http://localhost:3000';
    res.writeHead(302, { Location: `${origin}?customToken=${encodeURIComponent(customToken)}`, 'Set-Cookie': 'oauth_state=; Max-Age=0; Path=/' });
    res.end();
  } catch (err) {
    console.error(err?.response?.data || err.message);
    res.status(500).json({ error: 'token_exchange_failed' });
  }
};

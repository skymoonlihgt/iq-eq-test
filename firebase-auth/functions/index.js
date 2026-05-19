/*
  Express Cloud Function example to exchange OAuth codes for Kakao/Naver,
  then mint a Firebase Custom Token.

  REQUIRED environment variables (set in your hosting or CI/CD):
  - FIREBASE_SERVICE_ACCOUNT (JSON string) OR use GOOGLE_APPLICATION_CREDENTIALS
  - KAKAO_CLIENT_ID, KAKAO_CLIENT_SECRET
  - NAVER_CLIENT_ID, NAVER_CLIENT_SECRET

  This example is minimal and for demonstration only. In production, add CSRF/nonce checks,
  robust error handling, rate limiting and logging control.
*/

const express = require('express');
const axios = require('axios');
const admin = require('firebase-admin');

const app = express();

if (!admin.apps.length) {
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    const sa = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    admin.initializeApp({ credential: admin.credential.cert(sa) });
  } else {
    admin.initializeApp();
  }
}

// Helper: mint custom token for a provider user
async function mintCustomToken(uid, claims = {}) {
  return admin.auth().createCustomToken(uid, claims);
}

// Example route: start OAuth redirect for Kakao (client should be redirected here)
app.get('/oauth/kakao', (req, res) => {
  // Redirect user to Kakao auth page. In a real flow, include state/nonce.
  const redirectUri = encodeURIComponent(`${process.env.ORIGIN || 'http://localhost:5000'}/functions/oauth/kakao/callback`);
  const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${redirectUri}`;
  res.redirect(url);
});

app.get('/oauth/kakao/callback', async (req, res) => {
  const { code } = req.query;
  if (!code) return res.status(400).send('Missing code');
  try {
    const tokenRes = await axios.post('https://kauth.kakao.com/oauth/token', null, {
      params: {
        grant_type: 'authorization_code',
        client_id: process.env.KAKAO_CLIENT_ID,
        client_secret: process.env.KAKAO_CLIENT_SECRET,
        redirect_uri: `${process.env.ORIGIN || 'http://localhost:5000'}/functions/oauth/kakao/callback`,
        code
      }
    });

    const accessToken = tokenRes.data.access_token;
    // Optionally fetch profile to create stable uid
    const profile = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const kakaoId = profile.data.id;
    const uid = `kakao:${kakaoId}`;
    const customToken = await mintCustomToken(uid, { provider: 'kakao' });
    // Redirect back to origin with customToken in query for client to consume
    const origin = process.env.ORIGIN || 'http://localhost:8000';
    res.redirect(`${origin}?customToken=${encodeURIComponent(customToken)}`);
  } catch (err) {
    console.error(err?.response?.data || err.message);
    res.status(500).json({ error: 'token_exchange_failed' });
  }
});

// Naver
app.get('/oauth/naver', (req, res) => {
  const redirectUri = encodeURIComponent(`${process.env.ORIGIN || 'http://localhost:5000'}/functions/oauth/naver/callback`);
  const state = 'naver' + Date.now();
  const url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NAVER_CLIENT_ID}&redirect_uri=${redirectUri}&state=${state}`;
  res.redirect(url);
});

app.get('/oauth/naver/callback', async (req, res) => {
  const { code, state } = req.query;
  if (!code) return res.status(400).send('Missing code');
  try {
    const tokenRes = await axios.get('https://nid.naver.com/oauth2.0/token', {
      params: {
        grant_type: 'authorization_code',
        client_id: process.env.NAVER_CLIENT_ID,
        client_secret: process.env.NAVER_CLIENT_SECRET,
        code,
        state
      }
    });
    const accessToken = tokenRes.data.access_token;
    const profile = await axios.get('https://openapi.naver.com/v1/nid/me', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const naverId = profile.data.response.id;
    const uid = `naver:${naverId}`;
    const customToken = await mintCustomToken(uid, { provider: 'naver' });
    const origin = process.env.ORIGIN || 'http://localhost:8000';
    res.redirect(`${origin}?customToken=${encodeURIComponent(customToken)}`);
  } catch (err) {
    console.error(err?.response?.data || err.message);
    res.status(500).json({ error: 'token_exchange_failed' });
  }
});

// Simple health
app.get('/health', (req, res) => res.send('ok'));

// Export for Cloud Functions or run standalone
if (process.env.FUNCTIONS_EMULATOR || process.env.GCF_ENV) {
  exports.app = app;
} else {
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`OAuth helper running on ${port}`));
}

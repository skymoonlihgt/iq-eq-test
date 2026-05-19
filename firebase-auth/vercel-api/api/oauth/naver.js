const crypto = require('crypto');

function serializeCookie(name, val, options = {}) {
  const opt = Object.assign({ path: '/', httpOnly: true, sameSite: 'Lax' }, options);
  let cookie = `${name}=${val}`;
  if (opt.maxAge) cookie += `; Max-Age=${opt.maxAge}`;
  if (opt.domain) cookie += `; Domain=${opt.domain}`;
  if (opt.path) cookie += `; Path=${opt.path}`;
  if (opt.httpOnly) cookie += `; HttpOnly`;
  if (opt.secure) cookie += `; Secure`;
  if (opt.sameSite) cookie += `; SameSite=${opt.sameSite}`;
  return cookie;
}

module.exports = (req, res) => {
  const origin = process.env.ORIGIN || 'http://localhost:3000';
  const redirectUri = `${origin}/api/oauth/naver/callback`;
  const state = crypto.randomBytes(16).toString('hex');
  const secure = origin.startsWith('https');
  const cookie = serializeCookie('oauth_state', state, { maxAge: 300, secure });
  const url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NAVER_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}`;
  res.writeHead(302, { Location: url, 'Set-Cookie': cookie });
  res.end();
};

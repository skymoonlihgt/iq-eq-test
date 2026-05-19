import firebaseConfig from './firebaseConfig.js';

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const btnGoogle = document.getElementById('btnGoogle');
const btnApple = document.getElementById('btnApple');
const btnKakao = document.getElementById('btnKakao');
const btnNaver = document.getElementById('btnNaver');
const btnSignOut = document.getElementById('btnSignOut');
const status = document.getElementById('status');

function setStatus(msg) { status.textContent = msg; }

// If redirected back with customToken param, sign in
const urlParams = new URLSearchParams(window.location.search);
const customTokenFromUrl = urlParams.get('customToken');
if (customTokenFromUrl) {
  // remove token from URL for cleanliness
  history.replaceState(null, '', window.location.pathname);
  auth.signInWithCustomToken(customTokenFromUrl).catch((err) => setStatus('Sign-in failed: ' + err.message));
}

auth.onAuthStateChanged((user) => {
  if (user) {
    setStatus(`Signed in: ${user.displayName || user.email} (uid: ${user.uid})`);
  } else {
    setStatus('Not signed in');
  }
});

// Google sign-in (works with Firebase config)
btnGoogle.addEventListener('click', async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    await auth.signInWithPopup(provider);
  } catch (err) {
    setStatus('Google sign-in failed: ' + err.message);
  }
});

// Apple sign-in via Firebase (ensure Apple provider enabled in console)
btnApple.addEventListener('click', async () => {
  const provider = new firebase.auth.OAuthProvider('apple.com');
  provider.addScope('email');
  try {
    await auth.signInWithPopup(provider);
  } catch (err) {
    setStatus('Apple sign-in failed: ' + err.message);
  }
});

// Kakao & Naver: open serverless function endpoint to perform OAuth exchange
// These functions should return a Firebase custom token you can sign in with.
function oauthSignInViaFunction(providerName) {
  // Redirect browser to your serverless API which will redirect to provider auth
  window.location.href = `/api/oauth/${providerName}`;
}

btnKakao.addEventListener('click', () => oauthSignInViaFunction('kakao'));
btnNaver.addEventListener('click', () => oauthSignInViaFunction('naver'));

btnSignOut.addEventListener('click', async () => {
  await auth.signOut();
  setStatus('Signed out');
});

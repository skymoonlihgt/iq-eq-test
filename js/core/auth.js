import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// 질문자님의 진짜 Firebase 프로젝트 정보로 완성된 config입니다.
const firebaseConfig = {
  apiKey: "AIzaSyC7cJ1nZCpTnczDkyLzdNQHxHWGNz-lcsY",
  authDomain: "iqeq-7dd2c.firebaseapp.com",
  projectId: "iqeq-7dd2c",
  storageBucket: "iqeq-7dd2c.firebasestorage.app",
  messagingSenderId: "657350828453",
  appId: "1:657350828453:web:4b54103f448c39adc6084c",
  measurementId: "G-Q6CREQBHJV"
};

// Firebase 및 구글 인증 서비스 초기화
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export function initAuth() {
  // 화면 요소 가져오기
  const loginSection = document.getElementById('login-section');
  const profileSection = document.getElementById('profile-section');
  const btnLogin = document.getElementById('btn-login');
  const btnLogout = document.getElementById('btn-logout');
  const userPhoto = document.getElementById('user-photo');
  const userName = document.getElementById('user-name');

  if (!btnLogin || !btnLogout) return; // 요소가 없으면 실행 안함

  // 1. 로그인 작동
  btnLogin.addEventListener('click', async () => {
    if (typeof gtag === 'function') { gtag('event', 'click_google_login', { 'event_category': 'button' }); }
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("로그인에 실패했습니다. 다시 시도해 주세요.");
    }
  });

  // 2. 로그아웃 작동
  btnLogout.addEventListener('click', async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  });

  // 3. 실시간 로그인 유저 상태 체크 및 화면 전환
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (userPhoto) userPhoto.src = user.photoURL || "https://via.placeholder.com/32";
      if (userName) userName.textContent = `${user.displayName}님`;
      if (loginSection) loginSection.style.display = 'none';
      if (profileSection) profileSection.style.display = 'flex';
    } else {
      if (loginSection) loginSection.style.display = 'block';
      if (profileSection) profileSection.style.display = 'none';
    }
  });
}

Firebase Auth integration (vanilla JS)

This folder contains a minimal client and Cloud Functions examples to integrate social login using Firebase Authentication.

Overview
- Client-side: `index.html` + `auth.js` demonstrate sign-in with Google and Apple using Firebase Web SDK.
- Server-side (Cloud Functions): `functions/index.js` shows how to exchange OAuth codes for access tokens for Kakao and Naver, then mint a Firebase Custom Token using the Admin SDK. This is necessary because Kakao/Naver are not first-class Firebase providers.

How to use
1. Create a Firebase project and enable Authentication providers (Google, Apple). For Kakao/Naver you'll need developer apps and client secrets.
2. Copy `firebaseConfig.example.js` to `firebaseConfig.js` and fill your Firebase config.
3. Serve `index.html` (static host) to test client flows for Google/Apple.
4. If you host on Vercel (recommended for this repo), deploy the serverless API in `vercel-api/` which provides `/api/oauth/*` endpoints for Kakao/Naver token exchange and Firebase Custom Token issuance. Alternatively you can deploy the `functions/` folder to Firebase Cloud Functions.

Vercel deployment notes:
- Ensure `firebase-auth/vercel-api/package.json` dependencies are installed by configuring Vercel to use the repository root or the `firebase-auth/vercel-api` folder as the project root.
- Set these Environment Variables in Vercel dashboard (Project Settings → Environment Variables):
	- `FIREBASE_SERVICE_ACCOUNT` — JSON string of your service account (or use `GOOGLE_APPLICATION_CREDENTIALS` in functions)
	- `KAKAO_CLIENT_ID`, `KAKAO_CLIENT_SECRET`
	- `NAVER_CLIENT_ID`, `NAVER_CLIENT_SECRET`
	- `ORIGIN` — your site origin (e.g., `https://yourdomain.com`)


Files
- `index.html`: demo UI
- `auth.js`: client logic
- `firebaseConfig.example.js`: example Firebase config placeholder
- `functions/`: Node.js Cloud Functions example

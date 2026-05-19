Cloud Functions helper

1. Install dependencies:

```bash
cd firebase-auth/functions
npm install
```

2. Set environment variables (in Firebase functions use `firebase functions:config:set`, or set process env for local run):

- `FIREBASE_SERVICE_ACCOUNT` (JSON string) or configure `GOOGLE_APPLICATION_CREDENTIALS`.
- `KAKAO_CLIENT_ID`, `KAKAO_CLIENT_SECRET`
- `NAVER_CLIENT_ID`, `NAVER_CLIENT_SECRET`
- `ORIGIN` (e.g. https://yourdomain.com)

3. Deploy to Firebase Functions or run locally with `node index.js`.

Security notes: Do not log secrets. Use secret managers (Firebase environment config, GCP Secret Manager) in production.

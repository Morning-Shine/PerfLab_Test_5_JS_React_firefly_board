export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_API_DOMAIN,
  databaseURL:
    "https://taskboard-perflab-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: process.env.REACT_APP_FIREBASE_API_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_API_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_API_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_APP_ID,
};

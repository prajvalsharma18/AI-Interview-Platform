import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-platform-f4023.firebaseapp.com",
  projectId: "ai-interview-platform-f4023",
  storageBucket: "ai-interview-platform-f4023.firebasestorage.app",
  messagingSenderId: "547549545834",
  appId: "1:547549545834:web:867a98f1dd34b18aa91113"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
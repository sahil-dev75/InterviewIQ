
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-455e5.firebaseapp.com",
  projectId: "interview-455e5",
  storageBucket: "interview-455e5.firebasestorage.app",
  messagingSenderId: "32820919962",
  appId: "1:32820919962:web:e22152eb4aeeb6291c2923"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}
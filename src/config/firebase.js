import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHzlVd2c9fnppiNqE4lldIa7dMZ2EA1lc",
  authDomain: "react-auth-ac776.firebaseapp.com",
  projectId: "react-auth-ac776",
  storageBucket: "react-auth-ac776.appspot.com",
  messagingSenderId: "513592637501",
  appId: "1:513592637501:web:e8aa676177a6a1cced9254",
  measurementId: "G-RCC1F586Q2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
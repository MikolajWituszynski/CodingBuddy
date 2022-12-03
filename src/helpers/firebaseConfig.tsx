
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDI4I2xi0gbOUP0IdsTM8hNrf54ozuDv8A",
  authDomain: "codingbuddy-8d79a.firebaseapp.com",
  projectId: "codingbuddy-8d79a",
  storageBucket: "codingbuddy-8d79a.appspot.com",
  messagingSenderId: "600579300902",
  appId: "1:600579300902:web:97318e377517f04cbd90e7",
  measurementId: "G-HCT3CMD9PS"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const firestore = getFirestore(app);
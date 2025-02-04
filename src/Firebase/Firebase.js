
import { initializeApp } from "firebase/app";
import {FacebookAuthProvider, getAuth, GoogleAuthProvider} from 'firebase/auth';
import  { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBKmNxrA2gZRrD_ofIEj8loCEqwlOV4SHc",
  authDomain: "quora-37724.firebaseapp.com",
  projectId: "quora-37724",
  storageBucket: "quora-37724.firebasestorage.app",
  messagingSenderId: "818143852824",
  appId: "1:818143852824:web:2fac52387bb0e44cf2c66d"
};


const app = initializeApp(firebaseConfig); 
export const auth =  getAuth(app)
export const  googleprovider = new GoogleAuthProvider();
export const facebookprovider = new FacebookAuthProvider();
export const storage = getFirestore(app)
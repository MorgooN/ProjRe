// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBYsxgK5WQJMPNdEufAPQX5F1kMGR-AvHU",
  authDomain: "projre-d291e.firebaseapp.com",
  projectId: "projre-d291e",
  storageBucket: "projre-d291e.appspot.com",
  messagingSenderId: "1080658005902",
  appId: "1:1080658005902:web:b8817379edd44412b41edf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

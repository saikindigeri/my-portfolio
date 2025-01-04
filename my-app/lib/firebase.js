// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkEnnR5IC_dkhHim_9uADtqDkreGj6dNI",
  authDomain: "profile-b7dcb.firebaseapp.com",
  projectId: "profile-b7dcb",
  storageBucket: "profile-b7dcb.firebasestorage.app",
  messagingSenderId: "132543641136",
  appId: "1:132543641136:web:97cf4a3826eff517d61ff5",
  measurementId: "G-9NJQC0KHR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2Ft-bKXPuiocaZBt2g5r29LrVlQTXP3Q",
  authDomain: "user-email-password-auth-d81ee.firebaseapp.com",
  projectId: "user-email-password-auth-d81ee",
  storageBucket: "user-email-password-auth-d81ee.appspot.com",
  messagingSenderId: "555659819621",
  appId: "1:555659819621:web:299f0ba10bcbbed53ea48c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth
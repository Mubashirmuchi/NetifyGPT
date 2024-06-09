// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0BhUNJrptxJ8Df5jzWjm6GUmVaqeT6kI",
  authDomain: "netfygpt.firebaseapp.com",
  projectId: "netfygpt",
  storageBucket: "netfygpt.appspot.com",
  messagingSenderId: "568750735813",
  appId: "1:568750735813:web:fc038ef5e2a80162198bac",
  measurementId: "G-H183FX025F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();



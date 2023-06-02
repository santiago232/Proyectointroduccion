// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjPxShNZpHnwqQ2RoHd_msJVgcpTa1c_U",
  authDomain: "mi-cv-6854c.firebaseapp.com",
  projectId: "mi-cv-6854c",
  storageBucket: "mi-cv-6854c.appspot.com",
  messagingSenderId: "922830685294",
  appId: "1:922830685294:web:385ca372b41de752add27f",
  measurementId: "G-7XKJB9GMT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
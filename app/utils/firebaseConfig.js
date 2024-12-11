// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUjmOlBurnnw1FH6UiPom8__Y6yRbmWO4",
  authDomain: "realtime-app-69550.firebaseapp.com",
  projectId: "realtime-app-69550",
  storageBucket: "realtime-app-69550.firebasestorage.app",
  messagingSenderId: "772835541798",
  appId: "1:772835541798:web:19e093cb3a68058438f7e7",
  measurementId: "G-PZTE82XGSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
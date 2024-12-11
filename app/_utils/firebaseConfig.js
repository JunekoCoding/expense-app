// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUjmOlBurnnw1FH6UiPom8__Y6yRbmWO4",
  authDomain: "realtime-app-69550.firebaseapp.com",
  projectId: "realtime-app-69550",
  storageBucket: "realtime-app-69550.appspot.com",
  messagingSenderId: "772835541798",
  appId: "1:772835541798:web:19e093cb3a68058438f7e7",
  measurementId: "G-PZTE82XGSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

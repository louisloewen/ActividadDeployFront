// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAheDTaxRECACJEmTA8t4SJgzo49EaUxI0",
  authDomain: "actreactang.firebaseapp.com",
  projectId: "actreactang",
  storageBucket: "actreactang.firebasestorage.app",
  messagingSenderId: "430285899304",
  appId: "1:430285899304:web:e83aeed0791e6c704f571d",
  measurementId: "G-EB62WRHR4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
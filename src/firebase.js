// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPP-oxD84F60uGYcmjzzUWmbCVu8Hciv0",
  authDomain: "thai-love-travel.firebaseapp.com",
  projectId: "thai-love-travel",
  storageBucket: "thai-love-travel.appspot.com",
  messagingSenderId: "388340281060",
  appId: "1:388340281060:web:0f47d7a20877dcc94bc6f1",
  measurementId: "G-ZMYW4C6DDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
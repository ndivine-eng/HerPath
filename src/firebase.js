// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjurpVs13PrqhSXh-9L3qJb-i7rAvblVE",
  authDomain: "herpath-97a29.firebaseapp.com",
  projectId: "herpath-97a29",
  storageBucket: "herpath-97a29.appspot.com",
  messagingSenderId: "660036155862",
  appId: "1:660036155862:web:4d1091c5c9911d4ffacc77",
  measurementId: "G-KXDNJ32VQ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
export default app;

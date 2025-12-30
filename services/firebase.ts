
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB2dOiyiW36Pr2RQyCDJfh1gecYrBwyXcI",
  authDomain: "vungtaulike.firebaseapp.com",
  databaseURL: "https://vungtaulike.firebaseio.com",
  projectId: "vungtaulike",
  storageBucket: "vungtaulike.firebasestorage.app",
  messagingSenderId: "936755737620",
  appId: "1:936755737620:web:1133f3f7de5090ca",
  measurementId: "G-5H7ENCJP52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
// Removed getFunctions as it was causing a module error and is not used in the application.
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;

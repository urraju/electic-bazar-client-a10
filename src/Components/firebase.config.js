import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA0u7f0-4yWPiGMczWvxXtqfvn9Iz1xgSw",
  authDomain: "assignmant-10.firebaseapp.com",
  projectId: "assignmant-10",
  storageBucket: "assignmant-10.appspot.com",
  messagingSenderId: "904384911992",
  appId: "1:904384911992:web:bcd915f88a20c712a5eb8d",
  measurementId: "G-G3EJZ63YRK",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

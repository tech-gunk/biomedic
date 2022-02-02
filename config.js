import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCBTfoaCaR-V5ztBawF3pBkaedPLIvtRXo",
  authDomain: "biomedic-5db57.firebaseapp.com",
  projectId: "biomedic-5db57",
  storageBucket: "biomedic-5db57.appspot.com",
  messagingSenderId: "293922219414",
  appId: "1:293922219414:web:6e00ac4df9d351028f29b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
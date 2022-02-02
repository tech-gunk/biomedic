import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBTfoaCaR-V5ztBawF3pBkaedPLIvtRXo",
  authDomain: "biomedic-5db57.firebaseapp.com",
  databaseURL: "https://biomedic-5db57-default-rtdb.firebaseio.com",
  projectId: "biomedic-5db57",
  storageBucket: "biomedic-5db57.appspot.com",
  messagingSenderId: "293922219414",
  appId: "1:293922219414:web:6e00ac4df9d351028f29b7"
};

// Initialize Firebase
let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const database = firebase.database()

export { auth, database };


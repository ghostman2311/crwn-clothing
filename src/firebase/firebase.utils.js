import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkX-UXbfGyB4DPuUHTFOr0FgTNcGN_Hg0",
  authDomain: "crwn-db-69e91.firebaseapp.com",
  projectId: "crwn-db-69e91",
  storageBucket: "crwn-db-69e91.appspot.com",
  messagingSenderId: "263383749412",
  appId: "1:263383749412:web:e929c3575c367979b8d9b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

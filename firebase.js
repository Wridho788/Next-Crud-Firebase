import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQBymCMWNxgzE2JUYIRzyNRnkRN2tVZi0",
  authDomain: "react-crud-3e78f.firebaseapp.com",
  projectId:  "react-crud-3e78f",
  storageBucket:"react-crud-3e78f.appspot.com",
  messagingSenderId: "70624068947",
  appId:  "1:70624068947:web:87af94b4961fdaf4cc4da6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey:"REACT_APP_APIKEY",
  authDomain: "ceppic-react-astronomie-1a21f.firebaseapp.com",
  projectId: "ceppic-react-astronomie-1a21f",
  storageBucket: "ceppic-react-astronomie-1a21f.appspot.com",
  messagingSenderId: "996842650386",
  appId: "1:996842650386:web:c90e7387ac0c59a058d1cb",
  measurementId: "G-LE7FK7DT89"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export{db};
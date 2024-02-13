import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAfNldjdJH6_m9lHsqol_F7zGeb45M33Ek",
    authDomain: "jumia-clone-22acc.firebaseapp.com",
    projectId: "jumia-clone-22acc",
    storageBucket: "jumia-clone-22acc.appspot.com",
    messagingSenderId: "937071117561",
    appId: "1:937071117561:web:7b555e4bc6ef67a6b9ce28"
  };

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0]



const db = getFirestore(app)
export {db}
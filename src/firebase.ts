import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfSM3aebAWisyFC5Z7YqxEr8hTCCp07-I",
  authDomain: "edicast-e2567.firebaseapp.com",
  projectId: "edicast-e2567",
  storageBucket: "edicast-e2567.firebasestorage.app",
  messagingSenderId: "1074643359231",
  appId: "1:1074643359231:web:7b7220f3dea7e5b6bdc3ca",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
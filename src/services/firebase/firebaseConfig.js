// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use



const firebaseConfig = {
  apiKey: "AIzaSyDuisr9J4D_znqvgfheCOVuqEOwIauaLuI",
  authDomain: "tthellcaps.firebaseapp.com",
  projectId: "tthellcaps",
  storageBucket: "tthellcaps.appspot.com",
  messagingSenderId: "816961685523",
  appId: "1:816961685523:web:9de07ff89d2f556f6e97e6",
  measurementId: "G-TCXB0M7WEV"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
console.log(db)



import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDevIo5cgYV8i4zdq-GEs7lfYRl4WzdtfY",
  authDomain: "healthfriend-697a7.firebaseapp.com",
  projectId: "healthfriend-697a7",
  storageBucket: "healthfriend-697a7.appspot.com",
  messagingSenderId: "884186735846",
  appId: "1:884186735846:web:6619d4173ba5fa9f4b8727",
  measurementId: "G-TPLQVSK0F0",
  databaseURL: "https://healthfriend-697a7-default-rtdb.firebaseio.com/",
};
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getDatabase(app);

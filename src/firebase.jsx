// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo5jUX8Yp6HV7sm6SzJXVxVaQXTGZR27I",
  authDomain: "lowchat-73b38.firebaseapp.com",
  projectId: "lowchat-73b38",
  storageBucket: "lowchat-73b38.appspot.com",
  messagingSenderId: "9697620254",
  appId: "1:9697620254:web:730fb49ad6029b1e56590f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);


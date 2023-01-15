import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBveuNf6eO1Pcj-UCxj7tIc_fGjo2GIMcs",
  authDomain: "unwrapmovies-ec5a3.firebaseapp.com",
  projectId: "unwrapmovies-ec5a3",
  storageBucket: "unwrapmovies-ec5a3.appspot.com",
  messagingSenderId: "784472124152",
  appId: "1:784472124152:web:1ff28bba61ce360437290d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const provider = new GoogleAuthProvider(app);
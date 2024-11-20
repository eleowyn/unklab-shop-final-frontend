// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDep1iPXBfPMO3taeiZXIhHKwmqoFDJaFQ",
  authDomain: "unklab-shop-final-project.firebaseapp.com",
  databaseURL: "https://unklab-shop-final-project-default-rtdb.firebaseio.com",
  projectId: "unklab-shop-final-project",
  storageBucket: "unklab-shop-final-project.appspot.com",
  messagingSenderId: "102194537251",
  appId: "1:102194537251:web:d653b5f11fb6ef5da72296",
  measurementId: "G-KP126E0J0G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // No `export` keyword here

export default database; // Default export

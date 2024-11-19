// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDep1iPXBfPMO3taeiZXIhHKwmqoFDJaFQ",
  authDomain: "unklab-shop-final-project.firebaseapp.com",
  databaseURL: "https://console.firebase.google.com/u/2/project/unklab-shop-final-project/database/unklab-shop-final-project-default-rtdb/data/~2F",
  databaseURL: "https://unklab-shop-final-project-default-rtdb.firebaseio.com",
  projectId: "unklab-shop-final-project",
  storageBucket: "unklab-shop-final-project.firebasestorage.app",
  messagingSenderId: "102194537251",
  appId: "1:102194537251:web:d653b5f11fb6ef5da72296",
  measurementId: "G-KP126E0J0G"
};

const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
export const database = getDatabase(app);
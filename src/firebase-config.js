// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAiMWWM4gyoNW8-ZatnIGmTIl66dMEWi9U",
  authDomain: "final-project-front-end-7fde3.firebaseapp.com",
  databaseURL: "https://final-project-front-end-7fde3-default-rtdb.firebaseio.com",
  projectId: "final-project-front-end-7fde3",
  storageBucket: "final-project-front-end-7fde3.firebasestorage.app",
  messagingSenderId: "579070235405",
  appId: "1:579070235405:web:91e49c47ee7fe1fcae5644"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
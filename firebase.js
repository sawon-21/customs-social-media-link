// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm_23KKkcOiJoG18pC11PznirmbYTPQVY",
  authDomain: "genrrate.firebaseapp.com",
  databaseURL: "https://genrrate-default-rtdb.firebaseio.com",
  projectId: "genrrate",
  storageBucket: "genrrate.appspot.com",
  messagingSenderId: "287686510916",
  appId: "1:287686510916:web:e463e12a5ab3cfaa94ef11",
  measurementId: "G-JGTR2012CZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
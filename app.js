// app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDWoRPJQ7GDlPV6Gg5Ozevsb0gHvyF6NhE",
  authDomain: "smart-recycling-bin-5bc39.firebaseapp.com",
  databaseURL: "https://smart-recycling-bin-5bc39-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-recycling-bin-5bc39",
  storageBucket: "smart-recycling-bin-5bc39.appspot.com",
  messagingSenderId: "629524361345",
  appId: "1:629524361345:web:3fcb38929e5942fd705d80",
  measurementId: "G-16E48309L1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };

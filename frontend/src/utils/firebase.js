// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_6HmVup0034EZLYBJV19NqlmYx7q0r4c",
  authDomain: "mediacare-ea1a7.firebaseapp.com",
  projectId: "mediacare-ea1a7",
  storageBucket: "mediacare-ea1a7.appspot.com",
  messagingSenderId: "562621613021",
  appId: "1:562621613021:web:90dbc36b3d672ac3d66c34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

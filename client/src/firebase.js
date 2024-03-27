// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-418aa.firebaseapp.com",
  projectId: "mern-estate-418aa",
  storageBucket: "mern-estate-418aa.appspot.com",
  messagingSenderId: "48383890894",
  appId: "1:48383890894:web:6684150824773b7b51879f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

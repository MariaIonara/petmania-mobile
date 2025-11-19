// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8qQ9BEQrOzyChXJVMEFuMrJ-35BvFXx0",
  authDomain: "petmaniamobile-53196.firebaseapp.com",
  projectId: "petmaniamobile-53196",
  storageBucket: "petmaniamobile-53196.firebasestorage.app",
  messagingSenderId: "743125180244",
  appId: "1:743125180244:web:b173a2f95918940bbf32c1",
  measurementId: "G-42VGLYL03Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
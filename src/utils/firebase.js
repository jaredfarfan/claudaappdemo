// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAhFQnbS2Kx3bZjF34BDPzYFPea579mmI",
  authDomain: "library-app-v2-ea77b.firebaseapp.com",
  projectId: "library-app-v2-ea77b",
  storageBucket: "library-app-v2-ea77b.appspot.com",
  messagingSenderId: "634880454024",
  appId: "1:634880454024:web:a3c50e7018d8aac2361e3d",
};

// Initialize Firebase

export const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase);

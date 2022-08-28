// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDr8n4B6UfK4jm-5tZk8FJS4eMU9u9gfBY",
    authDomain: "reach-charity.firebaseapp.com",
    projectId: "reach-charity",
    storageBucket: "reach-charity.appspot.com",
    messagingSenderId: "277535621998",
    appId: "1:277535621998:web:37bf4d978a990e4a08f77f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
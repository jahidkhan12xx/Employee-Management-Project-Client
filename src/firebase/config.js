// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz-HjIqEZeDwVjbQLqy3af64OKsj988Dw",
  authDomain: "programming-booth.firebaseapp.com",
  projectId: "programming-booth",
  storageBucket: "programming-booth.appspot.com",
  messagingSenderId: "494491299265",
  appId: "1:494491299265:web:69772a05aacc430c81d340"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
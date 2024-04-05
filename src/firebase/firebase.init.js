// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWmBLJohMPU2IQztbf3DrKrjH6Coj_RYE",
  authDomain: "dragon-news-8b247.firebaseapp.com",
  projectId: "dragon-news-8b247",
  storageBucket: "dragon-news-8b247.appspot.com",
  messagingSenderId: "778254594279",
  appId: "1:778254594279:web:443c6aaa8113ab1e72b242"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
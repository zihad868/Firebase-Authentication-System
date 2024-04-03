// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKwrr9bcLK-fpnjdpb7VPkckFmxPVQwfc",
  authDomain: "fir-authentication-95498.firebaseapp.com",
  projectId: "fir-authentication-95498",
  storageBucket: "fir-authentication-95498.appspot.com",
  messagingSenderId: "181937414755",
  appId: "1:181937414755:web:b589f4202b48421ba70e56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
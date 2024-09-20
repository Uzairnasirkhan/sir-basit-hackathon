// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";

import { getFirestore,getDocs,collection } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZil1M00CaRJm8J3E164X3X0y5NpdC3CI",
  authDomain: "sir-basit-test.firebaseapp.com",
  projectId: "sir-basit-test",
  storageBucket: "sir-basit-test.appspot.com",
  messagingSenderId: "491949789769",
  appId: "1:491949789769:web:188c68ed2983b9fd18e598"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

window.resultView = async ()=>{
    window.location.href = "../pages/result.html"

}
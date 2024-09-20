// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";

import { getFirestore,getDoc,collection,doc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

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

  const tbody = document.getElementById("tbody")

  const uid = localStorage.getItem("userid")

  const getResult = async()=>{
    const docRef = doc(db,"students",uid)
    const stDoc = await getDoc(docRef)
    console.log(stDoc)
    const obj = {...stDoc.data()}
    console.log(obj) 

    tbody.innerHTML = `<td>${obj.firstName} ${obj.lastName}</td>
                <td>${obj.cnic}</td>
                <td>${obj.mathMarks}</td>
                <td>${obj.englishMarks}</td>
                <td>${obj.computerMarks}</td>` 


  }
  getResult()


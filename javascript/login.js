// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";

import {getAuth , signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js"

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
  
   // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);


  const email = document.getElementById("email")
const password = document.getElementById("password")

window.loginHandler = async ()=>{
    try{
        const userLogin = await signInWithEmailAndPassword(auth,email.value,password.value)
        // console.log(userLogin)
   
        const uid = userLogin.user.uid
        
        const docRef = doc(db,"students",uid) 
        const myDoc = await getDoc(docRef)
        const obj = {
            ...myDoc.data()
        }

        if(obj.userType == "admin"){
            window.location.replace("../pages/AddStudent.html")
        }
        else{
            localStorage.setItem("userid",uid)
            window.location.replace("../pages/student.html")
        }

        

    }
   
   catch(error){
       console.log(error)
   }
}
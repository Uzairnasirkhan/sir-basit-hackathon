  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
import{ getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

import { getFirestore,collection,addDoc,doc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

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



const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const cnic = document.getElementById("cnic")


// console.log(db)

window.signupFunc = async ()=>{

    // console.log("hhhhh")

    const userObj = {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          cnic: cnic.value,
          mathMarks: 0,
          englishMarks:0,
          computerMarks:0,
          totalMarks: mathmarks +englishMarks + computerMarks,
          userType: "Student"
    }

    try{
      const signup = await createUserWithEmailAndPassword(auth , email.value , password.value)

      const uid = signup.user.uid

      await setDoc(doc(db,"students",uid),userObj)
      alert("Student added successfully!")

      firstName.value = "";
      lastName.value = "";
      cnic.value = "";
      email.value = "";
      password.value = "";

    }
    catch(error){
      console.log(error)
    }

}

window.navFunc = ()=>{
  window.location.href = "../pages/record.html"
}
 



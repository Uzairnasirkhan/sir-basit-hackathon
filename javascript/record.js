// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";

import { getFirestore,getDocs,collection,updateDoc,doc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

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


const studentArr = [];


const getData = async ()=>{
    const ref = collection(db, "students")
    const dt = await getDocs(ref);

    dt.forEach((doc)=>{
         studentArr.push({
            ...doc.data(), id:doc.id
         })
    })
    console.log(studentArr)
     renderTable()

}
window.addEventListener("load",getData())

const tbody = document.getElementById("tbody")

const renderTable = ()=>{
    for(var i=0; i<studentArr.length; i++){
        var x = studentArr[i]
      if(x.userType!=="admin"){
        tbody.innerHTML += ` <tr id="${x.id}">
                <td>${x.firstName} ${x.lastName}</td>
                <td>${x.email}</td>
                <td class="markRow"><span>${x.mathMarks}</span><button class="uploadBtn" onclick="uploadMathMarks(this)"><i class="fa-solid fa-arrow-up-from-bracket"></i></button></td>
                <td class="markRow"><span>${x.englishMarks}</span><button class="uploadBtn" onclick="uploadEngMarks(this)"><i class="fa-solid fa-arrow-up-from-bracket"></i></button></td>
                <td class="markRow"><span>${x.computerMarks}</span><button class="uploadBtn" onclick="uploadCompMarks(this)"><i class="fa-solid fa-arrow-up-from-bracket"></i></button></td>
                <td>100</td>
              </tr> `    }
    }
}

window.uploadMathMarks = async(editMarks)=>{
       const mMarks = +prompt("Enter Math marks")
       editMarks.previousElementSibling.innerHTML = mMarks
       await updateDoc(doc(db,"students",editMarks.parentElement.parentElement.id),{
        mathMarks: mMarks
       }).then(()=>{
          alert("marks uploaded")
       }).catch((err)=>{
          console.log(err)
       })
}

window.uploadEngMarks = async(eMarks)=>{
   const engmarks = +prompt("Enter English marks")
   eMarks.previousElementSibling.innerHTML = engmarks
       await updateDoc(doc(db,"students",eMarks.parentElement.parentElement.id),{
        englishMarks: engmarks
       }).then(()=>{
          alert("marks uploaded")
       }).catch((err)=>{
          console.log(err)
       }) 
}

window.uploadCompMarks = async(cMarks)=>{
   const compmarks = +prompt("Enter Computer marks")
   cMarks.previousElementSibling.innerHTML = compmarks
       await updateDoc(doc(db,"students",cMarks.parentElement.parentElement.id),{
        computerMarks: compmarks
       }).then(()=>{
          alert("marks uploaded")
       }).catch((err)=>{
          console.log(err)
       })
}
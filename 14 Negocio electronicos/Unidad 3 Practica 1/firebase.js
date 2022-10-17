// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbBCVpqkzwCXqIn_pMfrDmhGxqlgHIG5c",
  authDomain: "paginaweb-26d26.firebaseapp.com",
  projectId: "paginaweb-26d26",
  storageBucket: "paginaweb-26d26.appspot.com",
  messagingSenderId: "470621483874",
  appId: "1:470621483874:web:7eeb10a6503b5194bcf23b",
  measurementId: "G-C4HDFTPLGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var messagesRef=firebase.database()
    .ref('Collected Data');
    
  document.getElementById('formulario')
    .addEventListener('submit',submitForm);
  
  function submitForm(e)
  {e.preventDefault();
    //Get values
    var name=getInputVal('name');
    var email=getInputVal('email');
    var edad=getInputVal('edad');
    var fecha=getInputVal('fecha');
    var msg=getInputVal('msg');
  
    saveMessage(name,email,edad,fecha,msg);
    document.getElementById('formulario').reset();}
    
    //Functiontogetgetformvalues
    function getInputVal(id)
    {return document.getElementById(id).value;}
    
    //Savemessagetofirebase
    function saveMessage(name,email,edad,fecha,msg)
    {var newMessageRef=messagesRef.push();
      newMessageRef.set({name:name,email:email,edad:edad,fecha:fecha,msg:msg});}
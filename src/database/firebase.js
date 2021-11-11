import firebase from "firebase";
import "firebase/firestore";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCdGt4aS9brpHz2bZF0XCa2-HNqkeubbfE",
    authDomain: "loginfirebase-2b086.firebaseapp.com",
    databaseURL: "https://loginfirebase-2b086.firebaseapp.com",
    projectId: "loginfirebase-2b086",
    storageBucket: "loginfirebase-2b086.appspot.com",
    messagingSenderId: "633852763577",
    appId: "1:633852763577:web:c4320a87eb475eccdeaa68"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



const db = firebase.firestore();

export default {
  firebase,
  db
};


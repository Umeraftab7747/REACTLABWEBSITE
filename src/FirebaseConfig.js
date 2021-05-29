import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyDFk6vTsc8mtFhcqQGym6XrWoRAo-gKgCo",
  authDomain: "reactlab-7d25f.firebaseapp.com",
  projectId: "reactlab-7d25f",
  storageBucket: "reactlab-7d25f.appspot.com",
  messagingSenderId: "311471154897",
  appId: "1:311471154897:web:0e4c85f6301754490347f0",
  measurementId: "G-CPLZEMJRT6"
  };
  
 const FirebaseApp= firebase.initializeApp(firebaseConfig);
 const db=FirebaseApp.firestore();

 const auth=firebase.auth();
 const storage=firebase.storage();
 export {db,auth,storage};
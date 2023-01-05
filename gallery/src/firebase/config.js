import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import env from "../env";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABPIHjK25yBplXiaGSpUs6b2z7F4XdE84",
  authDomain: "nexis-firegram.firebaseapp.com",
  projectId: "nexis-firegram",
  storageBucket: "nexis-firegram.appspot.com",
  messagingSenderId: "652355575336",
  appId: "1:652355575336:web:ad9916c7f5f371a0169f1d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectFirestore, projectStorage, projectAuth, timestamp};

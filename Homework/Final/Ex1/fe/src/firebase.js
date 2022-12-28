import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBc09F0oBCCIR0JGVzc8cNZhEyHBTxp3qE",
  authDomain: "project-d70a0.firebaseapp.com",
  projectId: "project-d70a0",
  storageBucket: "project-d70a0.appspot.com",
  messagingSenderId: "328237060071",
  appId: "1:328237060071:web:562d692f0d592ad844b742",
  measurementId: "G-VCPWSZJZDG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}
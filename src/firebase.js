import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGYfEnWyWF30W4TG6ugFYcEaJpqKgl5oU",
  authDomain: "to-do-form-8aefd.firebaseapp.com",
  projectId: "to-do-form-8aefd",
  storageBucket: "to-do-form-8aefd.appspot.com",
  messagingSenderId: "120557716221",
  appId: "1:120557716221:web:57c9aca1fec2c452daf494",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

// data base
const db = fb.firestore();

export { db, firebase };

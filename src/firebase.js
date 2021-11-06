import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';



const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyAVdYxAj5Vs5wOncxzjMBJynd2cLrW4lhU",
    authDomain: "messenger-clone-a2949.firebaseapp.com",
    databaseURL: "https://messenger-clone-a2949.firebaseio.com",
    projectId: "messenger-clone-a2949",
    storageBucket: "messenger-clone-a2949.appspot.com",
    messagingSenderId: "228977229896",
    appId: "1:228977229896:web:7b18e4199916504252187d",
    measurementId: "G-0ST0ZWXRY8"
  
});




const db = firebaseApp.firestore();
export{ db };
export default db;
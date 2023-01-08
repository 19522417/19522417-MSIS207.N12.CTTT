import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCCnOJM0DO5XeVtGaO07awRJ3ITuCFyGAU",
    authDomain: "facebook-fake-3fa3f.firebaseapp.com",
    projectId: "facebook-fake-3fa3f",
    storageBucket: "facebook-fake-3fa3f.appspot.com",
    messagingSenderId: "579829928063",
    appId: "1:579829928063:web:724a498f57b57d9b136f4a",
    measurementId: "G-BHVHF6J9MP"

};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}
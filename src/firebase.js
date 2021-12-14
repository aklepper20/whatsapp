import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAOobDLU9LLpa9hwtx4GG0VzDCDJqAvpEc",
  authDomain: "whatsapp-802a7.firebaseapp.com",
  projectId: "whatsapp-802a7",
  storageBucket: "whatsapp-802a7.appspot.com",
  messagingSenderId: "975339734096",
  appId: "1:975339734096:web:2dc3775013508d5777bd55",
  measurementId: "G-5V7PCVFVGH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;

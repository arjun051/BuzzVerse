import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmY6_nGTSxHhBe3cdFrNFQi9ZC9dVh2t4",
  authDomain: "buzzverse-c02f5.firebaseapp.com",
  projectId: "buzzverse-c02f5",
  storageBucket: "buzzverse-c02f5.appspot.com",
  messagingSenderId: "942829451854",
  appId: "1:942829451854:web:30066021a2eb83aa98e11f",
  measurementId: "G-JB1VPQCRTW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

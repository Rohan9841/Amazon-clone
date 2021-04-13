import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVNQ0_somWam8ZYRTrWJCLaEjCp5_Rw5Y",
  authDomain: "challenge-7b84c.firebaseapp.com",
  projectId: "challenge-7b84c",
  storageBucket: "challenge-7b84c.appspot.com",
  messagingSenderId: "905041932686",
  appId: "1:905041932686:web:ad227154424b6b35b974df",
  measurementId: "G-YKV1M8RX3K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
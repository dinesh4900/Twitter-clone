import firebase from 'firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyCcQFwivo-Vd_Ne1W_z-BEFJ7yRqvIJ7p4",
    authDomain: "twitter-clone4900.firebaseapp.com",
    databaseURL: "https://twitter-clone4900.firebaseio.com",
    projectId: "twitter-clone4900",
    storageBucket: "twitter-clone4900.appspot.com",
    messagingSenderId: "937367845971",
    appId: "1:937367845971:web:a4edf294b68507a4b5daa6",
    measurementId: "G-CL78Z1Q5ZF"
  };

  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;


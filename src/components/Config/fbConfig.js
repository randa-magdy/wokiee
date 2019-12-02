import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDkG1deTMkkndUc7Czamkx_uBoJ7rrz0Rs",
  authDomain: "wokiee-e6dec.firebaseapp.com",
  databaseURL: "https://wokiee-e6dec.firebaseio.com",
  projectId: "wokiee-e6dec",
  storageBucket: "wokiee-e6dec.appspot.com",
  messagingSenderId: "568868125578",
  appId: "1:568868125578:web:0e0820213338b1da802673",
  measurementId: "G-K0XYWV0ZGL"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  


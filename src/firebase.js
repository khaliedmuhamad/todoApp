// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = firebase.initializeApp(
    {
        apiKey: "AIzaSyDEK03yg91RP_vIFFTqGZHrPuyYUbEgjcA",
        authDomain: "todo-app-d5d54.firebaseapp.com",
        projectId: "todo-app-d5d54",
        storageBucket: "todo-app-d5d54.appspot.com",
        messagingSenderId: "980625417974",
        appId: "1:980625417974:web:d088d6f0cc6a21721caed7",
        measurementId: "G-CT0XV4EZL3"
      }
) ;

 const db = firebaseConfig.firestore(); 
 export default db;
import firebase from 'firebase'

const firebaseApp=firebase.initializeApp({
  apiKey: "AIzaSyBhxhMorHtslFhtYGiHTSrjXi9kwochmRg",
  authDomain: "todo-app-using-react-firebase.firebaseapp.com",
  databaseURL: "https://todo-app-using-react-firebase.firebaseio.com",
  projectId: "todo-app-using-react-firebase",
  storageBucket: "todo-app-using-react-firebase.appspot.com",
  messagingSenderId: "447794648447",
  appId: "1:447794648447:web:7b6e15fd5fb3af841b764a",
  measurementId: "G-3SLYQJ28S0"
})

const db=firebaseApp.firestore()

export {db}
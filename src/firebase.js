import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWQK95Rxg99Xvm2_p7kLk5OAyXZAnFUGk",
  authDomain: "https://www.niteshseram.me/discord-clone",
  databaseURL: "https://discord-clone-c51ae.firebaseio.com",
  projectId: "discord-clone-c51ae",
  storageBucket: "discord-clone-c51ae.appspot.com",
  messagingSenderId: "615907649203",
  appId: "1:615907649203:web:7e06fe98f14dc508ca72c6",
  measurementId: "G-GKSWXEZZF8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;

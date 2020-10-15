import firebase from "firebase/app"
import "@firebase/auth";
import "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDuI7iuaj9D7Ad2yO9GTrL5Fn68P6S-yoY",
  authDomain: "mood-7953d.firebaseapp.com",
  databaseURL: "https://mood-7953d.firebaseio.com",
  projectId: "mood-7953d",
  storageBucket: "mood-7953d.appspot.com",
  messagingSenderId: "123346955414",
  appId: "1:123346955414:web:bef2c0220af844fe04e6b7"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
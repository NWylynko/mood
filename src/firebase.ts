import firebase from "firebase/app"
import "@firebase/auth";
import "@firebase/firestore";
import { DocumentData } from "@firebase/firestore-types"

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

const firestore = firebase.firestore()

export const addEntry = async (fields: any) => {

  const timestamp = Date.now()

  const user_db = firestore
    .collection('users')
    .doc(firebase.auth().currentUser?.uid)

  await user_db
    .collection('mood_data')
    .add({...fields, timestamp})

  await user_db
    .set({ timestamp })
    
}

export const getTimestamp = async (): Promise<number> => {
  const user_db = firestore
    .collection('users')
    .doc(firebase.auth().currentUser?.uid)

  const response = await user_db.get()

  const { timestamp } = response.data() || { timestamp: 0 }

  return timestamp
}
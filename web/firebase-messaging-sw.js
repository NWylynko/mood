importScripts('https://www.gstatic.com/firebasejs/7.22.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.22.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyDuI7iuaj9D7Ad2yO9GTrL5Fn68P6S-yoY",
  authDomain: "mood-7953d.firebaseapp.com",
  databaseURL: "https://mood-7953d.firebaseio.com",
  projectId: "mood-7953d",
  storageBucket: "mood-7953d.appspot.com",
  messagingSenderId: "123346955414",
  appId: "1:123346955414:web:bef2c0220af844fe04e6b7"
});

const messaging = firebase.messaging();
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
require("firebase/firestore");

var config = {
  apiKey: "AIzaSyAd0WNAsr82VZIv5QLtRU-x1SH3PumpnCU",
  authDomain: "rsvp-7e985.firebaseapp.com",
  databaseURL: "https://rsvp-7e985.firebaseio.com",
  projectId: "rsvp-7e985",
  storageBucket: "rsvp-7e985.appspot.com",
  messagingSenderId: "639276181409"
};

export const firebaseApp = firebase.initializeApp(config);

console.log(firebaseApp.name, "556");

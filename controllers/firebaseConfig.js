const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');

const firebaseConfig = {
 

  apiKey: "AIzaSyCLV9_ZmByKz-9WbODpClP3l9MECLiiCs4",
  authDomain: "final-project-39dfa.firebaseapp.com",
  databaseURL: "https://final-project-39dfa-default-rtdb.firebaseio.com",
  projectId: "final-project-39dfa",
  storageBucket: "final-project-39dfa.appspot.com",
  messagingSenderId: "74746775883",
  appId: "1:74746775883:web:e1425328f39b34494a00ce"



};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

module.exports = {
    firebaseApp,
    firestore,
};

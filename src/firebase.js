import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyCsbAyNk0UKTjAYeHYObRJJuDArZI2keWo",
  authDomain: "portfoli-cher.firebaseapp.com",
  projectId: "portfoli-cher",
  storageBucket: "portfoli-cher.appspot.com",
  messagingSenderId: "1005739374269",
  appId: "1:1005739374269:web:7342057b4ad3358ff2a9d4"
};

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();

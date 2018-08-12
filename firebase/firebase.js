import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAVZ9nKnABLW3xCYgSI2BlgijKOmnoZsWc",
  authDomain: "expensify-56309.firebaseapp.com",
  databaseURL: "https://expensify-56309.firebaseio.com",
  projectId: "expensify-56309",
  storageBucket: "expensify-56309.appspot.com",
  messagingSenderId: "45669761025"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBp0KpQNpW3yoRXW_YSdrIeTvUQLkHW5w4",
    authDomain: "blog-ezcar.firebaseapp.com",
    databaseURL: "https://blog-ezcar.firebaseio.com",
    projectId: "blog-ezcar",
    storageBucket: "blog-ezcar.appspot.com",
    messagingSenderId: "1027643328110",
    appId: "1:1027643328110:web:85bb147336b52cd0"
};

// export const firebaseImpl = firebase.initializeApp(config);
// export const firebaseDatabase = firebase.database();
firebase.initializeApp(config);

export default firebase
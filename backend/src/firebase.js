var firebase = require("firebase-admin");

var serviceAccount = require("./key/blog-ezcar-firebase-adminsdk-z53ah-a325b52218.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://blog-ezcar.firebaseio.com"
});

module.exports = firebase
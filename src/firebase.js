import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCk6_8LU9ohoo47i482VypbfbVKZujam1g",
    authDomain: "sberbom.firebaseapp.com",
    databaseURL: "https://sberbom.firebaseio.com",
    projectId: "sberbom",
    storageBucket: "sberbom.appspot.com",
    messagingSenderId: "95748273063",
    appId: "1:95748273063:web:7a3b86d434a12756fa3c82",
    measurementId: "G-VDCDELZ4XW"
};
var fire = firebase.initializeApp(config);
export default fire;
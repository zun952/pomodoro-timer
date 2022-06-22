importScripts('https://www.gstatic.com/firebasejs/9.8.3/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.8.3/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDEm37gx2Cx9lE8kgIJZwR2vBN8nYMRa98",
    authDomain: "pomo-c0849.firebaseapp.com",
    projectId: "pomo-c0849",
    storageBucket: "pomo-c0849.appspot.com",
    messagingSenderId: "449676115235",
    appId: "1:449676115235:web:283732a90b3fc8b20be096",
    measurementId: "G-QT51CTNJ5H"
});

const messaging = firebase.messaging();
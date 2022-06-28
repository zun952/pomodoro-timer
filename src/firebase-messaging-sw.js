importScripts('https://www.gstatic.com/firebasejs/9.8.4/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.8.4/firebase-messaging-compat.js');

const app = firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
    vapidKey: ""
});

const messaging = firebase.messaging(app);

messaging.onBackgroundMessage((payload) => {
    
});
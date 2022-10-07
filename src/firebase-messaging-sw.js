const environment = require('./environments/environment')

importScripts('https://www.gstatic.com/firebasejs/9.8.4/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.8.4/firebase-messaging-compat.js');

const app = firebase.initializeApp(environment.firebase);

const messaging = firebase.messaging(app);

messaging.onBackgroundMessage((payload) => {
    
});
// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

import { initializeApp } from "firebase/app";
import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";
import { BroadcastChannel } from "worker_threads";

import { environment } from "./environments/environment";

const messaging = getMessaging(initializeApp(environment));
const broadcast = new BroadcastChannel('FCMService');

onBackgroundMessage(messaging, (payload) => {
    broadcast.postMessage(payload);
});

this.broadcast.onmessage = (event) => {
    console.log(event.data);
};
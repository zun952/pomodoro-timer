importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// import { getMessaging } from "firebase/messaging";
// import { onBackgroundMessage } from "firebase/messaging/sw";

// const messaging = getMessaging(firebaseApp);
// console.log('Start listening')

// onMessage(messaging, (payload) =>{
//   console.log('Message received. ', payload);
//   this.message = payload;
// });

// onBackgroundMessage(messaging, (payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);

//   const notificationTitle = 'Background Message Title: ';
//   const notificationOptions = {
//       body: payload
//   };
// });

// console.log(messaging);
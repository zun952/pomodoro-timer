import { Injectable } from '@angular/core';

import { AngularFireMessaging } from "@angular/fire/compat/messaging";

@Injectable({
  providedIn: 'root'
})
export class FCMService {
  token = '';
  constructor(private fireMessaging: AngularFireMessaging) {  }

  requestToken(){
    this.fireMessaging.requestToken.subscribe({
      next: token => {
        // console.log('I gotta token', token);
        this.token = token!;
      },
      error: err => {
        console.log('error: ', err);
      }
    });
  }
  
  receiveMessage(){
    this.fireMessaging.messages.subscribe((payload) => {
      console.log(payload);
      const notificationTitle = payload.notification?.title;
      const notificationOptions = {
        body: payload.notification?.body,
        icon: payload.notification?.image
      };

      if(!("Notification" in window)){
        console.log("This browser doesn't support system notification.");
      } else if(Notification.permission == "granted"){
        new Notification(notificationTitle!, notificationOptions);
      }
    });
  }
}

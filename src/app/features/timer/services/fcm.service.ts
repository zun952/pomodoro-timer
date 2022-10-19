import { Injectable } from '@angular/core';

import { AngularFireMessaging } from "@angular/fire/compat/messaging";

@Injectable({ providedIn: 'root' })
export class FCMService {
  token = '';
  
  constructor(private fireMessaging: AngularFireMessaging) {  }

  requestToken(){
    this.fireMessaging.requestToken.subscribe({
      next: token => this.token = token!,
      error: err => console.log('error: ', err)
    });
  }
  
  receiveMessage(){
    this.fireMessaging.messages.subscribe((payload) => {
      const notificationTitle = payload.notification?.title;
      const notificationOptions = {
        body: payload.notification?.body,
        icon: payload.notification?.image
      };

      if(!("Notification" in window)){
        console.log("This browser doesn't support system notification.");
        return;
      } 

      if(Notification.permission == "granted"){
        console.log("push notification sent");
        new Notification(notificationTitle!, notificationOptions);
      } else{
        console.log("check your web push permission");
      }
    });
  }
}

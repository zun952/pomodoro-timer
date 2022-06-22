import { Injectable } from '@angular/core';

import { AngularFireMessaging } from "@angular/fire/compat/messaging";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FCMService {
  message = new BehaviorSubject(null);

  constructor(private fireMessaging: AngularFireMessaging) {  }

  requestToken(): void{
    this.fireMessaging.requestToken.subscribe({
      next: token => {
        console.log('I gotta token', token);
      },
      error: err => {
        console.log('error: ', err);
      }
    });
  }
  
  receiveMessage(): void{
    this.fireMessaging.messages.subscribe((payload: any) => {
      console.log(`Foreground message: ${payload}`);
      const NotificationOptions = {
        body: payload.notification.body,
        data: payload.data,
        icon: payload.notification.icon
      };

      navigator.serviceWorker.getRegistration('/firebase-messaging-sw.js').then(registration => {
        registration?.showNotification(payload.notification.title, NotificationOptions);
      });

      this.message.next(payload);
    });
  }
}

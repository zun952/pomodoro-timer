import { Injectable } from '@angular/core';

import { AngularFireMessaging } from "@angular/fire/compat/messaging";

@Injectable({
  providedIn: 'root'
})
export class FCMService {
  constructor(private fireMessaging: AngularFireMessaging) { }

  requestToken(): void{
    this.fireMessaging.requestToken.subscribe({
      next: token => {
        console.log(token);
      },
      error: err => {
        console.log('error: ', err);
      }
    });
  }
  
  foregroundListening(): void{
    this.fireMessaging.messages.subscribe((message: any) => {
      console.log(`Foreground message: ${message}`);
    });
  }
}

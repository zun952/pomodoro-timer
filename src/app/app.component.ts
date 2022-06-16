import { Component, OnInit } from '@angular/core';

import { getMessaging, getToken, onMessage} from "firebase/messaging";

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pomodoro timer';
  message: any = null;

  constructor(){}

  ngOnInit(): void{
    this.requestPermission();
    this.listen();
  }

  requestPermission(){
    const messaging = getMessaging();
    getToken(messaging, { vapidKey: environment.firebase.vapidKey })
      .then(currentToken => {
        if(currentToken){
          console.log("Got a token");
          console.log(currentToken);
        } else{
          console.log('No token. Request permission to generate one.');
        }
      })
      .catch(err => {
        console.log('An error occuerred while retrieving token. ', err);
      });
  }

  listen(){
    const messaging = getMessaging();
    console.log('Start listening')

    onMessage(messaging, (payload) =>{
      console.log('Message received. ', payload);
      this.message = payload;
    });

    console.log(messaging);
  }
}

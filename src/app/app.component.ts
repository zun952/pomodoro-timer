import { Component, OnInit } from '@angular/core';

import { FCMService } from "./fcm.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: any = "pomodoro timer";

  constructor(private fcm: FCMService) {
    this.fcm.requestToken();
    this.fcm.receiveMessage();
  }

  ngOnInit(){
  }
}

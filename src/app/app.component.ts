import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import * as _ from "lodash";


import { FCMService } from "./fcm.service";

interface Course{
  description: string;
  courseListIcon: string;
  iconUrl: string;
  longDescription: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: any = "pomodoro timer";
  message: any;

  // courses$: Observable<Course[]>;

  constructor(private fcm: FCMService, private http: HttpClient) { }

  ngOnInit(){
    this.fcm.requestToken();
    this.fcm.receiveMessage();
    this.message = this.fcm.message;

    // this.courses$ = this.http
    //   .get<Course[]>("/courses.json")
    //   .map(data => _.values(data))
    //   .do(console.log);
  }

  pushTest(){
    
  }

}

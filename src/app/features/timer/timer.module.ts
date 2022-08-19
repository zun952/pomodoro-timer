import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { FCMService } from './services/fcm.service';

import * as firebase from "firebase/app";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireMessaging, AngularFireMessagingModule } from "@angular/fire/compat/messaging";
import { AngularFireModule } from "@angular/fire/compat";

import { environment } from 'environments/environment';
import { TimerComponent } from './timer.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [TimerComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    SwiperModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    FCMService,
    AngularFireMessaging
  ],
  exports: [TimerComponent]
})
export class TimerModule {}


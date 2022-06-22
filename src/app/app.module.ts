import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireMessagingModule } from "@angular/fire/compat/messaging";
import { AngularFireModule } from "@angular/fire/compat";

import { environment } from 'src/environments/environment';

import * as firebase from "firebase/app";
import { FCMService } from './fcm.service';
import { AsyncPipe } from '@angular/common';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    SwiperModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    FCMService,
    AsyncPipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

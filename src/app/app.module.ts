import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireMessaging, AngularFireMessagingModule } from "@angular/fire/compat/messaging";
import { AngularFireModule } from "@angular/fire/compat";

import { environment } from 'src/environments/environment';

import * as firebase from "firebase/app";
import { FCMService } from './fcm.service';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SwiperModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    FCMService,
    AsyncPipe,
    AngularFireMessaging
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

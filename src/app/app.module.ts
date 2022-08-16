import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { MainComponent } from './core/components/main/main.component';

import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireMessaging, AngularFireMessagingModule } from "@angular/fire/compat/messaging";
import { AngularFireModule } from "@angular/fire/compat";

import { environment } from 'src/environments/environment';

import * as firebase from "firebase/app";
import { FCMService } from './core/services/fcm.service';

firebase.initializeApp(environment.firebase);

const ROUTES = [
  {
    path: '',
    component: AppComponent
  }
]

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
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    FCMService,
    AsyncPipe,
    AngularFireMessaging
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

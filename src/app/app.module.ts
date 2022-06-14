import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { environment } from '../environments/environment';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { initializeApp } from 'firebase/app';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    SwiperModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

initializeApp(environment.firebase);

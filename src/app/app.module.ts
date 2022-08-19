import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';

import { TimerModule } from "./features/timer/timer.module";
import { SharedModule } from './shared/shared.module';

const ROUTES = [
  {
    path: '',
    component: AppComponent
  }
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TimerModule,
    SharedModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    AsyncPipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

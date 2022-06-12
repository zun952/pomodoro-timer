import { Component, OnInit, NgZone, ViewChild, ViewEncapsulation } from '@angular/core';

import { Navigation, Pagination, Swiper, SwiperOptions } from "swiper";
import { SwiperComponent } from 'swiper/angular';

import { Timer } from "../timer";

Swiper.use([Navigation, Pagination])

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MainComponent implements OnInit {
  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;
  interval: any;
  timerFocus: Timer;
  timerShortBreak: Timer;
  timerLongBreak: Timer;

  constructor(private ngZone: NgZone) {
    this.timerFocus = {
      sec: 900,
      date: new Date(900 * 1000),
      isRunning: false
    };
  
    this.timerShortBreak = {
      sec: 300,
      date: new Date(300 * 1000),
      isRunning: false
    };
    
    this.timerLongBreak = {
      sec: 1800,
      date: new Date(1800 * 1000),
      isRunning: false
    };
  }

  ngOnInit(): void { }

  config: SwiperOptions = {
    slidesPerView: 'auto',
    autoHeight: true,
    pagination: true,
    navigation: true,
    spaceBetween: 0
  }

  slidesEx = ['first', 'second']

  

  onClick(event: any){
    console.log(event)
    this.timerShortBreak.date.setMinutes(this.timerShortBreak.date.getMinutes() - 1);
  }

  onSwiper(swiper: any){
    console.log(swiper);
  }

  onSlideChange([swiper]: any){
    console.log(swiper);
  }

  startTimer(){
    this.interval = setInterval(() => {
      
    })
  }
}
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
  timerFocus: Timer;
  timerShortBreak: Timer;
  timerLongBreak: Timer;

  constructor(private ngZone: NgZone) {
    this.timerFocus = {
      time: new Date(0, 0, 0, 0, 15),
      isRunning: false
    };
  
    this.timerShortBreak = {
      time: new Date(0, 0, 0, 0, 5),
      isRunning: false
    };
    
    this.timerLongBreak = {
      time: new Date(0, 0, 0, 0, 30),
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
  }

  onSwiper(swiper: any){
    console.log(swiper);
  }

  onSlideChange([swiper]: any){
    console.log(swiper);
  }
}
import { Component, OnInit } from '@angular/core';

import SwiperCore, { SwiperOptions } from "swiper";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  template:`
    <swiper
      [config]="config"
      (swiper)="onSwiper($event)"
      (slideChange)="onSlideChange()"
    >
      <ng-template swiperSlide>Slide 1</ng-template>
      <ng-template swiperSlide>Slide 2</ng-template>
      <ng-template swiperSlide>Slide 3</ng-template>
    </swiper>
  `
})
export class MainComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  slides: string[] = Array.from({length: 2}).map(
    (el, index) => `Slide ${index + 1}`)

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: {clickable: true}
  }

  onSwiper([swiper] : any[]){
    console.log(swiper)
  }

  onSlideChange(){
    console.log('slide change')
  }
}

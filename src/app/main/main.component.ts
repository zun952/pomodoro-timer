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
    </swiper>
  `
})
export class MainComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  slides: string[] = Array.from({length: 5}).map(
    (el, index) => `Slide ${index + 1}`)

  config: SwiperOptions = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: {clickable: true}
  }

  onClick(){
    console.log(`clicked`)
  }

  onSwiper([swiper] : any[]){
    console.log(swiper)
  }

  onSlideChange(){
    console.log('slide change')
  }
}

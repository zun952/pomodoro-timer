import { Component, OnInit, NgZone, ViewChild, ViewEncapsulation } from '@angular/core';

import { Navigation, Pagination, Swiper, SwiperOptions } from "swiper";
import { SwiperComponent } from 'swiper/angular';

Swiper.use([Navigation, Pagination])

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MainComponent implements OnInit {
  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void { }

  config: SwiperOptions = {
    slidesPerView: 'auto',
    autoHeight: true,
    pagination: true,
    navigation: true,
    spaceBetween: 0
  }

  slidesEx = ['first', 'second']

  onClick(){
    console.log(`clicked`)
  }

  onSwiper([swiper]: any){
    console.log(swiper);
  }

  onSlideChange(swiper: any){
    if(swiper.isEnd){
      this.ngZone.run(() => {

      });
    }
  }
}
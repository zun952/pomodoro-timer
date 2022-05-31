import { Component, OnInit, NgZone, ViewChild, ChangeDetectorRef } from '@angular/core';

import SwiperCore, { Navigation, Pagination, SwiperOptions } from "swiper";
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Navigation, Pagination])

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;

  constructor(private cd: ChangeDetectorRef, private ngZone: NgZone) { }

  ngOnInit(): void {  }

  config: SwiperOptions = {
    slidesPerView: 'auto',
    autoHeight: true,
    pagination: {
      clickable: true
    },
    navigation: true,
    spaceBetween: 10
  }

  slidesEx = ['first', 'second']

  onClick(){
    console.log(`clicked`)
  }

  onSwiper([swiper] : any[]){
    console.log(swiper)
  }

  onSlideChange(swiper: any){
    if(swiper.isEnd){
      this.ngZone.run(() => {
        this.slidesEx = [...this.slidesEx, `added ${this.slidesEx.length - 1}`];
      });

      console.log(this.slidesEx);
    }
  }
}

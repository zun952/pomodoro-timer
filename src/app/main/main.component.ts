import { Component, OnInit, NgZone, ViewChild, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';

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

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.swiperRef?.swiperRef);
  }

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
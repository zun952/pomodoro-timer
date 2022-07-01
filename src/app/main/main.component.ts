import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import { Navigation, Pagination, Swiper, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { FCMService } from '../fcm.service';

import { Timer } from '../timer';
import { sendNotification } from "../utils";

Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;
  interval: ReturnType<typeof setTimeout> = setTimeout(() => {}, 1000);
  timers: Timer[] = [];

  constructor(private fcm: FCMService) {
    const timerFocus: Timer = {
      sec: 900,
      date: new Date(900 * 1000),
      isRunning: false,
    };
    const timerShortBreak: Timer = {
      sec: 300,
      date: new Date(300 * 1000),
      isRunning: false,
    };
    const timerLongBreak: Timer = {
      sec: 1800,
      date: new Date(1800 * 1000),
      isRunning: false,
    };

    this.timers.push(timerFocus);
    this.timers.push(timerShortBreak);
    this.timers.push(timerLongBreak);
  }

  ngOnInit(): void {}

  config: SwiperOptions = {
    slidesPerView: 'auto',
    autoHeight: true,
    pagination: true,
    navigation: true,
    spaceBetween: 0,
  };

  onClick(event: any) {
    switch (event.target.className) {
      case 'focus':
        this.executeTimer(this.timers[0]);
        break;

      case 'shortBreak':
        this.executeTimer(this.timers[1]);
        break;

      case 'longBreak':
        this.executeTimer(this.timers[2]);
        break;

      default:
        return;
    }
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }

  onSlideChange([swiper]: any) {
    console.log(swiper);
    this.stopTimer(this.timers[swiper.activeIndex], 'reset');
  }

  executeTimer(timer: Timer) {
    if (!timer.isRunning)
      this.startTimer(timer);
    else
      this.stopTimer(timer, 'pause');
  }

  startTimer(timer: Timer) {
    timer.isRunning = true;

    this.interval = setInterval(() => {
      const time = timer.date.getTime() - 1000;
      if (time < 0) {
        console.log('timer end.');
        this.stopTimer(timer, 'reset');

        sendNotification(this.fcm.token);
        return;
      }

      timer.date = new Date(time);
    }, 1000);

    console.log('timer start.')
  }

  stopTimer(timer: Timer, condition: string){
    timer.isRunning = false;
    clearInterval(this.interval);

    switch(condition){
      case 'pause':
        console.log('timer stopped.');
        break;

      case 'reset':
        timer.date = new Date(timer.sec * 1000);
        console.log('timer reset.');
        break;

      default:
        return;
    }
  }
  
  onClickTest(){
    sendNotification(this.fcm.token);
  }
}

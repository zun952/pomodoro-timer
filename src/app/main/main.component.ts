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
  currentTimer = 0;

  focus = 20;
  shortBreak = 5;
  longBreak = 30;

  constructor(private fcm: FCMService) {
    const timerFocus: Timer = {
      type: 'focus',
      sec: this.focus,
      date: new Date(this.focus * 60000),
      isRunning: false,
    };
    const timerShortBreak: Timer = {
      type: 'short break',
      sec: this.shortBreak,
      date: new Date(this.shortBreak * 60000),
      isRunning: false,
    };
    const timerLongBreak: Timer = {
      type: 'long break',
      sec: this.longBreak,
      date: new Date(this.longBreak * 60000),
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

  onTimeChanged(event: any){
    if(event.target.value >= 60) event.target.value = 59;
    if(event.target.value < 0) event.target.value = 0;
    
    this.timers[this.currentTimer].sec = event.target.value;
    console.log(this.currentTimer);
    this.stopTimer(this.timers[this.currentTimer], "reset");
  }

  onClick(event: any, timer: Timer) {
    switch (timer.type) {
      case 'focus':
        this.executeTimer(this.timers[0]);
        break;

      case 'shortBreak':
        this.executeTimer(this.timers[1]);
        break;

      case 'longBreak':
        this.executeTimer(this.timers[2]);
        break;
    }
  }

  onSwiper(swiper: any) { }

  onSlideChange([swiper]: any) {
    this.currentTimer = swiper.activeIndex;

    this.stopTimer(this.timers[this.currentTimer], 'reset');
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

        sendNotification(this.fcm.token, timer.type);
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
        timer.date = new Date(timer.sec * 60000);
        console.log('timer reset.');
        break;

      default:
        return;
    }
  }

  isTimerRunning(): boolean{
    return this.timers[this.currentTimer].isRunning;
  }
  
  onClickTest(){
    sendNotification(this.fcm.token, 'test');
  }
}

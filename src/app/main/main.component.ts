import {
  Component,
  OnInit,
  NgZone,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import { Navigation, Pagination, Swiper, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

import { Timer } from '../timer';

Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit {
  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;
  interval: ReturnType<typeof setTimeout> = setTimeout(() => {}, 1000);

  timers: Timer[] = [];

  constructor(private ngZone: NgZone) {
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
    this.resetTimer(this.timers[swiper.activeIndex]);
  }

  executeTimer(timer: Timer) {
    if (!timer.isRunning)
      this.startTimer(timer);
    else
      this.pauseTimer(timer);
  }

  startTimer(timer: Timer) {
    timer.isRunning = true;

    this.interval = setInterval(() => {
      const time = timer.date.getTime() - 1000;
      if (time < 0) {
        console.log('timer end.');
        clearInterval(this.interval);
        return;
      }

      timer.date = new Date(time);
    }, 1000);

    console.log('timer start.')
  }

  pauseTimer(timer: Timer) {
    timer.isRunning = false;
    clearInterval(this.interval);
    
    console.log('timer stopped.');
  }

  resetTimer(timer: Timer) {
    this.pauseTimer(timer);
    timer.date = new Date(timer.sec * 1000);

    console.log('timer reset.');
  }
}

import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { AngularFireModule } from "@angular/fire/compat";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppComponent } from './app.component';
import { FCMService } from './fcm.service';

import { environment } from 'src/environments/environment';

describe('AppComponent', () => {
  let fcmService: FCMService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpClientModule,
        SwiperModule,
        FormsModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFireMessagingModule,
        AngularFireModule.initializeApp(environment.firebase)
      ],
      declarations: [AppComponent],
      providers:[
        { provide: FCMService, useValue: fcmService }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pomodoro timer'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pomodoro timer');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'pomodoro timer app is running!'
    );
  });
});

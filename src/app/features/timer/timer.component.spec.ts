import { TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TimerComponent } from './timer.component';

import { environment } from "app/../environments/environment";

describe('TimerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule
      ],
      declarations: [TimerComponent],
      providers:[
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TimerComponent);

    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

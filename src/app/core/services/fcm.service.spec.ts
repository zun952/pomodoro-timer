import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { environment } from 'src/environments/environment';

import { FCMService } from './fcm.service';

describe('FCMService', () => {
  let service: FCMService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        AngularFireMessagingModule,
        AngularFireModule.initializeApp(environment.firebase)
      ]
    });
    service = TestBed.inject(FCMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly VAPID_PUBLIC_KEY = "BGY5WrT3hPALEEsO3POWxlLEID2zAXIy3OG9IxlRe2ToyR6wokt5-GFG_KZcBm5EzFJ-rQDK1C_ftSvTEANKXLE";
  // readonly VAPID_PRIVATE_KEY = "a5f_9HWzkTePqttxtgXsMUd29zg6t_4Z-QWAEBnN4xI";

  title = 'pomodoro timer';

  constructor(){}
}

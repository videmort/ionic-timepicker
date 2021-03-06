import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home'
    },
    {
      title: 'Reactive Form',
      url: '/reactive-form'
    },
    {
      title: 'Template Driven Form',
      url: '/template-driven-form'
    },
    {
      title: 'TimePicker (using component)',
      url: '/timepicker-component'
    },
    {
      title: 'TimePicker (using directive)',
      url: '/timepicker-directive'
    },
    {
      title: 'TimePicker (using button)',
      url: '/timepicker-button'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

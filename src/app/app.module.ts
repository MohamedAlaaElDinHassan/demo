import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ResultPage } from '../pages/result/result';
import { ComponentPage } from '../pages/component/component';
import {SignupPage} from "../pages/signup/signup";
import {LoginPage} from "../pages/login/login";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResultPage,
      ComponentPage,
      SignupPage,
      LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ResultPage,
      ComponentPage,
      SignupPage,
      LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

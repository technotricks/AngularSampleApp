import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {NewPlacePage} from "../pages/new-place/new-place";
import {PlaceService} from "../services/places.service";
import {ProjectListService} from "../services/projectlist.services";
import {ListExamplePage} from "../pages/list-example/list-example";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPlacePage,
    ListExamplePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPlacePage,
    ListExamplePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlaceService,
    ProjectListService
  ]
})
export class AppModule {}

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
import {StorageExamplePage} from "../pages/storage-example/storage-example";
import {IonicStorageModule} from "@ionic/storage";
import {CurrentLocationExamplePage} from "../pages/current-location-example/current-location-example";
import {Geolocation} from "@ionic-native/geolocation";
import {GooglemapExamplePage} from "../pages/googlemap-example/googlemap-example";
import {GoogleMaps} from "@ionic-native/google-maps";
import {AgmCoreModule} from "angular2-google-maps/core";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPlacePage,
    ListExamplePage,
    StorageExamplePage,
    CurrentLocationExamplePage,
    GooglemapExamplePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCa_DyGkvdnR8EqRoByYp887ptziYSdQNg'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPlacePage,
    ListExamplePage,
    StorageExamplePage,
    CurrentLocationExamplePage,
    GooglemapExamplePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlaceService,
    ProjectListService,
    Geolocation,
    GoogleMaps
  ]
})
export class AppModule {}

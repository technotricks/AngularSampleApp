import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrentLocationExamplePage } from './current-location-example';

@NgModule({
  declarations: [
    CurrentLocationExamplePage,
  ],
  imports: [
    IonicPageModule.forChild(CurrentLocationExamplePage),
  ],
  exports: [
    CurrentLocationExamplePage
  ]
})
export class CurrentLocationExamplePageModule {}

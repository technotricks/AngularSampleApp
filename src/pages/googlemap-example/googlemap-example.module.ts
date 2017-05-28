import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GooglemapExamplePage } from './googlemap-example';

@NgModule({
  declarations: [
    GooglemapExamplePage,
  ],
  imports: [
    IonicPageModule.forChild(GooglemapExamplePage),
  ],
  exports: [
    GooglemapExamplePage
  ]
})
export class GooglemapExamplePageModule {}

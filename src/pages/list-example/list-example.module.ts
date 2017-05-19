import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListExamplePage } from './list-example';

@NgModule({
  declarations: [
    ListExamplePage,
  ],
  imports: [
    IonicPageModule.forChild(ListExamplePage),
  ],
  exports: [
    ListExamplePage
  ]
})
export class ListExamplePageModule {}

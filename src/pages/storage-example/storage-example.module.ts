import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StorageExamplePage } from './storage-example';

@NgModule({
  declarations: [
    StorageExamplePage,
  ],
  imports: [
    IonicPageModule.forChild(StorageExamplePage),
  ],
  exports: [
    StorageExamplePage
  ]
})
export class StorageExamplePageModule {}

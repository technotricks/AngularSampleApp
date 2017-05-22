import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {PlaceService} from "../../services/places.service";


@IonicPage()
@Component({
  selector: 'page-storage-example',
  templateUrl: 'storage-example.html',
})
export class StorageExamplePage {

  places: {title:string}[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,private  placeService:PlaceService) {
  }

  ionViewWillEnter() {
    this.placeService.getPlaces().then(
      (value) => {
        this.places = value
      }
    );
  }


  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Storage Alert Example',
      message: "Enter a title to store",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');

            this.placeService.addPlaces(data);
          }
        }
      ]
    });
    prompt.present();
  }

}

import { Component } from '@angular/core';
import {PlaceService} from "../../services/places.service";
import {NavController, ToastController} from "ionic-angular";


@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(private placesService: PlaceService, private  navCtrl: NavController, private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlacePage');
  }

  onAddPlace(value:{title:string}){
    console.log(value.title);


    let toast = this.toastCtrl.create({
      message: value.title,
      duration: 3000
    });
    toast.present();
  }

}

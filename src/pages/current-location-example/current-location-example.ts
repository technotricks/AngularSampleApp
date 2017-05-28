import { Component } from '@angular/core';
import {Geolocation} from "@ionic-native/geolocation";

@Component({
  selector: 'page-current-location-example',
  templateUrl: 'current-location-example.html',
})
export class CurrentLocationExamplePage {


  lat:number;
  lng:number;
  constructor(private geoLoaction:Geolocation) {


    this.geoLoaction.getCurrentPosition().then(
      (location) =>{
        this.lat = location.coords.latitude;
        this.lng = location.coords.longitude;
      }
    ).catch(
      (err) =>{

        console.log(err.toString());
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrentLocationExamplePage');



  }



}

import { Component } from '@angular/core';
import {
  CameraPosition, GoogleMap, GoogleMaps, GoogleMapsEvent, LatLng

} from "@ionic-native/google-maps";

@Component({
  selector: 'page-googlemap-example',
  templateUrl: 'googlemap-example.html',
})
export class GooglemapExamplePage {


  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(public googleMaps:GoogleMaps) {

  }

  ngAfterViewInit(){
    // this.loadMap();
  }


  loadMap(){
    // create a new map by passing HTMLElement
    let element: HTMLElement = document.getElementById('map');

    let map: GoogleMap = this.googleMaps.create(element);


    // listen to MAP_READY event
    // You must wait for this event to fire before adding something to the map or modifying it in anyway
    map.one(GoogleMapsEvent.MAP_READY).then(() =>{
      console.log('Map Ready!!!');
    })



    // create LatLng object
    let ionic: LatLng = new LatLng(43.0741904,-89.3809802);

    // create CameraPosition
    let position: CameraPosition = {
      target: ionic,
      zoom: 18,
      tilt: 30
    };

    // move the map's camera to position
    map.moveCamera(position);

    // // create new marker
    // let markerOptions: MarkerOptions = {
    //   position: ionic,
    //   title: 'Ionic'
    // };
    //
    // const marker: Marker = map.addMarker(markerOptions)
    //   .then((m: Marker) => {
    //    // m.showInfoWindow();
    //   });
  }



}

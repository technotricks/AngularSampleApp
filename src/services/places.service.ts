import  {Storage} from  '@ionic/storage'
import {Injectable} from "@angular/core";

@Injectable()
export class PlaceService{

  private  places: {title: string}[] = [];

  constructor(private storage:Storage) {
  }

  addPlaces(place: { title: string }) {
    this.places.push(place)
    this.storage.set('places',this.places);
  }

  getPlaces() {
    // return this.places.slice();
    return this.storage.get('places')
      .then(
        (places) => {
          this.places = (places == null)? [] : places ;
          console.log(this.places.entries());
          return this.places;

        }

      );
  }
}

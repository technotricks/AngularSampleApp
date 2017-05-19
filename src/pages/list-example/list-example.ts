import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-list-example',
  templateUrl: 'list-example.html',
})
export class ListExamplePage {

  listItems:string[]=["Android","Iphone","Mac","Windows","Linux"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListExamplePage');
  }


  onAddItem(){
    this.listItems.push("New Item"+(this.listItems.length+1));
  }

  onRemoveItem(){
    this.listItems.pop();
  }

  onDuplicate(item:string){
    this.listItems.push(item);
    console.log(item);

  }
}

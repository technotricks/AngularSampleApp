import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewPlacePage} from "../new-place/new-place";
import {ProjectListService} from "../../services/projectlist.services";
import {Project} from "../../model/project.model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  projects:Project[] = [];

  constructor(public navCtrl: NavController, private  projectListService: ProjectListService) {

  }

  ionViewWillEnter(){
  this.projects = this.projectListService.getProjects();
  }

  onLoadNewPlace(){
    console.log("Click");
    this.navCtrl.push(NewPlacePage);

  }

  itemSelected(project:Project){
    console.log("Clicked item "+project.title);
    this.navCtrl.push(project.page);

  }

}

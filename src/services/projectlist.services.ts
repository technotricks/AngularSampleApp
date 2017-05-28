import {Project} from "../model/project.model";
import {ListExamplePage} from "../pages/list-example/list-example";
import {NewPlacePage} from "../pages/new-place/new-place"
import {StorageExamplePage} from "../pages/storage-example/storage-example";
import {CurrentLocationExamplePage} from "../pages/current-location-example/current-location-example";
import {GooglemapExamplePage} from "../pages/googlemap-example/googlemap-example";

export class ProjectListService{
  private  projects = [
    new Project(1,"List Example",ListExamplePage),
    new Project(2,"Show toast",NewPlacePage),
    new Project(3,"Storage | Popup Example",StorageExamplePage),
    new Project(4,"Current Location",CurrentLocationExamplePage),
    new Project(5,"Google Map",GooglemapExamplePage)

  ];


  getProjects() {
    return this.projects.slice();
  }
}

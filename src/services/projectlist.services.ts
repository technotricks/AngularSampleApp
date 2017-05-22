import {Project} from "../model/project.model";
import {ListExamplePage} from "../pages/list-example/list-example";
import {NewPlacePage} from "../pages/new-place/new-place"
import {StorageExamplePage} from "../pages/storage-example/storage-example";

export class ProjectListService{
  private  projects = [
    new Project(1,"List Example",ListExamplePage),
    new Project(2,"Show toast",NewPlacePage),
    new Project(3,"Storage | Popup Example",StorageExamplePage)



  ];


  getProjects() {
    return this.projects.slice();
  }
}

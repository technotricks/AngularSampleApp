import {Project} from "../pages/home/project.model";
import {ListExamplePage} from "../pages/list-example/list-example";
import {NewPlacePage} from "../pages/new-place/new-place";
export class ProjectListService{
  private  projects = [
    new Project(1,"List Example",ListExamplePage),
    new Project(1,"Show toast",NewPlacePage)


  ];


  getProjects() {
    return this.projects.slice();
  }
}

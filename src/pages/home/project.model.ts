import {Page} from "ionic-angular/umd/navigation/nav-util";
export class  Project{
  id:number;
  title: string;
  className:string;

  page:Page;


  constructor(id: number, title: string, page: Page) {
    this.id = id;
    this.title = title;
    this.page = page;
  }
}

import { Injectable } from '@angular/core';

interface NavBarInterface {
  title: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  navBar: NavBarInterface[] = [
    //{title: 'Home', link: ''},
    {title: 'About', link: '#aAbout'},
    {title: 'Skills', link: '#aSkills'},
    {title: 'Projects', link: '#aProjects'},
    {title: 'Contact', link: '#aContact'}
  ]

  showSideBar: boolean = true;
  readonly positionFixed: string = "fixed";
  readonly positionSticky: string = "sticky";

  toggleSideBar() {
    this.showSideBar =!this.showSideBar;
  }
}

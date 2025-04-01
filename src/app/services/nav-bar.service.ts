import { Injectable } from '@angular/core';

interface NavBarInterface {
  titleEn: string;
  titleDe: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  navBar: NavBarInterface[] = [
    //{title: 'Home', link: ''},
    {titleEn: 'About', titleDe: 'Über', link: '#aAbout'},
    {titleEn: 'Skills', titleDe: 'Skills',  link: '#aSkills'},
    {titleEn: 'Projects', titleDe: 'Projekte', link: '#aProjects'},
    {titleEn: 'Contact', titleDe: 'Kontakt', link: '#aContact'}
  ]

  showSideBar: boolean = false;
  hideOnScroll: boolean = false;
  readonly positionFixed: string = "fixed";
  readonly positionSticky: string = "sticky";

  toggleSideBar(boolean: boolean) {
    this.hideOnScroll = boolean;
    this.showSideBar =!this.showSideBar;
  }
}

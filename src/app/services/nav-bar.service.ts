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
    {titleEn: 'About', titleDe: 'Über', link: '#aAbout'},
    {titleEn: 'Skills', titleDe: 'Skills',  link: '#aSkills'},
    {titleEn: 'Projects', titleDe: 'Projekte', link: '#aProjects'},
    {titleEn: 'Contact', titleDe: 'Kontakt', link: '#aContact'}
  ]

  showSideBar: boolean = false;

  toggleSideBar():void {
    this.showSideBar =!this.showSideBar;
  }
}

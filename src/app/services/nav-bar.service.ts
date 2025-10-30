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
    {titleEn: 'ABOUT', titleDe: 'Über', link: '#aAbout'},
    {titleEn: 'SKILLS', titleDe: 'Skills',  link: '#aSkills'},
    {titleEn: 'PROJECTS', titleDe: 'Projekte', link: '#aProjects'},
    {titleEn: 'CONTACT', titleDe: 'Kontakt', link: '#aContact'}
  ]

  showSideBar: boolean = false;

  toggleSideBar():void {
    this.showSideBar =!this.showSideBar;
  }
}

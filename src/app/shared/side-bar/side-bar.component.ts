import { Component, inject, HostListener, Input } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  navBarService = inject(NavBarService);
  languages = inject(LanguageService);
  
  @Input() position = '';
  @Input() noScroll: boolean = true;
  @Input() positionY: string = '';
  @HostListener('window:scroll', ['$event'])

  /*
  onScroll(event: Event) {
    this.navBarService.showSideBar = !this.navBarService.showSideBar;
  }*/

  leavingSideBar() {
    this.navBarService.showSideBar = false;
  }

  get currentLang():any {
    return this.languages.currentLanguage()
  }

}

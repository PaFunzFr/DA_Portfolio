import { Component, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';

interface NavBarInterface {
  title: string;
  link: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  languages = inject(LanguageService);
  currentLanguage = this.languages.currentLanguage;

    toggleLang(newLanguage: string): void {
      this.languages.toggleLanguage(newLanguage);
    }

    navBar: NavBarInterface[] = [
      //{title: 'Home', link: ''},
      {title: 'About', link: '#aAbout'},
      {title: 'Skills', link: '#aSkills'},
      {title: 'Projects', link: '#aProjects'},
      {title: 'Contact', link: '#aContact'}
    ]
  
}

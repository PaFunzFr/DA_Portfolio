import { Component, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';


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

    toggleLang(): void {
      this.languages.toggleLanguage();
    }
  
}

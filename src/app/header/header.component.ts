import { Component, inject, Input } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { ButtonStateService } from '../services/button-state.service';
import { NavBarService } from '../services/nav-bar.service';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  ngOnInit() {
    this.savedLanguage = localStorage.getItem('language') || 'en';
    this.toggleLang(this.savedLanguage);
  }

  @Input() targetHref: string = '';
  @Input() hideOnScroll: boolean = false;

  languages = inject(LanguageService);
  buttonState = inject(ButtonStateService);
  navBarService = inject(NavBarService);
  isDisabledEn = this.buttonState.getButtonState('en');
  isDisabledDe = this.buttonState.getButtonState('de');
  bars: number[] = [0,1,2];
  burgerHovered: boolean = false;
  savedLanguage: string = '';

  toggleLang(newLanguage: string): void {
    this.savedLanguage = newLanguage;
    localStorage.setItem('language', this.savedLanguage);
    this.buttonState.setButtonState(true, this.savedLanguage); 
    this.languages.toggleLanguage(this.savedLanguage);
    const otherLanguage = this.savedLanguage === 'en' ? 'de' : 'en';
    this.buttonState.setButtonState(false, otherLanguage);
  }

    hoverBurger(status: boolean) {
      this.burgerHovered = status;
    }

    scrollToSection(sectionId: string) {
      if (!sectionId) return;
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    get currentLang():any {
      return this.languages.currentLanguage()
    }

}

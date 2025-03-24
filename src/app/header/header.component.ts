import { Component, inject, Input } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { ButtonStateService } from '../services/button-state.service';
import { NavBarService } from '../services/nav-bar.service';
import { SideBarComponent } from "../shared/side-bar/side-bar.component";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  ngOnInit() {
    this.toggleLang('en');
  }

  languages = inject(LanguageService);
  buttonState = inject(ButtonStateService);
  navBarService = inject(NavBarService);
  currentLanguage = this.languages.currentLanguage;
  isDisabledEn = this.buttonState.getButtonState('en');
  isDisabledDe = this.buttonState.getButtonState('de');
  bars: number[] = [0,1,2];
  burgerHovered: boolean = false;

  toggleLang(newLanguage: string): void {
    this.buttonState.setButtonState(true, newLanguage); 
    this.languages.toggleLanguage(newLanguage);
    const otherLanguage = newLanguage === 'en' ? 'de' : 'en';
    this.buttonState.setButtonState(false, otherLanguage);
  }

    hoverBurger(status: boolean) {
      this.burgerHovered = status;
    }

}

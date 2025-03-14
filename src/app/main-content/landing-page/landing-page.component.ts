import { Component, inject, HostListener } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  // set texts
  languages = inject(LanguageService);

  get welcome(): string {
    return this.languages.getTranslation('landingPage' , 'welcome');
  }

  get title(): string {
    return this.languages.getTranslation('landingPage', 'title');
  }


  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const viewportHeight = window.innerHeight; // => 100vh
    if (window.scrollY <= 1.0 * viewportHeight) {
      return window.scrollY
    }
    return viewportHeight + 1; // 1 => little offset
  }
}

import { Component, inject, signal, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { HeaderComponent } from '../../header/header.component';
import { ThreeComponent } from "../../shared/three/three.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, ThreeComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush // change detection on explizit events or changes => avoids scroll event console error
})

export class LandingPageComponent {

  scrollY = signal<number>(window.scrollY);
  // set texts
  languages = inject(LanguageService);

  get welcomeLanding(): string {
    return this.languages.getTranslation('landingPage' , 'welcome');
  }

  get title(): string {
    return this.languages.getTranslation('landingPage', 'title');
  }

  get welcomeHero(): string {
    return this.languages.getTranslation('hero', 'welcome');
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const viewportHeight = window.innerHeight; // => 100vh
    if (window.scrollY <= 1.0 * viewportHeight) {
      return window.scrollY
    }
    return viewportHeight + 1; // 1 => small offset
  }

  setFontSize(): string {
    let size = Math.min(window.scrollY / 10, window.innerHeight / 12);
    return `${size}px`;
  }

  hideAtViewportHeight(): number {
    const viewportHeight = window.innerHeight; // => 100vh
    if (window.scrollY >= 1.5 * viewportHeight) {
      return 0;
    } else {
      return 1
    }
  }

}

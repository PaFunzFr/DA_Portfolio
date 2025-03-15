import { Injectable, signal } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLanguage = signal<string>('en'); // set signal
  private translation: { [key:string]: any} = {
    en: {
      landingPage: {
        welcome: 'Welcome, I am Patrick,',
        title: `<span class="col-dev">Web-Developer</span> and<br>
                <span class="col-des">Designer</span> with an <br>
                architectural Background`,
        scroll: 'scroll down'
      }
    },
    de: {
      landingPage: {
        welcome: 'Hallo, Ich bin Patrick,',
        title: `<span class="col-dev">Web-Developer</span> und<br>
                <span class="col-des">Designer</span> mit einem <br>
                Architektur Hintergrund`,
        scroll: 'scroll down'
    },
  }
}

  getTranslation(section: string, content: string): string {
    const language = this.currentLanguage(); // get signal
    return this.translation[language][section][content];
  }

  toggleLanguage(): void {
    const newLanguage = this.currentLanguage() === 'en' ? 'de' : 'en';
    this.currentLanguage.set(newLanguage); // set new signal
  }

}

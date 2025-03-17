import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {

  currentLanguage = signal<string>('en'); // set signal

  private translation: { [key:string]: any} = {
    en: {
      landingPage: {
        welcome: 'Hello, I am Patrick Frey,',
        title: `<span class="col-dev">Web-Developer</span> and<br>
                <span class="col-des">Designer</span> with an <br>
                architectural Background`,
        scroll: 'scroll down'
      },
      hero: {
        welcome: 'Welcome',
        designer: 'my background as an architect ensures great design for your product',
        developer: 'with passion for clean, elegant and efficient code'
      },
      about: {
        title: 'Why me',
        text: `My passion for IT has been with me since my youth. After several years of digitizing complex construction projects,
              I realized that my true passion lies not in architecture but in software development.
              Now, I am consciously and enthusiastically taking a new path as a web developer.
              I am excited about combining modern frontend technologies like Angular with user-centered design.
              My experience with complex structures, well-thought-out concepts, and clear design language allows me to create intuitive,
              clean, and high-performance applications.`
      },
      projects: {
        title: 'My Projects',
        descriptions: [
          {
            title: 'Join',
            description: ''
          },
          {
            title: 'Pokedex',
            description: ''
          },
          {
            title: 'Portfolio',
            description: ''
          },
          {
            title: 'DaBubble',
            description: ''
          },
          {
            title: 'BnB Saga',
            description: ''
          }
        ]
      }
    },
    de: {
      landingPage: {
        welcome: 'Hallo, Ich bin Patrick Frey,',
        title: `<span class="col-dev">Web-Developer</span> und<br>
                <span class="col-des">Designer</span> mit <br>
                Hintergrund als Architekt`,
        scroll: 'scroll down'
    },
    hero: {
      welcome: 'Willkommen',
      designer: 'my background as an architect ensures great design for your product',
      developer: 'with passion for clean, elegant and efficient code'
    },
    about: {
      title: 'Über mich',
      text: `Meine Begeisterung für IT begleitet mich seit meiner Jugend. Nach mehreren Jahren in der Digitalisierung komplexer Bauprojekte habe ich erkannt,
            dass meine Leidenschaft nicht in der Architektur, sondern in der Softwareentwicklung liegt.
            Jetzt schlage ich bewusst und motiviert einen neuen Weg als Web-Entwickler ein.
            Moderne Frontend-Technologien wie Angular mit nutzerzentriertem Design zu verbinden, begeistert mich.
            Meine Erfahrung mit komplexen Zusammenhängen, durchdachten Konzepten und klarer Designsprache setze ich gezielt ein,
            um intuitive, saubere und leistungsstarke Anwendungen zu entwickeln.`
    },
    projects: {
      title: 'My Projects',
      descriptions: [
        {
          title: 'Join',
          description: ''
        },
        {
          title: 'Pokedex',
          description: ''
        },
        {
          title: 'Portfolio',
          description: ''
        },
        {
          title: 'DaBubble',
          description: ''
        },
        {
          title: 'BnB Saga',
          description: ''
        }
      ]
    } 
  }
}

  //used in html tags
  getTranslation(section: string, content: string): string {
    const language = this.currentLanguage(); // get signal
    return this.translation[language][section][content];
  }

  toggleLanguage(newLanguage: string): void {
    //const newLanguage = this.currentLanguage() === 'en' ? 'de' : 'en';
    this.currentLanguage.set(newLanguage); // set new signal
  }

}

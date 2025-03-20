import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {

  currentLanguage = signal<string>('en'); // set signal

  translation: { [key:string]: any} = {
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
        descriptions: {
          join:   `A project management tool developed with HTML, CSS, JavaScript, Git,
                  and Firebase to visualize the status and responsibilities of tasks.`,
          pokedex: `A Pokedex to retrieve and display Pokémon data such as types
                    and abilities using the Poke API. The use of ChartJS enabled the 
                    analysis of specific API endpoints in dashboards.`,
          portfolio: `My portfolio page. A summary of who I am and my skills.
                      The project was built using Angular.`,
          dabubble: `This project involved developing a business chat client,
                    providing a platform for professional communication. Users can exchange messages,
                    create channels, and share files.`,
          bnbsaga: `This project involved creating a Jump-and-Run game where object-oriented
                    programming was applied to implement the game logic. Classes and objects
                    were used to structure the gameplay and control interactive elements.`
        }
      },
      team: {
        title: 'Need a teamplayer?',
        testimonials: {
          kRubrecht: `had to develop, format and deliver 
                    content in collaboration with the team members. 
                    She is a reliable and friendly person.`,
          sHerzog: `had to develop, format and deliver 
                    content in collaboration with the team members. 
                    She is a reliable and friendly person.`,
          pLustig: `had to develop, format and deliver 
                    content in collaboration with the team members. 
                    She is a reliable and friendly person.`,
          hBlubblub: `had to develop, format and deliver 
                    content in collaboration with the team members. 
                    She is a reliable and friendly person.`,
        }
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
      title: 'Meine Projekte',
      descriptions: {
        join:  `Ein Projektmanagement-Tool, das mit HTML, CSS, JavaScript, Git und Firebase entwickelt
                wurde,um den Status und die Verantwortlichkeiten von Aufgaben zu visualisieren.`,
        pokedex: `Ein Pokedex, um Pokémon-Daten wie Typen oder Fähigkeiten über die Poke-API abzurufen und anzuzeigen.
                  Die Verwendung von ChartJS ermöglichte die Auswertung bestimmter API-Endpunkte in Dashboards.`,
        portfolio: `Meine Portfolio Seite. Eine Zusammenfassung meiner Person und Fähigkeiten.
                    Das Projekt wurde in Angular erstellt.`,
        dabubble:  `In diesem Projekt wurde ein Business-Chat-Client entwickelt, der eine Plattform für geschäftliche
                    Kommunikation bietet. Nutzer können Nachrichten austauschen,
                    Kanäle erstellen und Dateien teilen.`,
        bnbsaga: `In diesem Projekt wurde ein Jump-and-Run-Spiel entwickelt, bei dem die Spiellogik mit
                  objektorientierter Programmierung umgesetzt wurde.
                  Klassen und Objekte wurden genutzt, um die Spielmechanik zu
                  strukturieren und interaktive Elemente zu steuern.`
      }
    },
    team: {
      title: 'Teamplayer gesucht?',
      testimonials: {
        kRubrecht: `hatte zu entwickeln, formatieren und veröffentlichen von Inhalten mit Teammitgliedern verbunden.
                  Sie ist ein stabile und freundliche Mensch.`,
        sHerzog: `hatte zu entwickeln, formatieren und veröffentlichen von Inhalten mit Teammitgliedern verbunden.
                  Sie ist ein stabile und freundliche Mensch.`,
        pLustig: `hatte zu entwickeln, formatieren und veröffentlichen von Inhalten mit Teammitgliedern verbunden.
                  Sie ist ein stabile und freundliche Mensch.`,
        hBlubblub: `hatte zu entwickeln, formatieren und veröffentlichen von Inhalten mit Teammitgliedern verbunden.
        Sie ist ein stabile und freundliche Mensch.`,
      }
    }
  }
}

  //used in html tags
  getTranslation(section: string, content: string): string {
    const language = this.currentLanguage(); // get signal
    return this.translation[language][section][content];
  }

  getProjectDescription(project:string): string {
    const language = this.currentLanguage();
    return this.translation[language].projects.descriptions[project];
  }

  getProjectTestimonial(name:string): string {
    const language = this.currentLanguage();
    return this.translation[language].team.testimonials[name];
  }

  toggleLanguage(newLanguage: string): void {
    //const newLanguage = this.currentLanguage() === 'en' ? 'de' : 'en';
    this.currentLanguage.set(newLanguage); // set new signal
  }

}

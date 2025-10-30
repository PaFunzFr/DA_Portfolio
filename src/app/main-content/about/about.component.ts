import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { SocialService } from '../../services/social.service';


interface AboutItems {
      img: string;
      textEn: string;
      textDe: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  languages = inject(LanguageService);
  socialReference = inject(SocialService);

  get aboutTitle(): string {
    return this.languages.getTranslation('about' , 'title');
  }

  get aboutText(): string {
    return this.languages.getTranslation('about' , 'text');
  }

  get currentLang():any {
    return this.languages.currentLanguage()
  }


  aboutItems: AboutItems[] = [
    { img: 'assets/img/about/remote.svg', textEn: 'open to work remote', textDe: 'mobiles Arbeit möglich' },
    { img: 'assets/img/about/location.svg', textEn: 'located at Frankfurt', textDe: 'wohne in Frankfurt' },
    { img: 'assets/img/about/intouch.svg', textEn: 'lets get in touch', textDe: 'sprich mich an' },
  ];

  scrollTo(targetId: string) {
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

}

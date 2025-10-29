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
    { img: 'assets/img/about/intouch.svg', textEn: 'lets get <br> in touch', textDe: 'sprich<br>mich an' },
    { img: 'assets/img/about/remote.svg', textEn: 'open to <br> work remote', textDe: 'mobiles<br>Arbeit möglich' },
    { img: 'assets/img/about/location.svg', textEn: 'located at <br> Frankfurt', textDe: 'wohne in<br> Frankfurt' },
    { img: 'assets/img/about/intouch.svg', textEn: 'lets get <br> in touch', textDe: 'sprich<br>mich an' }
  ];

}

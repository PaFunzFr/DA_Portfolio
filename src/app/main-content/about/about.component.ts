import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { SocialService } from '../../services/social.service';


interface AboutItems {
      img: string;
      text: string;
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
  socialImgs = inject(SocialService);

  get aboutTitle(): string {
    return this.languages.getTranslation('about' , 'title');
  }

  get aboutText(): string {
    return this.languages.getTranslation('about' , 'text');
  }

  aboutItems: AboutItems[] = [
    { img: 'assets/img/about/location.svg', text: 'located at <br> Frankfurt' },
    { img: 'assets/img/about/remote.svg', text: 'open to <br> work remote' },
    { img: 'assets/img/about/intouch.svg', text: 'lets get <br> in touch' }
  ];

}

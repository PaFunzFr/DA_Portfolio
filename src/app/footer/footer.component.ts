import { Component, inject } from '@angular/core';
import { SocialService } from '../services/social.service';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

    socialReference = inject(SocialService);
    languages = inject(LanguageService);

    get currentLang():any {
      return this.languages.currentLanguage()
    }
}

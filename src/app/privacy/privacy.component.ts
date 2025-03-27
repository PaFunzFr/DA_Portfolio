import { Component, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {

  languages = inject(LanguageService);

  get privacyContent() {
    return this.languages.getTranslation('privacyPolicy', 'html');
  }
}

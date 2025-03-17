import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  languages = inject(LanguageService);

  get aboutTitle(): string {
    return this.languages.getTranslation('about' , 'title');
  }

  get aboutText(): string {
    return this.languages.getTranslation('about' , 'text');
  }
}

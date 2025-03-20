import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  languages = inject(LanguageService);

  get contactTitle(): string {
    return this.languages.getTranslation('contact' , 'title');
  }

  get contactText(): string {
    return this.languages.getTranslation('contact' , 'text');
  }
}

import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideBarComponent } from '../shared/side-bar/side-bar.component';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [HeaderComponent, SideBarComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  languages = inject(LanguageService);

  get imprintTitle() {
    return this.languages.getTranslation('imprint', 'title');
  }

  get imprintContact() {
    return this.languages.getTranslation('imprint', 'contact');
  }

}

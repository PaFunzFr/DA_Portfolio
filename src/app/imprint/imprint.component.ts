import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideBarComponent } from '../shared/side-bar/side-bar.component';
import { LanguageService } from '../services/language.service';
import { FooterComponent } from '../footer/footer.component';
import { NavBarService } from '../services/nav-bar.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [HeaderComponent, SideBarComponent, FooterComponent, SideBarComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  languages = inject(LanguageService);
  navBarService = inject(NavBarService);

  get imprintTitle() {
    return this.languages.getTranslation('imprint', 'title');
  }

  get imprintContact() {
    return this.languages.getTranslation('imprint', 'contact');
  }

}

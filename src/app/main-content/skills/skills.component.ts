import { Component, inject } from '@angular/core';
import { SkillsService } from '../../services/skills.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skills = inject(SkillsService);
  languages = inject(LanguageService);

  get mindsetTitle () {
    return this.languages.getTranslation('skills', 'title');
  }
  get mindsetText () {
    return this.languages.getTranslation('skills', 'mindset');
  }

  get currentLang() {
    return this.languages.currentLanguage();
  }

}

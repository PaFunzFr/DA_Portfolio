import { Component, inject, OnInit } from '@angular/core';
import { SkillsService } from '../../services/skills.service';
import { LanguageService } from '../../services/language.service';
import { SkillBarComponent } from './skill-bar/skill-bar.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillBarComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {

  skills = inject(SkillsService);
  languages = inject(LanguageService);
  allSkills = [
    ...this.skills.skillsDes,
    ...this.skills.skillsDevBE,
    ...this.skills.skillsDevFE,
    ...this.skills.skillsMisc
  ]
  activeHighlight: string | null = null;

  ngOnInit() {
    this.allSkills = this.shuffleElements(this.allSkills);
  }

  get skillText () {
    return this.languages.getTranslation('skills', 'text');
  }
  get mindsetTitle () {
    return this.languages.getTranslation('skills', 'title');
  }
  get mindsetText () {
    return this.languages.getTranslation('skills', 'mindset');
  }

  get currentLang() {
    return this.languages.currentLanguage();
  }

  shuffleElements<T>(arr: T[]): T[] {
    const array = arr.slice();
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  highlight(type: string): void {
    this.activeHighlight = this.activeHighlight === type ? null : type;
  }

}

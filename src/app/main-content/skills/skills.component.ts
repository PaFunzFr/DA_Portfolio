import { Component, inject, OnInit, signal } from '@angular/core';
import { SkillsService } from '../../services/skills.service';
import { LanguageService } from '../../services/language.service';
import { SkillBarComponent } from './skill-bar/skill-bar.component';
import { ChartComponent } from './chart/chart.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillBarComponent, ChartComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {

  skills = inject(SkillsService);
  languages = inject(LanguageService);
  currentSkillCategory = signal<number>(0)
  previousNumber: number = 0;
  isSliding: boolean = false;
  interval: number | undefined;
  showMindset: boolean = false;
  leaveMindset: boolean = false;

  allSkills = [
    this.skills.skillsDes,
    this.skills.skillsDevFE,
    this.skills.skillsDevBE,
    this.skills.skillsMisc
  ]

  skillCategories = [
    "Designer",
    "Frontend",
    "Backend",
    "Dev-Tools",
    "MINDSET"
  ]

  softSkills: any[] = [
    {category: "Teamwork", percentage: 90, bg:"#d34ae0ff"},
    {category: "Autonomy", percentage: 95, bg:"#4A81E0"},
    {category: "Creativity", percentage: 85, bg:"#EE8C1B"}
  ]

  ngOnInit() {
    this.startAnimation();
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

  setProjectNumber(n: number) {
    if (n === this.currentSkillCategory()) return;
    this.previousNumber = this.currentSkillCategory();
    this.isSliding = true;
    this.currentSkillCategory.set(n);
    this.stopAnimation();
    this.startAnimation();
    this.resetAnimation();
  }

  startAnimation() {
    if (this.showMindset) return
    this.interval = window.setInterval(() => {
      const next = (this.currentSkillCategory() + 1) % this.allSkills.length;

      this.previousNumber = this.currentSkillCategory();
      this.isSliding = true;
      this.currentSkillCategory.set(next);

      this.resetAnimation()
    }, 2000);
  }

  stopAnimation() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }

  resetAnimation() {
    setTimeout(() => {
      this.isSliding = false;
      this.previousNumber = this.currentSkillCategory();
    }, 700);
  }

  setSkillCategory(index:number):void {
    this.leaveMindset = true;
    setTimeout(() => {
      this.showMindset = false;
    }, 700);
      this.setProjectNumber(index);
  }

  selectMindset():void {
    this.stopAnimation();
    this.leaveMindset = false;
    this.showMindset = true;
  }
}

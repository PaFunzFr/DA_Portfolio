import { Component, Input, inject } from '@angular/core';
import { SkillsService } from '../../../services/skills.service';

@Component({
  selector: 'app-skill-bar',
  standalone: true,
  imports: [],
  templateUrl: './skill-bar.component.html',
  styleUrl: './skill-bar.component.scss'
})
export class SkillBarComponent {
  skills = inject(SkillsService);

  @Input() skillCategory:number = 0;

  allSkills: any[]= [
    this.skills.skillsDes,
    this.skills.skillsDevBE,
    this.skills.skillsDevFE,
    this.skills.skillsMisc
  ];

}

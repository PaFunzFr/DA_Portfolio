import { Component, inject, signal, computed } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {

  languages = inject(LanguageService);
  getTestimonial(name: string) {
    return computed(() => this.languages.getProjectTestimonial(name));
  }
  
  teamMembers = signal([
    {
      name: 'Knecht Rubrecht',
      project: 'Join',
      testimonial: this.getTestimonial('kRubrecht'),
      background: './assets/img/team/comment1.png',
      profile: ''
    },
    {
      name: 'Knecht Rubrecht',
      project: 'DABubble',
      testimonial: this.getTestimonial('kRubrecht'),
      background: './assets/img/team/comment2.png',
      profile: ''
    },
    {
      name: 'Knecht Rubrecht',
      project: 'general',
      testimonial: this.getTestimonial('kRubrecht'),
      background: './assets/img/team/comment2.png',
      profile: ''
    },
    {
      name: 'Knecht Rubrecht',
      project: 'Join',
      testimonial:  this.getTestimonial('kRubrecht'),
      background: './assets/img/team/comment1.png',
      profile: '',
    },
  ])



}

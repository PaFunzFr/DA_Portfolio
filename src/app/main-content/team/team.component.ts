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
      name: 'Stephanie Englberger',
      project: 'DABubble',
      testimonial: this.getTestimonial('member1'),
      background: './assets/img/team/comment1.png',
      profile: 'https://www.linkedin.com/in/stephanie-englberger/'
    },
    {
      name: 'Jonathan Michutta',
      project: 'Join',
      testimonial: this.getTestimonial('member2'),
      background: './assets/img/team/comment2.png',
      profile: 'https://www.linkedin.com/in/jonathan-michutta-527722210/'
    },
    {
      name: 'Jennifer Thomas',
      project: 'Join',
      testimonial: this.getTestimonial('member3'),
      background: './assets/img/team/comment2.png',
      profile: 'https://www.linkedin.com/in/jennifer-thomas-595735360/'
    },
    {
      name: 'Christian Duus',
      project: 'General',
      testimonial:  this.getTestimonial('member4'),
      background: './assets/img/team/comment1.png',
      profile: 'https://www.linkedin.com/in/christian-duus-47a102357/',
    },
  ])



}

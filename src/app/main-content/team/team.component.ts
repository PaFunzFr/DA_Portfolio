import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {


  teamMembers = [
    {
      name: 'Knecht Rubrecht',
      project: 'Join',
      testimonial: `had to develop, format and deliver 
                    content in collaboration with the team members. 
                    She is a reliable and friendly person.`,
      background: './assets/img/team/comment1.png',
      profile: ''
    },
    {
      name: 'Knecht Rubrecht',
      project: 'DABubble',
      testimonial: `had to develop, format and deliver 
                    content in collaboration with the team members. 
                    She is a reliable and friendly person.`,
      background: './assets/img/team/comment2.png',
      profile: ''
    },
    {
      name: 'Knecht Rubrecht',
      project: 'general',
      testimonial: `had to develop, format and deliver 
                    content in collaboration with the team members. 
                    She is a reliable and friendly person.`,
      background: './assets/img/team/comment2.png',
      profile: ''
    },
    {
      name: 'Knecht Rubrecht',
      project: 'Join',
      testimonial: `had to develop, format and deliver 
                    content in collaboration with the team members. 
                    She is a reliable and friendly person.`,
      background: './assets/img/team/comment1.png',
      profile: ''
    },
  ]

}

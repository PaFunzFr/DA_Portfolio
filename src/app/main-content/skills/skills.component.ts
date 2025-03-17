import { Component } from '@angular/core';

interface SkillPool {
  title: string;
  imgSource: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skillsDes: SkillPool[] = [
    {title: 'Adobe<br>Photoshop', imgSource: './assets/img/skills/des/photoshop.svg'},
    {title: 'Adobe<br>InDesign', imgSource: './assets/img/skills/des/indesign.svg'},
    {title: 'Adobe<br>Illustrator', imgSource: './assets/img/skills/des/illustrator.svg'},
    {title: 'Affinity<br>Designer', imgSource: './assets/img/skills/des/adesigner.svg'},
    {title: 'Affinity<br>Publisher', imgSource: './assets/img/skills/des/apublisher.svg'},
    {title: 'Affinity<br>Photo', imgSource: './assets/img/skills/des/aphoto.svg'},
    {title: 'Figma', imgSource: './assets/img/skills/des/figma.svg'},
    {title: 'DaVinci Resolve', imgSource: './assets/img/skills/des/davinci.svg'},
  ]

  skillsDev: SkillPool[] = [
    {title: 'Angular', imgSource: './assets/img/skills/dev/angular.svg'},
    {title: 'TypeScript', imgSource: './assets/img/skills/dev/typescript.svg'},
    {title: 'JavaScript', imgSource: './assets/img/skills/dev/javascript.svg'},
    {title: 'HTML5', imgSource: './assets/img/skills/dev/html.svg'},
    {title: 'CSS3 &<br>SCSS', imgSource: './assets/img/skills/dev/css.svg'},
    {title: 'Scrum', imgSource: './assets/img/skills/dev/scrum.svg'},
    {title: 'Google<br>Firebase', imgSource: './assets/img/skills/dev/firebase.svg'},
    {title: 'Git &<br>Github', imgSource: './assets/img/skills/dev/git.svg'},
    {title: 'Restful<br>APIs', imgSource: './assets/img/skills/dev/api.svg'},
    {title: 'Material<br>Design', imgSource: './assets/img/skills/dev/materialdesign.svg'},
  ]

}

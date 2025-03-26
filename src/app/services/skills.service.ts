import { Injectable } from '@angular/core';

interface SkillPool {
  id: string;
  title: string;
  imgSource: string;
}

@Injectable({
  providedIn: 'root'
})

export class SkillsService {

  skillsDes: SkillPool[] = [
    { id: 'photoshop', title: 'Adobe<br>Photoshop', imgSource: './assets/img/skills/des/photoshop.svg' },
    { id: 'indesign', title: 'Adobe<br>InDesign', imgSource: './assets/img/skills/des/indesign.svg' },
    { id: 'illustrator', title: 'Adobe<br>Illustrator', imgSource: './assets/img/skills/des/illustrator.svg' },
    { id: 'adesigner', title: 'Affinity<br>Designer', imgSource: './assets/img/skills/des/adesigner.svg' },
    { id: 'apublisher', title: 'Affinity<br>Publisher', imgSource: './assets/img/skills/des/apublisher.svg' },
    { id: 'aphoto', title: 'Affinity<br>Photo', imgSource: './assets/img/skills/des/aphoto.svg' },
    { id: 'figma', title: 'Figma', imgSource: './assets/img/skills/des/figma.svg' },
    { id: 'davinci', title: 'DaVinci Resolve', imgSource: './assets/img/skills/des/davinci.svg' }
  ];

  skillsDev: SkillPool[] = [
    { id: 'angular', title: 'Angular', imgSource: './assets/img/skills/dev/angular.svg' },
    { id: 'typescript', title: 'TypeScript', imgSource: './assets/img/skills/dev/typescript.svg' },
    { id: 'javascript', title: 'JavaScript', imgSource: './assets/img/skills/dev/javascript.svg' },
    { id: 'html', title: 'HTML5', imgSource: './assets/img/skills/dev/html.svg' },
    { id: 'css', title: 'CSS3 &<br>SCSS', imgSource: './assets/img/skills/dev/css.svg' },
    { id: 'scrum', title: 'Scrum', imgSource: './assets/img/skills/dev/scrum.svg' },
    { id: 'firebase', title: 'Google<br>Firebase', imgSource: './assets/img/skills/dev/firebase.svg' },
    { id: 'git', title: 'Git &<br>Github', imgSource: './assets/img/skills/dev/git.svg' },
    { id: 'threeJS', title: 'threeJS', imgSource: './assets/img/skills/dev/threejs.svg' },
    { id: 'api', title: 'Restful<br>APIs', imgSource: './assets/img/skills/dev/api.svg' },
    { id: 'materialdesign', title: 'Material<br>Design', imgSource: './assets/img/skills/dev/materialdesign.svg' }
  ];
}


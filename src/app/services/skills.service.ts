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
    { id: 'photoshop', title: 'Adobe<br>Photoshop', imgSource: './assets/img/skills/des/photoshop.svg'},
    { id: 'indesign', title: 'Adobe<br>InDesign', imgSource: './assets/img/skills/des/indesign.svg'},
    { id: 'illustrator', title: 'Adobe<br>Illustrator', imgSource: './assets/img/skills/des/illustrator.svg'},
    { id: 'adesigner', title: 'Affinity<br>Designer', imgSource: './assets/img/skills/des/adesigner.svg'},
    { id: 'apublisher', title: 'Affinity<br>Publisher', imgSource: './assets/img/skills/des/apublisher.svg'},
    { id: 'aphoto', title: 'Affinity<br>Photo', imgSource: './assets/img/skills/des/aphoto.svg'},
    { id: 'figma', title: 'Figma', imgSource: './assets/img/skills/des/figma.svg'},
    { id: 'davinci', title: 'DaVinci Resolve', imgSource: './assets/img/skills/des/davinci.svg'}
  ];

  skillsDevFE: SkillPool[] = [
    { id: 'angular', title: 'Angular', imgSource: './assets/img/skills/dev/frontend/angular.svg'},
    { id: 'typescript', title: 'TypeScript', imgSource: './assets/img/skills/dev/frontend/typescript.svg'},
    { id: 'javascript', title: 'JavaScript', imgSource: './assets/img/skills/dev/frontend/javascript.svg'},
    { id: 'html', title: 'HTML5', imgSource: './assets/img/skills/dev/frontend/html.svg'},
    { id: 'css', title: 'CSS3 &<br>SCSS', imgSource: './assets/img/skills/dev/frontend/css.svg'},
    { id: 'rxjs', title: 'RxJs', imgSource: './assets/img/skills/dev/frontend/rxjs.svg'},
    { id: 'threeJS', title: 'threeJS', imgSource: './assets/img/skills/dev/frontend/threejs.svg'},
    { id: 'materialdesign', title: 'Material<br>Design', imgSource: './assets/img/skills/dev/frontend/materialdesign.svg'}
  ];

  skillsDevBE: SkillPool[] = [
    { id: 'python', title: 'Python', imgSource: './assets/img/skills/dev/backend/python.svg'},
    { id: 'django', title: 'Django', imgSource: './assets/img/skills/dev/backend/django.svg'},
    { id: 'pytest', title: 'Pytest', imgSource: './assets/img/skills/dev/backend/pytest.svg'},
    { id: 'docker', title: 'Docker', imgSource: './assets/img/skills/dev/backend/docker.svg'},
    { id: 'postman', title: 'Postman', imgSource: './assets/img/skills/dev/backend/postman.svg'},
    { id: 'redis', title: 'Redis', imgSource: './assets/img/skills/dev/backend/redis.svg'},
    { id: 'postgresql', title: 'PostgreSQL', imgSource: './assets/img/skills/dev/backend/postgresql.svg'},
    { id: 'sql', title: 'SQL /<br>SQlite ', imgSource: './assets/img/skills/dev/backend/sql.svg'},
    { id: 'coolify', title: 'Coolify', imgSource: './assets/img/skills/dev/backend/coolify.svg'},
    { id: 'api', title: 'Restful<br>APIs', imgSource: './assets/img/skills/dev/backend/api.svg'},
    { id: 'firebase', title: 'Google<br>Firebase', imgSource: './assets/img/skills/dev/backend/firebase.svg'},
  ];

  skillsMisc: SkillPool[] = [
    { id: 'vscode', title: 'VS Code', imgSource: './assets/img/skills/misc/vscode.svg' },
    { id: 'github', title: 'Github', imgSource: './assets/img/skills/misc/github.svg' },
    { id: 'git', title: 'Git', imgSource: './assets/img/skills/misc/git.svg' },
    { id: 'scrum', title: 'Scrum', imgSource: './assets/img/skills/misc/scrum.svg' },
    { id: 'linux', title: 'Linux', imgSource: './assets/img/skills/misc/linux.svg' },
    { id: 'trello', title: 'Trello', imgSource: './assets/img/skills/misc/trello.svg' },
  ]
}


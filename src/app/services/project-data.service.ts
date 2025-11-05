import { Injectable, inject } from '@angular/core';
import { SkillsService } from './skills.service';


interface ProjectsDataInterface {
  id: string;
  type: string;
  appImg: string,
  background: string;
  devTools: string[];
  desTools: string[];
  projectUrl: string;
  projectGithub: string;
  projectTextId: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProjectDataService {

    skills = inject(SkillsService);
    skillsDes = this.skills.skillsDes;
    skillsDevFE = this.skills.skillsDevFE;
    skillsDevBE = this.skills.skillsDevBE;

    getSkillImgSrc(skillId: string, target = this.skillsDes || this.skillsDevFE): string {
      const skill = target.find(skill => skill.id === skillId);
      return skill?.imgSource || '';
    }
  
  projectData: ProjectsDataInterface[] = [
    {
      id: 'Collabeya',
      type: 'Fullstack',
      appImg: './assets/img/projects/project_collabeya.png',
      background: './assets/img/projects/bg_notebook.jpg',
      devTools: [
        this.getSkillImgSrc('angular', this.skillsDevFE),
        this.getSkillImgSrc('typescript', this.skillsDevFE),
        this.getSkillImgSrc('html', this.skillsDevFE),
        this.getSkillImgSrc('css', this.skillsDevFE),
        this.getSkillImgSrc('firebase', this.skillsDevBE),
      ],
      desTools: [
        this.getSkillImgSrc('photoshop', this.skillsDes),
      ],
      projectUrl: 'http://collabeya.p-frey.com',
      projectGithub: 'https://github.com/PaFunzFr/Collabeya',
      projectTextId: 'dabubble'
    },
    {
      id: 'Quizly',
      type: 'Backend',
      appImg: './assets/img/projects/project_placeholder.png', // has to be fixed / changed
      background: './assets/img/projects/bg_notebook.jpg', // has to be fixed / changed
      devTools: [
        this.getSkillImgSrc('python', this.skillsDevBE),
        this.getSkillImgSrc('django', this.skillsDevBE),
        this.getSkillImgSrc('pytest', this.skillsDevBE),
        this.getSkillImgSrc('sql', this.skillsDevBE),
        this.getSkillImgSrc('api', this.skillsDevBE),
        this.getSkillImgSrc('docker', this.skillsDevBE),
      ],
      desTools: [],
      projectUrl: '', // has to be fixed / changed
      projectGithub: 'https://github.com/PaFunzFr/Quizly-backend',
      projectTextId: 'quizly'
    },
    {
      id: 'Pokedex',
      type: 'Frontend',
      appImg: './assets/img/projects/project_pokedex.png',
      background: './assets/img/projects/bg_mobile.jpg',
      devTools: [
        this.getSkillImgSrc('javascript', this.skillsDevFE),
        this.getSkillImgSrc('html', this.skillsDevFE),
        this.getSkillImgSrc('css', this.skillsDevFE),
        this.getSkillImgSrc('api', this.skillsDevBE),
      ],
      desTools: [
        this.getSkillImgSrc('adesigner', this.skillsDes),
      ],
      projectUrl: 'http://pokedex.p-frey.com',
      projectGithub: 'https://github.com/PaFunzFr/DA_Pokedex',
      projectTextId: 'pokedex'
    },
    {
      id: 'Join',
      type: 'Fullstack',
      appImg: './assets/img/projects/project_join.png',
      background: './assets/img/projects/bg_notebook.jpg',
      devTools: [
        this.getSkillImgSrc('angular', this.skillsDevFE),
        this.getSkillImgSrc('typescript', this.skillsDevFE),
        this.getSkillImgSrc('html', this.skillsDevFE),
        this.getSkillImgSrc('css', this.skillsDevFE),
        this.getSkillImgSrc('firebase', this.skillsDevBE),
      ],
      desTools: [
        this.getSkillImgSrc('photoshop', this.skillsDes),
        this.getSkillImgSrc('adesigner', this.skillsDes),
      ],
      projectUrl: 'http://join.p-frey.com',
      projectGithub: 'https://github.com/PaFunzFr/DA_Join',
      projectTextId: 'join'
    },
    {
      id: 'Videoflix',
      type: 'Backend',
      appImg: './assets/img/projects/project_videoflix.png',
      background: './assets/img/projects/bg_notebook.jpg',
      devTools: [
        this.getSkillImgSrc('python', this.skillsDevBE),
        this.getSkillImgSrc('django', this.skillsDevBE),
        this.getSkillImgSrc('pytest', this.skillsDevBE),
        this.getSkillImgSrc('postgresql', this.skillsDevBE),
        this.getSkillImgSrc('redis', this.skillsDevBE),
        this.getSkillImgSrc('api', this.skillsDevBE),
        this.getSkillImgSrc('docker', this.skillsDevBE),
      ],
      desTools: [],
      projectUrl: 'http://videoflix.p-frey.com',
      projectGithub: 'https://github.com/PaFunzFr/Videoflix-backend',
      projectTextId: 'videoflix'
    },
    {
      id: 'Portfolio',
      type: 'Frontend',
      appImg: './assets/img/projects/project_portfolio.png',
      background: './assets/img/projects/bg_mobile.jpg',
      devTools: [
        this.getSkillImgSrc('angular', this.skillsDevFE),
        this.getSkillImgSrc('typescript', this.skillsDevFE),
        this.getSkillImgSrc('html', this.skillsDevFE),
        this.getSkillImgSrc('css', this.skillsDevFE),
        this.getSkillImgSrc('threejs', this.skillsDevFE),
      ],
      desTools: [
        this.getSkillImgSrc('photoshop', this.skillsDes),
        this.getSkillImgSrc('illustrator', this.skillsDes),
        this.getSkillImgSrc('apublisher', this.skillsDes),
      ],
      projectUrl: '',
      projectGithub: 'https://github.com/PaFunzFr/DA_Portfolio',
      projectTextId: 'portfolio'
    },
    {
      id: 'Coderr',
      type: 'Backend',
      appImg: './assets/img/projects/project_coderr.png',
      background: './assets/img/projects/bg_notebook.jpg',
      devTools: [
        this.getSkillImgSrc('python', this.skillsDevBE),
        this.getSkillImgSrc('django', this.skillsDevBE),
        this.getSkillImgSrc('pytest', this.skillsDevBE),
        this.getSkillImgSrc('sql', this.skillsDevBE),
        this.getSkillImgSrc('api', this.skillsDevBE),
        this.getSkillImgSrc('docker', this.skillsDevBE),
        this.getSkillImgSrc('postman', this.skillsDevBE),
      ],
      desTools: [],
      projectUrl: 'http://coderr.p-frey.com/',
      projectGithub: 'https://github.com/PaFunzFr/Coderr-backend',
      projectTextId: 'coderr'
    },
    {
      id: 'BnB-Saga',
      type: 'Frontend',
      appImg: './assets/img/projects/project_bnbsaga.png',
      background: './assets/img/projects/bg_gaming.jpg',
      devTools: [
        this.getSkillImgSrc('javascript', this.skillsDevFE),
        this.getSkillImgSrc('html', this.skillsDevFE),
        this.getSkillImgSrc('css', this.skillsDevFE),
      ],
      desTools: [
        this.getSkillImgSrc('photoshop', this.skillsDes),
        this.getSkillImgSrc('davinci', this.skillsDes),
      ],
      projectUrl: 'http://bnb.p-frey.com',
      projectGithub: 'https://github.com/PaFunzFr/DA_2D_Plattformer',
      projectTextId: 'bnbsaga'
    },
    {
      id: 'Kanmind',
      type: 'Backend',
      appImg: './assets/img/projects/project_placeholder.png', // has to be fixed / changed
      background: './assets/img/projects/bg_notebook.jpg', // has to be fixed / changed
      devTools: [
        this.getSkillImgSrc('python', this.skillsDevBE),
        this.getSkillImgSrc('django', this.skillsDevBE),
        this.getSkillImgSrc('sql', this.skillsDevBE),
        this.getSkillImgSrc('api', this.skillsDevBE),
        this.getSkillImgSrc('postman', this.skillsDevBE),
      ],
      desTools: [],
      projectUrl: '', // has to be fixed / changed
      projectGithub: 'https://github.com/PaFunzFr/KanMind-backend',
      projectTextId: 'kanmind'
    },
  ];

}

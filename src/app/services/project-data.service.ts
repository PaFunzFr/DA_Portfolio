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
    skillsDev = this.skills.skillsDev;

    getSkillImgSrc(skillId: string, target = this.skillsDes || this.skillsDev): string {
      const skill = target.find(skill => skill.id === skillId);
      return skill?.imgSource || '';
    }
  
  projectData: ProjectsDataInterface[] = [
    {
      id: 'Join',
      type: 'Frontend',
      appImg: './assets/img/projects/project_join.png',
      background: './assets/img/projects/bg_notebook.jpg',
      devTools: [
        this.getSkillImgSrc('angular', this.skillsDev),
        this.getSkillImgSrc('typescript', this.skillsDev),
        this.getSkillImgSrc('html', this.skillsDev),
        this.getSkillImgSrc('css', this.skillsDev),
        this.getSkillImgSrc('firebase', this.skillsDev),
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
      id: 'Pokedex',
      type: 'Frontend',
      appImg: './assets/img/projects/project_pokedex.png',
      background: './assets/img/projects/bg_mobile.jpg',
      devTools: [
        this.getSkillImgSrc('javascript', this.skillsDev),
        this.getSkillImgSrc('html', this.skillsDev),
        this.getSkillImgSrc('css', this.skillsDev),
        this.getSkillImgSrc('api', this.skillsDev),
      ],
      desTools: [
        this.getSkillImgSrc('adesigner', this.skillsDes),
      ],
      projectUrl: 'http://pokedex.p-frey.com',
      projectGithub: 'https://github.com/PaFunzFr/DA_Pokedex',
      projectTextId: 'pokedex'
    },
    {
      id: 'Collabeya',
      type: 'Frontend',
      appImg: './assets/img/projects/project_collabeya.png',
      background: './assets/img/projects/bg_notebook.jpg',
      devTools: [
        this.getSkillImgSrc('angular', this.skillsDev),
        this.getSkillImgSrc('typescript', this.skillsDev),
        this.getSkillImgSrc('html', this.skillsDev),
        this.getSkillImgSrc('css', this.skillsDev),
        this.getSkillImgSrc('firebase', this.skillsDev),
      ],
      desTools: [
        this.getSkillImgSrc('photoshop', this.skillsDes),
      ],
      projectUrl: 'http://collabeya.p-frey.com',
      projectGithub: 'https://github.com/PaFunzFr/Collabeya',
      projectTextId: 'dabubble'
    },
    {
      id: 'Portfolio',
      type: 'Frontend',
      appImg: './assets/img/projects/project_portfolio.png',
      background: './assets/img/projects/bg_mobile.jpg',
      devTools: [
        this.getSkillImgSrc('angular', this.skillsDev),
        this.getSkillImgSrc('typescript', this.skillsDev),
        this.getSkillImgSrc('html', this.skillsDev),
        this.getSkillImgSrc('css', this.skillsDev),
        this.getSkillImgSrc('firebase', this.skillsDev),
      ],
      desTools: [
        this.getSkillImgSrc('photoshop', this.skillsDes),
        this.getSkillImgSrc('illustrator', this.skillsDes),
        this.getSkillImgSrc('apublisher', this.skillsDes),
        this.getSkillImgSrc('davinci', this.skillsDes),
      ],
      projectUrl: '',
      projectGithub: 'https://github.com/PaFunzFr/DA_Portfolio',
      projectTextId: 'portfolio'
    },
    {
      id: 'BnB-Saga',
      type: 'Frontend',
      appImg: './assets/img/projects/project_bnbsaga.png',
      background: './assets/img/projects/bg_gaming.jpg',
      devTools: [
        this.getSkillImgSrc('javascript', this.skillsDev),
        this.getSkillImgSrc('html', this.skillsDev),
        this.getSkillImgSrc('css', this.skillsDev),
      ],
      desTools: [
        this.getSkillImgSrc('photoshop', this.skillsDes),
        this.getSkillImgSrc('davinci', this.skillsDes),
      ],
      projectUrl: 'http://bnb.p-frey.com',
      projectGithub: 'https://github.com/PaFunzFr/DA_2D_Plattformer',
      projectTextId: 'bnbsaga'
    }
  ];

}

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
    }
  ];

}

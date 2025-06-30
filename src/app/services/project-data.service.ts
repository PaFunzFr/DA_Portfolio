import { Injectable, inject } from '@angular/core';
import { SkillsService } from './skills.service';


interface ProjectsDataInterface {
  id: string;
  prevImgMobile: string,
  prevImgDesk: string;
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
      prevImgMobile: './assets/img/projects/join_mobile.png',
      prevImgDesk: './assets/img/projects/join.png',
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
      prevImgMobile: './assets/img/projects/pokedex_mobile.png',
      prevImgDesk: './assets/img/projects/pokedex.png',
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
      id: 'Portfolio',
      prevImgMobile: './assets/img/projects/portfolio_mobile.png',
      prevImgDesk: './assets/img/projects/portfolio.png',
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
      id: 'Collabeya',
      prevImgMobile: './assets/img/projects/dabubble_mobile_dm.png',
      prevImgDesk: './assets/img/projects/dabubble_dm.png',
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
      projectUrl: 'http://dabubble.p-frey.com',
      projectGithub: 'https://github.com/PaFunzFr/DA_Bubble',
      projectTextId: 'dabubble'
    },
    {
      id: 'BnB-Saga',
      prevImgMobile: './assets/img/projects/bnbsaga_mobile.png',
      prevImgDesk: './assets/img/projects/bnbsaga.png',
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

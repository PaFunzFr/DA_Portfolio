import { Injectable, inject } from '@angular/core';
import { SkillsService } from './skills.service';


interface ProjectsDataInterface {
  id: string;
  demoVidMobile: string,
  demoVidDesk: string;
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
      demoVidMobile: './assets/img/projects/bnbsaga.jpg',
      demoVidDesk: './assets/img/projects/bnbsaga.jpg',
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
      projectUrl: '',
      projectGithub: '',
      projectTextId: 'join'
    },
    {
      id: 'Pokedex',
      demoVidMobile: './assets/img/projects/pokedex.jpg',
      demoVidDesk: './assets/img/projects/pokedex.jpg',
      devTools: [
        this.getSkillImgSrc('javascript', this.skillsDev),
        this.getSkillImgSrc('html', this.skillsDev),
        this.getSkillImgSrc('css', this.skillsDev),
        this.getSkillImgSrc('api', this.skillsDev),
      ],
      desTools: [
        this.getSkillImgSrc('adesigner', this.skillsDes),
      ],
      projectUrl: '',
      projectGithub: '',
      projectTextId: 'pokedex'
    },
    {
      id: 'Portfolio',
      demoVidMobile: './assets/img/projects/portfolio.jpg',
      demoVidDesk: './assets/img/projects/portfolio.jpg',
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
      projectGithub: '',
      projectTextId: 'portfolio'
    },
    {
      id: 'DA-Bubble',
      demoVidMobile: './assets/img/projects/pokedex.jpg',
      demoVidDesk: './assets/img/projects/pokedex.jpg',
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
      projectUrl: '',
      projectGithub: '',
      projectTextId: 'dabubble'
    },
    {
      id: 'BnB-Saga',
      demoVidMobile: './assets/img/projects/bnbsaga.jpg',
      demoVidDesk: './assets/img/projects/bnbsaga.jpg',
      devTools: [
        this.getSkillImgSrc('javascript', this.skillsDev),
        this.getSkillImgSrc('html', this.skillsDev),
        this.getSkillImgSrc('css', this.skillsDev),
      ],
      desTools: [
        this.getSkillImgSrc('photoshop', this.skillsDes),
        this.getSkillImgSrc('davinci', this.skillsDes),
      ],
      projectUrl: '',
      projectGithub: '',
      projectTextId: 'bnbsaga'
    }
  ];

}

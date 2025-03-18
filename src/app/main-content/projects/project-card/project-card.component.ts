import { Component, inject} from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { SkillsService } from '../../../services/skills.service';

interface ProjectsDataInterface {
  id: string;
  demoVid: string;
  devTools: string[];
  desTools: string[];
  projectUrl: string;
  projectGithub: string;
  projectText: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})

export class ProjectCardComponent {
  languages = inject(LanguageService);
  skills = inject(SkillsService);
  skillsDes = this.skills.skillsDes
  skillsDev = this.skills.skillsDev

  get projectsTitle(): string {
    return this.languages.getTranslation('projects', 'title');
  }

  getSkillImgSrc(skillId: string, target = this.skillsDes || this.skillsDev): string {
    const skill = target.find(skill => skill.id === skillId);
    return skill?.imgSource || '';
  }

  projectsText(project: string): string {
    return this.languages.getProjectDescription(project)
  }

  projectsData: ProjectsDataInterface[] = [
    {
      id: 'Join',
      demoVid: '',
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
      projectText: this.projectsText('join')
    },
    {
      id: 'Pokedex',
      demoVid: './assets/img/projects/pokedex.png',
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
      projectText: this.projectsText('pokedex')
    },
    {
      id: 'Portfolio',
      demoVid: '',
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
      projectText: this.projectsText('portfolio')
    },
    {
      id: 'DA-Bubble',
      demoVid: '',
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
      projectText: this.projectsText('dabubble')
    },
    {
      id: 'BnB-Saga',
      demoVid: '',
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
      projectText: this.projectsText('bnbsaga')
    }
  ];
}

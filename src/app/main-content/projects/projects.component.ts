import { Component, inject, computed} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { SkillsService } from '../../services/skills.service';

interface ProjectsDataInterface {
  id: string;
  projectImg: string;
  devTools: string[];
  desTools: string[];
}
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  skills = inject(SkillsService);
  skillsDes = this.skills.skillsDes
  skillsDev = this.skills.skillsDev

  getSkillImgSrc(skillId: string, target = this.skillsDes || this.skillsDev): string {
    const skill = target.find(skill => skill.id === skillId);
    return skill ? skill.imgSource : '';
}

  projectsData: ProjectsDataInterface[] = [
    {
      id: 'join',
      projectImg: '',
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
      ]
    },
    {
      id: 'pokedex',
      projectImg: './assets/img/projects/pokedex.png',
      devTools: [
        this.getSkillImgSrc('javascript', this.skillsDev),
        this.getSkillImgSrc('html', this.skillsDev),
        this.getSkillImgSrc('css', this.skillsDev),
        this.getSkillImgSrc('api', this.skillsDev),
      ],
      desTools: [
        this.getSkillImgSrc('adesigner', this.skillsDes),
      ]
    },
    {
      id: 'portfolio',
      projectImg: '',
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
      ]
    },
    {
      id: 'dabubble',
      projectImg: '',
      devTools: [
        this.getSkillImgSrc('angular', this.skillsDev),
        this.getSkillImgSrc('typescript', this.skillsDev),
        this.getSkillImgSrc('html', this.skillsDev),
        this.getSkillImgSrc('css', this.skillsDev),
        this.getSkillImgSrc('firebase', this.skillsDev),
      ],
      desTools: [
        this.getSkillImgSrc('photoshop', this.skillsDes),
      ]
    },
    {
      id: 'bnb-saga',
      projectImg: '',
      devTools: [
        this.getSkillImgSrc('javascript', this.skillsDev),
        this.getSkillImgSrc('html', this.skillsDev),
        this.getSkillImgSrc('css', this.skillsDev),
      ],
      desTools: [
        this.getSkillImgSrc('photoshop', this.skillsDes),
        this.getSkillImgSrc('davinci', this.skillsDes),
      ]
    }
  ];
  

  languages = inject(LanguageService);

  projects = computed(() => this.languages.translation[this.languages.currentLanguage()]);

  get projectsTitle(): string {
    return this.languages.getTranslation('projects', 'title');
  }
}

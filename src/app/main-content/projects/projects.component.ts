import { Component, inject, computed} from '@angular/core';
import { LanguageService } from '../../services/language.service';

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

  projectsData: ProjectsDataInterface[] = [
    {
      id: 'join',
      projectImg: '',
      devTools: [],
      desTools: []
    },
    {
      id: 'pokedex',
      projectImg: './assets/img/projects/pokedex.png',
      devTools: [],
      desTools: []
    },
    {
      id: 'portfolio',
      projectImg: '',
      devTools: [],
      desTools: []
    },
    {
      id: 'dabubble',
      projectImg: '',
      devTools: [],
      desTools: []
    },
    {
      id: 'bnb-saga',
      projectImg: '',
      devTools: [],
      desTools: []
    }
  ];
  

  languages = inject(LanguageService);

  projects = computed(() => this.languages.translation[this.languages.currentLanguage()]);

  get projectsTitle(): string {
    return this.languages.getTranslation('projects', 'title');
  }
}

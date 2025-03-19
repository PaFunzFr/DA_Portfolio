import { Component, inject, signal} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectDataService } from '../../services/project-data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {  
languages = inject(LanguageService);
  project = inject(ProjectDataService);
  projectData = this.project.projectData;
  currentNumber = signal<number>(0)
  isHovered: boolean = false;

  get projectsTitle(): string {
    return this.languages.getTranslation('projects', 'title');
  }

  setCardNumber(n: number) {
    this.currentNumber.set(n);
  }


}

import { Component, inject} from '@angular/core';
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
  project = inject(ProjectDataService);
  projectData = this.project.projectData;
  languages = inject(LanguageService);

  get projectsTitle(): string {
    return this.languages.getTranslation('projects', 'title');
  }

}

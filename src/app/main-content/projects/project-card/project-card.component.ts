import { Component, inject, Input} from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { ProjectDataService } from '../../../services/project-data.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})

export class ProjectCardComponent {

  languages = inject(LanguageService);
  project = inject(ProjectDataService);
  projectData = this.project.projectData;

  @Input()cardNumber = 0;

  get projectsTitle(): string {
    return this.languages.getTranslation('projects', 'title');
  }

  getProjectText(project: string): string {
    return this.languages.getProjectDescription(project);
  }

  @Input()isHovered: boolean = false;

}

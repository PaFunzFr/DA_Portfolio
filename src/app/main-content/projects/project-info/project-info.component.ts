import { Component, inject, Input } from '@angular/core';
import { ProjectDataService } from '../../../services/project-data.service';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-project-info',
  standalone: true,
  imports: [],
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.scss'
})
export class ProjectInfoComponent {
  project = inject(ProjectDataService);
  projectData = this.project.projectData;
  languages = inject(LanguageService);
  @Input() cardNumber = 0;


  getProjectText(project: string): string {
    return this.languages.getProjectDescription(project);
  }
}

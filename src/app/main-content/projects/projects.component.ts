import { Component, inject} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ProjectCardComponent } from './project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {  
  languages = inject(LanguageService);

  get projectsTitle(): string {
    return this.languages.getTranslation('projects', 'title');
  }
}

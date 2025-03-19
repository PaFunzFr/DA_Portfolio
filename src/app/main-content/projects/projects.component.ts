import { Component, inject, signal, OnInit} from '@angular/core';
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
  interval: number | undefined;

  get projectsTitle(): string {
    return this.languages.getTranslation('projects', 'title');
  }

  setCardNumber(n: number) {
    this.currentNumber.set(n);
    clearInterval(this.interval);
    this.startAutoSlide();  
  }

  ngOnInit() {
    this.startAutoSlide();
  }

  // stops intervals if directive, pipe or service is destroyed
  ngOnDestroy() {
    clearInterval(this.interval);
  }

  startAutoSlide() {
    this.interval = window.setInterval(() => {
      this.currentNumber.update(n => (n + 1) % this.projectData.length);
    }, 3000);
  }

}

import { Component, inject, signal, OnInit, OnDestroy} from '@angular/core';
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
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    if (this.isHovered) return;
    this.interval = window.setInterval(() => {
      this.currentNumber.update(n => (n + 1) % this.projectData.length);
    }, 4000);
  }

  stopAutoSlide() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }

  handleHoverState(isHovered: boolean) {
    this.isHovered = isHovered;
    if (isHovered) {
      this.stopAutoSlide();
    } else {
      this.startAutoSlide();
    }
  }
}

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
  isHovered: boolean = false;
  interval: number | undefined;

  currentNumber = signal<number>(0)
  previousNumber: number = 0;
  isSliding: boolean = false;

  get projectsTitle(): string {
    return this.languages.getTranslation('projects', 'title');
  }

  setCardNumber(n: number) {
    if (n === this.currentNumber()) return;

    this.previousNumber = this.currentNumber();
    this.isSliding = true;
    
    this.currentNumber.set(n);
    this.stopAutoSlide();
    this.startAutoSlide();
    this.resetAnimation();
    
  }

  resetAnimation() {
    setTimeout(() => {
      this.isSliding = false;
      this.previousNumber = this.currentNumber();
    }, 700);
  }

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  getProjectText(project: string): string {
    return this.languages.getProjectDescription(project);
  }

  startAutoSlide() {
    if (this.isHovered) return;
    this.interval = window.setInterval(() => {
      const next = (this.currentNumber() + 1) % this.projectData.length;

      this.previousNumber = this.currentNumber();
      this.isSliding = true;
      this.currentNumber.set(next);

      this.resetAnimation()
    }, 7000);
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

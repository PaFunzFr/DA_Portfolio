import { Component, inject, Input, Output, EventEmitter, HostListener } from '@angular/core';
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
  screenSize: string = '';
  @Input() isHovered: boolean = false;
  interval: number | undefined;
  currentNumber = 0;
  buttonClicked: boolean = false;

  @Input() cardNumber = 0;
  @Output() hoverState = new EventEmitter<boolean>();

  ngOnInit() {
    this.onResize();
  }

  get projectsTitle(): string {
    return this.languages.getTranslation('projects', 'title');
  }

  getProjectText(project: string): string {
    return this.languages.getProjectDescription(project);
  }

  hoverStopAutoSlide() {
    if (!this.buttonClicked) {
      this.buttonClicked = true;
    }
    this.isHovered = true;
    this.hoverState.emit(true);
  }

  noHoverStartAutoSlide() {
    if (this.buttonClicked) {
      this.buttonClicked = false;
    }
    this.isHovered = false;
    this.hoverState.emit(false);
  }

  toggleInfo() {
    this.isHovered = !this.isHovered;
    this.buttonClicked = !this.buttonClicked;
    if(this.isHovered) {
      this.hoverState.emit(true);
    } else if (!this.isHovered) {
      this.hoverState.emit(false);
    }
  }

  x:number = 0;
  y:number = 0;

  trackMouse(event: any) {
    this.x = (event.clientX / window.innerWidth - 0.5) * 15;
    this.y = (event.clientY / window.innerHeight - 0.5) * 15;
  }

  @HostListener('window:resize')
  onResize() {
    const width = window.innerWidth;
    this.screenSize = width < 770 ? 'mobile' : 'desktop';
  }
  
}

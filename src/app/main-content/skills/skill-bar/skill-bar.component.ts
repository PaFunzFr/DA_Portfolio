import { Component, Input, inject } from '@angular/core';

export interface SkillPool {
  id: string;
  title: string;
  imgSource: string;
}

@Component({
  selector: 'app-skill-bar',
  standalone: true,
  imports: [],
  templateUrl: './skill-bar.component.html',
  styleUrl: './skill-bar.component.scss',
})
export class SkillBarComponent {
  hoveredIndex: number | null = null;

  @Input() skills: SkillPool[] = [];

  setHoveredIndex(index: number): void {
    this.hoveredIndex = index;
  }

  clearHover(): void {
    this.hoveredIndex = null;
  }

  isHovered(index: number): boolean {
    return this.hoveredIndex === index;
  }

  getScale(index: number): string {
    if (this.hoveredIndex === null) return 'scale(1)';
    const distance = Math.abs(this.hoveredIndex - index);
    return distance === 0 ? 'scale(1.3)' : distance === 1 ? 'scale(1.1)': 'scale(1)';
  }

  getOpacity(index: number): string {
    if (this.hoveredIndex === null) return '0.3';
    const distance = Math.abs(this.hoveredIndex - index);
    return distance === 0 ? '1' : distance === 1 ? '0.4' : '0.3';
  }
}

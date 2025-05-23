import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})

export class HeroComponent {

languages = inject(LanguageService);
xDataLeft = 50;
xDataRight = 50;
xDataLeftTitle = 0;
xDataRightTitle = 0;
offset = 0;
entering: boolean = false;

  trackMouse(event: any) {
    const positionX = (event.clientX / window.innerWidth) * 100;
    this.xDataLeft = positionX;
    this.xDataRight = 100 - positionX;
    const fadeFactor = Math.min(1, Math.max(0, Math.abs(positionX - 50) - 5) / 10);
    this.xDataLeftTitle = fadeFactor * this.xDataLeft;
    this.xDataRightTitle = fadeFactor * this.xDataRight;
    this.offset = -50 + this.xDataLeft;
  }

  resetPosition() {
    this.transition();
    this.xDataLeft = 50;
    this.xDataRight= 50;
    this.xDataLeftTitle = 0;
    this.xDataRightTitle = 0;
    this.offset = 0;

  }

  transition() {
    this.entering = true;
    setTimeout(() => {
      this.entering = false;
    }, 500);
  }

  getDescription(x:string) {
    return this.languages.getTranslation('hero', x)
  }

}

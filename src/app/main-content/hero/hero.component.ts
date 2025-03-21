import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

xDataLeft = 0;
xDataRight = 0;
xDataLeftTitle = 0;
xDataRightTitle = 0;

  trackMouse(event: any) {
    const positionX = (event.clientX / window.innerWidth) * 100;
    this.xDataLeft = positionX;
    this.xDataRight = 100 - positionX;
    const fadeFactor = Math.min(1, Math.max(0, Math.abs(positionX - 50) - 5) / 10);
    this.xDataLeftTitle = fadeFactor * this.xDataLeft;
    this.xDataRightTitle = fadeFactor * this.xDataRight;
  }

  resetPosition() {
    this.xDataLeft = 50;
    this.xDataRight = 50;
    this.xDataLeftTitle = 0;
    this.xDataRightTitle = 0;
  }

}

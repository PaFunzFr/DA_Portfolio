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

  trackMouse(event: any) {
    const positionX = (event.clientX / window.innerWidth) * 100;
    this.xDataLeft = positionX;
    this.xDataRight = 100 - positionX;
  }

  resetPosition() {
    this.xDataLeft = 50;
    this.xDataRight = 50;
  }

}

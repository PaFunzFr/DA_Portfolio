import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @HostListener('window:scroll')
  onScroll() {
    const viewportHeight = window.innerHeight; // => 100vh
    if (window.scrollY >= 1.5 * viewportHeight) {
      console.log('reached PositionY 150vh');
    }
  }

}

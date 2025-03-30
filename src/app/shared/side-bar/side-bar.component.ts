import { Component, inject, HostListener, Input } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  navBarService = inject(NavBarService);
  
  @Input() position = '';
  @Input() noScroll: boolean = true;
  @Input() positionY: string = '';
  @HostListener('window:scroll', ['$event'])

  onScroll(event: Event) {

      this.navBarService.showSideBar = !this.navBarService.showSideBar;
    
  }

  leavingSideBar() {
    this.navBarService.showSideBar = false;
  }

}

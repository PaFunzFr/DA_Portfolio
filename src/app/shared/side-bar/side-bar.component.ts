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

  @HostListener('window:scroll', ['$event'])
  @Input() position = '';

  onScroll(event: Event) {
    this.navBarService.showSideBar = true;    
  }

  leavingSideBar() {
    this.navBarService.showSideBar = true;    
  }
}

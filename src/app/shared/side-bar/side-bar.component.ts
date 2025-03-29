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
  @HostListener('window:scroll', ['$event'])

  onScroll(event: Event) {
    if (this.navBarService.hideOnScroll) {
      this.navBarService.showSideBar = false;
    }
  }

  leavingSideBar() {
    this.navBarService.showSideBar = false;
  }


}

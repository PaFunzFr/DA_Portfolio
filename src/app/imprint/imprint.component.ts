import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideBarComponent } from '../shared/side-bar/side-bar.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [HeaderComponent, SideBarComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}

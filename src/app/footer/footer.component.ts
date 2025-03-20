import { Component, inject } from '@angular/core';
import { SocialService } from '../services/social.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

    socialReference = inject(SocialService);
}

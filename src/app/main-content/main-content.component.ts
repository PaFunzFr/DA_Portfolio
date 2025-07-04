import { Component, inject } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from "../header/header.component";
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { SideBarComponent } from '../shared/side-bar/side-bar.component';
import { NavBarService } from '../services/nav-bar.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    LandingPageComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    TeamComponent,
    HeaderComponent,
    ContactComponent,
    SideBarComponent,
    FooterComponent
],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})

export class MainContentComponent {

  navBarService = inject(NavBarService);
  
}

import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from "../header/header.component";
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';

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
    ContactComponent
],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})

export class MainContentComponent {

}

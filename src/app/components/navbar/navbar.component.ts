import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDiagramProject, faLaptopCode, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ThemeConfigService } from '../../services/theme-config.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent{

  constructor(private themeService: ThemeConfigService) { }

  userIcon : IconDefinition = faUser;
  skillsIcon : IconDefinition = faDiagramProject;
  projectsIcon : IconDefinition = faLaptopCode; 
  iconsColorClass!: string;

  onMouseEnter(event: Event) {
    const currentElement = (event.target as Element);
    let currentElementId = currentElement.id;
    switch (currentElementId) {
      case 'whoami':
        break;

      case 'skills':
        break;

      case 'projects':
        break;

      default:
        break;
    }
  }

  onMouseLeave(event: Event) {
    let currentElementId = (event.target as Element).id;
    switch (currentElementId) {
      case 'whoami':
        break;

      case 'skills':
        break;

      case 'projects':
        break;

      default:
        break;
    }
  }
}

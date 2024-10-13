import { AfterViewInit, Component, ElementRef, inject, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeConfigService } from '../../services/theme-config.service';
import { NgClass } from '@angular/common';
import { timer } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit {

  themeService: ThemeConfigService = inject(ThemeConfigService);
  @ViewChildren('navIcon') icons!: QueryList<ElementRef>;
  
  constructor(private renderer: Renderer2, private router: Router) { }

  handleNavigationDisplay() {
    this.icons.forEach((icon, index) => {
      if (icon.nativeElement.classList.contains('show')) {
        this.renderer.removeClass(icon.nativeElement, 'show');
      } else {
        this.renderer.addClass(icon.nativeElement, 'show');
      }
    });
  }

  hideNavigationDisplay(){
    timer(1000).subscribe(() => this.handleNavigationDisplay());
  }
  ngAfterViewInit() {
    timer(2000).subscribe(() => this.handleNavigationDisplay());
    timer(4000).subscribe(() => this.handleNavigationDisplay());
  }

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

import { AfterViewInit, Component, ElementRef, inject, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeConfigService } from '../../services/theme-config.service';
import { interval, take, timer } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit {

  themeService: ThemeConfigService = inject(ThemeConfigService);
  @ViewChildren('navIcon') icons!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2, private router: Router) { }

  ngAfterViewInit() {
    timer(500).subscribe(() => this.handleNavigationDisplay());
    interval(1500).pipe(take(4)).subscribe(routeId => this.showAllPages(routeId));
  }

  handleNavigationDisplay() {
    this.icons.forEach((icon, index) => {
      if (icon.nativeElement.classList.contains('show')) {
        this.renderer.removeClass(icon.nativeElement, 'show');
      } else {
        this.renderer.addClass(icon.nativeElement, 'show');
      }
      if (this.themeService.currentTheme() === "dark") {
        this.renderer.addClass(icon.nativeElement, 'light');
        this.renderer.removeClass(icon.nativeElement, 'dark');
      } else {
        this.renderer.addClass(icon.nativeElement, 'dark');
        this.renderer.removeClass(icon.nativeElement, 'light');
      }
    });
  }

  hideNavigationDisplay() {
    timer(1000).subscribe(() => this.handleNavigationDisplay());
  }

  showAllPages(routeId: number) {

    switch (routeId) {
      case 0:
        this.router.navigateByUrl("/intro");
        break;
      case 1:
        this.router.navigateByUrl("/skills");
        break;
      case 2:
        this.router.navigateByUrl("/projects");
        break;
      case 3:
        this.router.navigateByUrl("/");
        timer(500).subscribe(() => this.handleNavigationDisplay());
        break;
      default:
        console.log("Invalid RouteID");
        break;
    }
  }

}

import { AfterViewInit, Component, ElementRef, inject, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
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
  @ViewChild('navContainer') navContainerElement! : ElementRef;

  constructor(private renderer: Renderer2, private router: Router) { }

  ngAfterViewInit() {
    timer(500).subscribe(() => this.handleNavigationDisplay());
    interval(1500).pipe(take(4)).subscribe(() => this.showAllPages(this.router.url)).add(() => {
      timer(500).subscribe(() => this.handleNavigationDisplay());
    });
  }

  handleNavigationDisplay() {
    if (this.navContainerElement.nativeElement.classList.contains('show')) {
      this.renderer.removeClass(this.navContainerElement.nativeElement, 'show');
    } else {
      this.renderer.addClass(this.navContainerElement.nativeElement, 'show');
    }

    this.icons.forEach((icon, index) => {

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

  showAllPages(currentRoute: string) {
    
    switch (currentRoute) {
      case '/':
        this.router.navigateByUrl("/intro");
        break;
      case '/intro':
        this.router.navigateByUrl("/skills");
        break;
      case '/skills':
        this.router.navigateByUrl("/projects");
        break;
      case '/projects':
        this.router.navigateByUrl("/");
        break;
      default:
        console.error("Invalid RouteID");
        break;
    }
  }

}

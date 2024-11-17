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
  @ViewChild('navContainer') navContainer! : ElementRef;

  constructor(private renderer: Renderer2, private router: Router) { }

  ngAfterViewInit() {
    timer(500).subscribe(() => this.handleNavigationDisplay());
    interval(1500).pipe(take(4)).subscribe(() => this.showAllPages(this.router.url)).add(() => {
      timer(500).subscribe(() => this.handleNavigationDisplay());
    });
  }

  handleNavigationDisplay() {
    if (this.navContainer.nativeElement.classList.contains('show')) {
      this.renderer.removeClass(this.navContainer.nativeElement, 'show');
    } else {
      this.renderer.addClass(this.navContainer.nativeElement, 'show');
    }
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

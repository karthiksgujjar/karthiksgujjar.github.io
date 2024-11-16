import { AfterViewInit, Component, ElementRef, inject, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeConfigService } from '../../services/theme-config.service';
import { timer } from 'rxjs';

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

  constructor(private renderer: Renderer2) { }

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

  ngAfterViewInit() {
    timer(2000).subscribe(() => this.handleNavigationDisplay());
    timer(4000).subscribe(() => this.handleNavigationDisplay());
  }

}

import { AfterViewInit, Component, ElementRef, inject, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeConfigService } from '../../services/theme-config.service';
import { timer } from 'rxjs';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit {

  themeService: ThemeConfigService = inject(ThemeConfigService);
  @ViewChildren('navIcon') icons!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    timer(500).subscribe(() => this.handleNavigationDisplay());
  }

  handleNavigationDisplay() {
    this.icons.forEach((icon: ElementRef) => {
      if (icon.nativeElement.classList.contains('show')) {
        this.renderer.removeClass(icon.nativeElement, 'show');
      } else {
        this.renderer.addClass(icon.nativeElement, 'show');
      }
    });
  }

}

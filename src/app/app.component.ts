import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ThemeConfigService } from './services/theme-config.service';
import { NgClass } from '@angular/common';
import { routeTransition } from '../route-transition';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    routeTransition
  ]
})
export class AppComponent {

  themeService: ThemeConfigService = inject(ThemeConfigService);

  constructor(protected route: ActivatedRoute) { }

  themeSwitcher() {
    this.themeService.currentTheme.update(value => (
      (value == "light") ? "dark" : "light"
    ));
  }
}

import { Component, ElementRef, inject, Renderer2 } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ThemeConfigService } from './services/theme-config.service';
import { NgClass } from '@angular/common';
import { routeTransition } from '../route-transition';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, NgClass, TranslatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    routeTransition
  ]
})
export class AppComponent {

  themeService: ThemeConfigService = inject(ThemeConfigService);
  previousLangElement!: EventTarget | null;

  constructor(protected route: ActivatedRoute, private translate: TranslateService, private render: Renderer2) { }

  themeSwitcher() {
    this.themeService.currentTheme.update(value => (
      (value == "light") ? "dark" : "light"
    ));
  }

  langSwitcher(element: Event, langCode: string) {
    if (this.previousLangElement !== undefined) {
      this.render.removeClass(this.previousLangElement, "active");
    }
    this.render.addClass(element.target, "active");
    this.previousLangElement = element.target;
    this.translate.use(langCode);
  }
}

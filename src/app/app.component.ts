import { Component, ElementRef, inject, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ThemeConfigService } from './services/theme-config.service';
import { NgClass } from '@angular/common';
import { routeTransition } from '../route-transition';
import { TranslateService } from '@ngx-translate/core';

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
export class AppComponent implements OnInit {

  themeService: ThemeConfigService = inject(ThemeConfigService);
  previousLangElement!: EventTarget | null;
  @ViewChildren('dropdownItem') dropdownItems!: QueryList<ElementRef>
  appSupportedLanguages: string[] = [
    "en", "kn", "hi"
  ];
 
  constructor(protected route: ActivatedRoute, private translateService: TranslateService, private render: Renderer2) {
    translateService.addLangs(this.appSupportedLanguages);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  
  ngOnInit(): void {
    let prefferedLanguage = localStorage.getItem("pref-lang");
    if (prefferedLanguage == null) {
      let browserLang = this.translateService.getBrowserLang() ?? '';
      prefferedLanguage = this.appSupportedLanguages.includes(browserLang) ? browserLang : this.translateService.defaultLang;
      localStorage.setItem('pref-lang', prefferedLanguage);
    }
    this.translateService.use(prefferedLanguage);
  }

  ngAfterViewInit(): void {
    const currentDropdownItem = this.dropdownItems.find(item => item.nativeElement.getAttribute('data-lang-key') === this.translateService.currentLang);

    currentDropdownItem?.nativeElement.click();
  }

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
    localStorage.setItem('pref-lang', langCode);
    this.translateService.use(langCode);
  }
}

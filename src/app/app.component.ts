import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSun, faMoon, IconDefinition, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { ThemeConfigService } from './services/theme-config.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  themeIcon!: IconDefinition;
  lightModeIcon: IconDefinition = faSun;
  darkModeIcon: IconDefinition = faMoon;
  languageSwitchIcon: IconDefinition = faLanguage;

  constructor(private themeService: ThemeConfigService) { }

  ngOnInit(): void {
    // CHeck for client's prefereence and set that here.
    this.themeService.setCurrentThemeMode("light");
    this.themeIcon = this.lightModeIcon;
  }

  themeSwitcher() {
    if (this.themeIcon === this.lightModeIcon) {
      this.themeIcon = this.darkModeIcon;
      this.themeService.setCurrentThemeMode("dark");
    }
    else {
      this.themeIcon = this.lightModeIcon;
      this.themeService.setCurrentThemeMode("light");
    }
  }
}

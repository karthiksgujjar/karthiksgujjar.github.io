import { Injectable } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Injectable({
  providedIn: 'root'
})
export class ThemeConfigService {

  private currentTheme!: string;

  constructor() { }

  
  public getCurrentThemeMode() : string {
    return this.currentTheme;
  }
  
  
  public setCurrentThemeMode(themeMode : string) {
    this.currentTheme = themeMode;
    if( themeMode === "dark"){
      document.body.style.backgroundColor = "#0C090A";
      document.body.style.color = "#FFFFFF";
      NavbarComponent.prototype.iconsColorClass = "dark-mode";
    }
    else{
      document.body.style.backgroundColor = "#FFFFFF";
      document.body.style.color = "#000000";
      NavbarComponent.prototype.iconsColorClass = "";

    }
  }
  
}

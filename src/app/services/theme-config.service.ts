import { effect, Injectable, signal } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Injectable({
  providedIn: 'root'
})
export class ThemeConfigService {

  currentTheme = signal(localStorage.getItem('preferred-theme') ?? "dark");

  constructor() {
    effect(() => {
      if (this.currentTheme() === "dark") {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        localStorage.setItem('preferred-theme', 'dark')
      }
      else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        localStorage.setItem('preferred-theme', 'light')
      }
    });
   }
  
}

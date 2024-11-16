import { AfterViewInit, Component, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ThemeConfigService } from './services/theme-config.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  themeService: ThemeConfigService = inject(ThemeConfigService);

  @ViewChild('pageUp') pageUpIcon!: ElementRef;
  @ViewChild('pageDown') pageDownIcon!: ElementRef;

  constructor(private router: Router, private renderer: Renderer2) { 

  }

  ngAfterViewInit(): void {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        if (event.url === '/projects') {
          this.renderer.removeClass(this.pageUpIcon.nativeElement, "d-none");
          this.renderer.addClass(this.pageDownIcon.nativeElement, "d-none");
        }
        //Here if the current URL is /skills or /intro then both the icons will be displayed. If the current URL is /, then by default we have pageUp icon as d-none  
        else if(event.url !== '/') {
          this.renderer.removeClass(this.pageUpIcon.nativeElement, "d-none");
          this.renderer.removeClass(this.pageDownIcon.nativeElement, "d-none");
        }
        else if(event.url === '/') {
          this.renderer.addClass(this.pageUpIcon.nativeElement, "d-none");
          this.renderer.removeClass(this.pageDownIcon.nativeElement, "d-none");
        }
      }
    });
    

  }

  themeSwitcher() {
    this.themeService.currentTheme.update(value => (
      (value == "light") ? "dark" : "light"
    ));
  }

  handlePageUpClick() {

    switch (this.router.url) {
      case "/projects":
        this.router.navigateByUrl("/skills");
        this.renderer.removeClass(this.pageDownIcon.nativeElement, "d-none");
        break;
      case "/skills":
        this.router.navigateByUrl("/intro");
        this.renderer.removeClass(this.pageDownIcon.nativeElement, "d-none");

        break;
      case "/intro":
        this.router.navigateByUrl("/");
        this.renderer.removeClass(this.pageDownIcon.nativeElement, "d-none");
        this.renderer.addClass(this.pageUpIcon.nativeElement, "d-none");
        break;
    }
  }

  handlePageDownClick() {

    switch (this.router.url) {
      case "/":
        this.router.navigateByUrl("/intro");
        this.renderer.removeClass(this.pageUpIcon.nativeElement, "d-none");
        break;
      case "/intro":
        this.renderer.removeClass(this.pageUpIcon.nativeElement, "d-none");
        this.router.navigateByUrl("/skills");
        break;
      case "/skills":
        this.router.navigateByUrl("/projects");
        this.renderer.removeClass(this.pageUpIcon.nativeElement, "d-none");
        this.renderer.addClass(this.pageDownIcon.nativeElement, "d-none");
        break;
    }
  }
}

import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, Scroll } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  // constructor(private router:Router, private scroller: ViewportScroller){}

  // @HostListener('window:scroll',['$event'])
  // handleScroll(){
  //   console.log(this.scroller.getScrollPosition());
    
  //   // this.router.navigateByUrl("/intro");
  // }
}

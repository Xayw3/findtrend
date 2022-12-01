import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent {
  links = ['About', 'How it work', 'Pricing', 'Solution', 'Features'];

  isBottom: boolean = true;
  active: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.isBottom = false;
    } else if (window.scrollY) {
      this.isBottom = false;
    } else  {
      this.isBottom = true;
    }
  }
  
  clickEvent(){
    this.active = !this.active;       
  }
}

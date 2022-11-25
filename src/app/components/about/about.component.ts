import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  tab = {
    logo: '../../../assets/images/logo.svg',
    imageDesc: 'Findtrend',
    text: 'Findtrend - Elon Musk'
  }

}

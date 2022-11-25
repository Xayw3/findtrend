import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  tabs = [
    {
      logo: '../../../assets/images/twitter.svg',
      imageDesc: 'Twitter',
      text: 'Cryptopunk - Search'
    },
    {
      logo: '../../../assets/images/pinterest.svg',
      imageDesc: 'Pinterest',
      text: 'Popular Design - Search'
    },
    {
      logo: '../../../assets/images/facebook.svg',
      imageDesc: 'Facebook',
      text: 'Product Design - Search'
    },
    {
      logo: '../../../assets/images/dribble.svg',
      imageDesc: 'Dribble',
      text: 'Elon Musk - Search'
    }
  ];
}

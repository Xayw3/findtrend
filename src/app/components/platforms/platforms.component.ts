import { Component } from '@angular/core';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.scss']
})
export class PlatformsComponent {
  selectedIndex: number = 1;

  platforms = [
    {
      logo: '../../../assets/images/platform/fb.svg',
      name: 'Facebook',
    },
    {
      logo: '../../../assets/images/platform/twitter.svg',
      name: 'Twitter',
    },
    {
      logo: '../../../assets/images/platform/dribble.svg',
      name: 'Dribble',
    },
    {
      logo: '../../../assets/images/platform/pinterest.svg',
      name: 'Pinterest',
    },
    {
      logo: '../../../assets/images/platform/medium.svg',
      name: 'Medium',
    },
    {
      logo: '../../../assets/images/platform/reddit.svg',
      name: 'Reddit',
    },
    {
      logo: '../../../assets/images/platform/vk.svg',
      name: 'vk',
    },
    {
      logo: '../../../assets/images/platform/linkedin.svg',
      name: 'Linkedin',
    },
  ];

  tweets = [
    '../../../assets/images/platform/tweet-1.webp',
    '../../../assets/images/platform/tweet-2.webp',
    '../../../assets/images/platform/tweet-3.webp'
  ]

}

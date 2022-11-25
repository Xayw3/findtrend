import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  selectedIndex: number = 1;

  tariffs = [
    {
      title: 'Personal',
      description: 'Special first packet for all',
      price: '$8',
      points: [
        'Up to 5 page each group',
        'Up to 10 group page',
        '5 Days group page saved'
      ]
    },
    {
      title: 'Regular',
      description: 'Recommended for personal pro',
      price: '$20',
      points: [
        'Up to 15 page each group',
        'Download page up to 20 page',
        'Up to 10 group page',
        '15 Days group page saved'
      ]
    },
    {
      title: 'Premium',
      description: 'Packet for Startup & Company',
      price: '$48',
      points: [
        'Unlimited group pages',
        'Unlimited download page',
        'Unlimited page each group',
        'Customize sorting group pages',
        'Customize group page name',
        '30 Days group page saved'
      ]
    }
  ];
}

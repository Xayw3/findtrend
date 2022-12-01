import { Component } from '@angular/core';

@Component({
  selector: 'app-startups',
  templateUrl: './startups.component.html',
  styleUrls: ['./startups.component.scss']
})
export class StartupsComponent {
  logos = [
    {
      logo: '../../../assets/images/logos/microsoft.svg',
      name: 'Microsoft',
    },
    {
      logo: '../../../assets/images/logos/allianz.svg',
      name: 'Allianz',
    },
    {
      logo: '../../../assets/images/logos/upwork.svg',
      name: 'Upwork',
    },
    {
      logo: '../../../assets/images/logos/volvo.svg',
      name: 'VOLVO',
    },
    {
      logo: '../../../assets/images/logos/grab.svg',
      name: 'Grab',
    },
    {
      logo: '../../../assets/images/logos/verizon.svg',
      name: 'verizon',
    },
    {
      logo: '../../../assets/images/logos/coinbase.svg',
      name: 'coinbase',
    },
    {
      logo: '../../../assets/images/logos/expedia.svg',
      name: 'Expedia',
    },
    {
      logo: '../../../assets/images/logos/airtable.svg',
      name: 'Airtable',
    },
    {
      logo: '../../../assets/images/logos/magento.svg',
      name: 'Magento',
    },
    {
      logo: '../../../assets/images/logos/carrera.svg',
      name: 'CARRERA',
    },
    {
      logo: '../../../assets/images/logos/bonanza.svg',
      name: 'BONANZA',
    },
    {
      logo: '../../../assets/images/logos/wetransfer.svg',
      name: 'WeTransfer',
    },
    {
      logo: '../../../assets/images/logos/suzuki.svg',
      name: 'SUZUKI',
    },
    {
      logo: '../../../assets/images/logos/algolia.svg',
      name: 'algolia',
    },
    {
      logo: '../../../assets/images/logos/heineken.svg',
      name: 'Heineken',
    },
  ];

}

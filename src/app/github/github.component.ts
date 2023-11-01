import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  services: any[] = [
    {
      id: 'basic-website',
      title: 'Basic Websites',
      description: 'Ideal for businesses looking to establish a web presence.',
      price: '$500'
    },
    {
      id: 'custom-website',
      title: 'Custom Websites',
      description: 'Perfect for businesses with specialized needs.',
      price: '$1,200'
    },
    {
      id: 'e-commerce',
      title: 'E-commerce Sites',
      description: 'For businesses ready to sell online.',
      price: '$2,500'
    },
    {
      id: 'web-apps',
      title: 'Web Apps',
      description: 'For interactive web-based solutions.',
      price: 'Starting at $3,500'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

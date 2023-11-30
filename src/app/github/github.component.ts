import { Component, OnInit } from '@angular/core';
import {serviceData} from "./service.data";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  services = serviceData;
  showDjComponent = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDjComponentDisplay(): void {
    this.showDjComponent = !this.showDjComponent;
  }

  navigateToContact(): void {
    // Implement navigation logic to the Contact component
    // For example, using Angular Router or toggling visibility
  }


}

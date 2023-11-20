import { Component, OnInit } from '@angular/core';
import {serviceData} from "./service.data";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  services = serviceData;

  constructor() { }

  ngOnInit(): void {
  }
}

import { Component } from '@angular/core';
import { homeOptionsData } from "./home-options.data";

@Component({
  selector: 'app-home-options',
  templateUrl: './home-options.component.html',
  styleUrls: ['./home-options.component.scss']
})
export class HomeOptionsComponent {
  rows = homeOptionsData;
}

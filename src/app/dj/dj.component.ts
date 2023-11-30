import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dj',
  templateUrl: './dj.component.html',
  styleUrls: ['./dj.component.scss']
})
export class DjComponent implements OnInit {
  @Output() backClicked = new EventEmitter<void>();
  @Output() contactClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onBackClicked(): void {
    this.backClicked.emit();
  }

  onContactClicked(): void {
    this.contactClicked.emit();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yellow',
  templateUrl: './yellow.component.html',
  styleUrls: ['./yellow.component.css']
})
export class YellowComponent implements OnInit {
  status = 'bad';
  flag = false;

  constructor() {}

  changeStatus() {
    this.flag = !this.flag;

    if (this.flag) {
      this.status = 'bad if part';
    } else {
      this.status = 'good else part';
    }

    return this.status;
  }

  ngOnInit() {}
}

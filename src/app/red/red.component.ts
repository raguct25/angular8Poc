import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit {
  status = 'bad';
  flag = false;

  showStatus() {
    // this.flag = !this.flag;
    this.flag = this.flag;
    if (this.flag) {
      this.status = 'very good from show status function';
    }

    return  'good';
  }

  constructor() {}

  ngOnInit() {}
}

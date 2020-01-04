import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  public buttonClicked = '';
  public data = '';

  constructor() {}

  ngOnInit() {}

  clickButton(event) {
    console.log('event', event);

    this.buttonClicked = 'Hi, Event button is working';
  }

  referenceClick(name) {
    this.buttonClicked = name;
  }
}

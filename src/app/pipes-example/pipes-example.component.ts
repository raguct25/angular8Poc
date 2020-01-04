import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {

  public upperText = 'ABCDEFGHIJKLMNOPRST';
  public lowerText = 'abcdefghijklmnopqrst';
  public titleText = 'hi this is ragu, who is this';
  public currentDate = new Date();

  public data = {
    name: 'ragu',
    lastname: 'subramaniyam'
  };

  constructor() { }

  ngOnInit() {
  }

}

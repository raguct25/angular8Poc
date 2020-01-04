import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  public inputId = 'TestId1';
  public successClass = 'text-success';
  public hasError = false;
  public isStyle = true;

  public multiClass = {
    'text-success': this.hasError,
    'text-danger': !this.hasError,
    'text-style': this.isStyle
  };

  public styleBinding = {
    color: 'pink',
    fontStyle: 'italic'
  };

  constructor() {}

  ngOnInit() {}
}

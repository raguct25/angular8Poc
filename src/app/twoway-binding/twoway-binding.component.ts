import { Component, OnInit } from '@angular/core';
import { YellowComponent } from '../yellow/yellow.component';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.css']
})
export class TwowayBindingComponent implements OnInit {
  data = 'show two way bind';
  flag = true;
  students = ['ragu', 'gandhi', 'daniel'];
  currentName = '';
  state = true;
  counter = [];

  getLength(){
    if(this.counter.length === 5){
      return 'yellow'
    }else{
      return 'pink'
    }
  }

  display() {
    this.state = !this.state;
    this.counter.push(this.counter.length + 1);
  }

  add() {
    this.students.push(this.currentName);
  }

  checkNgif() {
    this.flag = !this.flag;
    return this.flag;
  }

  getColor() {
    if (this.flag) {
      return 'green';
    } else {
      return 'red';
    }
  }

  constructor() {}

  ngOnInit() {}
}

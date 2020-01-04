import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cmp-iteraction',
  templateUrl: './cmp-iteraction.component.html',
  styleUrls: ['./cmp-iteraction.component.css']
})
export class CmpIteractionComponent implements OnInit {

  // @Input() public parentData;
  @Input('parentData') public sendToChild;

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('This message from child component')
  }

}

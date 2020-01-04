import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public message  =  '';
  title = 'practise-app';
  sendToChild = 'This message created app component';
}

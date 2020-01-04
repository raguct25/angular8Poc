import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {
  public display = false;
  public displayBlock = true;
  public switchData = 'office';

  public employees = ['Batman', 'Spiderman', 'Superman','Hulkman','Steelman' ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employess',
  templateUrl: './list-employess.component.html',
  styleUrls: ['./list-employess.component.css']
})
export class ListEmployessComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Batman',
      gender: 'male',
      gmail: 'batman@gmail.com',
      phone: 989898,
      dob: new Date('10/25/2000'),
      dept: 'IT',
      contactPreference: 'SocialMedia',
      isActive: true,
      imagePath: 'assets/images/batman.png'
    },
    {
      id: 2,
      name: 'Loganathan',
      gender: 'male',
      gmail: 'logu@gmail.com',
      phone: 557766,
      dob: new Date('8/2/1998'),
      dept: 'IT',
      contactPreference: 'Email',
      isActive: true,
      imagePath: 'assets/images/man.png'
    },
    {
      id: 3,
      name: 'Mariya',
      gender: 'female',
      gmail: 'mariya@gmail.com',
      phone: 90908,
      dob: new Date('1/25/2000'),
      dept: 'IT',
      contactPreference: 'SocialMedia',
      isActive: true,
      imagePath: 'assets/images/female.png'
    }
  ];

  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import {EmployeeDetails} from './employee-detail.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  emp = [];
  empDetail: EmployeeDetails[] = [
    new EmployeeDetails('6789', 'Kishore Kumar', 'kk@email.com', '1234567871' ),
    new EmployeeDetails('7891', 'Ravi Teria', 'rt@email.com', '1234568976' ),
    new EmployeeDetails( '8912','Neils Anderson', 'na@email.com', '1234609876'),
    new EmployeeDetails( '9123', 'Christopher Aquino', 'ca@email.com', '1234568971'),
  ];

// employeeId = [ 6789, 7891, 8912, 9123];
// employeeName = [ 'Kishore Kumar', 'Ravi Teja', 'Neils Anderson', 'Christopher Aquino'];
// employeeEmail = [ 'kk@email.com', 'rt@email.com', 'na@email.com', 'ca@email.com'];
// employeeCont = [ '1234567871', '1234568976', '1234609876', '1234568971'];
  constructor() { }

  ngOnInit() {
  }



}

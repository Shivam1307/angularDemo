import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent  {
  flag= false;
  posts = [];
  constructor(private service: EmployeeService) {
    this.flag = true;
   service.getDetails().subscribe(response => {
        console.log('Within Empolyye service');
        this.posts = response;
        console.log(this.posts);
        this.flag = false;
    });
  }
}

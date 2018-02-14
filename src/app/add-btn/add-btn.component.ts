import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.css']
})
export class AddBtnComponent implements OnInit {
  employees = ['shivam', 'amol', 'arif'];
  constructor() { }

  ngOnInit() {
  }

  addEmployeeName(employee: string) {
    if (employee) {
      this.employees.push(employee);
    }
  }
  searchEmployeeName(employee: string) {
    let flag;
    if (employee) {
      this.employees.forEach(element => {
        console.log(element);
        console.log(employee);
        debugger;
        if (element === employee) {
          flag = 'true';
        }else {
          flag = 'false';
        }
      });
      console.log(flag);
      if (flag === 'false') {
        alert('Not present in the list');
      }
    }
  }
}

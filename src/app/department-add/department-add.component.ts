import { Component, OnInit } from '@angular/core';
import {Department} from '../department'
@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {
  departmentModel: Department;

  constructor() { 

  }

  ngOnInit() {
    this.departmentModel = new Department(1,'');
  }

}

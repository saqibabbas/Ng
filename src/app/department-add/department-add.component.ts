import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Department} from '../department'
@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {
  departmentModel: Department;

  constructor(private router: Router) { 

  }

  ngOnInit() {
    this.departmentModel = new Department(1,'');
  }
  addDepartment(): void {
    this.router.navigateByUrl('/departments');
  }
}

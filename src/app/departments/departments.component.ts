import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments: Department[];
  constructor(private departmentService: DepartmentService) {
    this.getDepartments();
  }

  ngOnInit() {

  }
  ngOnDestroy() {

  }
  getDepartments(): void {
    this.departmentService.getDepartments().subscribe(departments => this.departments = departments);
  }

}

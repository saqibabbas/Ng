import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  private id: number;
  employees: Employee[];
  constructor(private employeeService:EmployeeService, private route: ActivatedRoute) { 
    this.getEmployees();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.id = +params['id'];
  });
  }
  ngOnDestroy() {

}
  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => this.employees=employees) ;
  }

}

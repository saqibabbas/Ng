import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeesComponent} from './employees/employees.component'
import {EmployeeDetailComponent} from './employee-detail/employee-detail.component'
import {DepartmentsComponent} from './departments/departments.component'

const routes: Routes = [
{path:'',component:EmployeesComponent},
{path:'employees',component:EmployeesComponent},
{path:'employee/:id',component:EmployeeDetailComponent},
{path:'departments',component:DepartmentsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

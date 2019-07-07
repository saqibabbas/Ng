import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { SelectedEmployeePipe } from './selected-employee.pipe';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentAddComponent } from './department-add/department-add.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    SelectedEmployeePipe,
    DepartmentsComponent,
    DepartmentAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { SelectedEmployeePipe } from './selected-employee.pipe';
import { DepartmentsComponent } from './departments/departments.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    SelectedEmployeePipe,
    DepartmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

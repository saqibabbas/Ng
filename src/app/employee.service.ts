import { Injectable } from '@angular/core';
import { Employee } from './employee'
import { Department } from './department';
import {Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployees(): Observable<Employee[]> {
    return of([
      { id: 11, name: 'Dr Nice' ,age:30,department:new Department(1,"HR"),experience:'1 year' },
      { id: 12, name: 'Narco',age:40,department:null,experience:'3 year' },
      { id: 13, name: 'Bombasto',age:42,department:new Department(2,"IT"),experience:'10 year' }
    ]);  }
  constructor() { }
}

import { Injectable } from '@angular/core';
import { Employee } from './employee';
import {Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployees(): Observable<Employee[]> {
    return of([
      { id: 11, name: 'Dr Nice' ,age:30,department:'HR',experience:'1 year' },
      { id: 12, name: 'Narco',age:40,department:'IT',experience:'3 year' },
      { id: 13, name: 'Bombasto',age:42,department:'Admin',experience:'10 year' }
    ]);  }
  constructor() { }
}

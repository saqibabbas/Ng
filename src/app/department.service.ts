import { Injectable } from '@angular/core';
import { Department } from './department';
import {Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  getDepartments(): Observable<Department[]> {
    return of([
      { id: 1, name: 'HR' },
      { id: 2, name: 'IT' },
      { id: 3, name: 'Admin' }
    ]);  }
  constructor() { }
}

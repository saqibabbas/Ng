import { Injectable } from '@angular/core';
import { Employee } from './employee'
import { Department } from './department';
import {Observable,of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private empUrl = 'http://www.mocky.io/v2/5d23285d2e00009262c3eeed';  // URL to web api
  constructor( private http: HttpClient) { 

  }
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.empUrl)
  }
}

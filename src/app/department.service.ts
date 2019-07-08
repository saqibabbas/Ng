import { Injectable } from '@angular/core';
import { Department } from './department';
import {Observable,of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private depUrl = 'https://www.mocky.io/v2/5d2326b82e00008470c3eedf';  // URL to web api
  constructor( private http: HttpClient) { 

  }
  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.depUrl)
  }
}

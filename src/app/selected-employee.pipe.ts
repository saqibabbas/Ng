import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from './employee'

@Pipe({
  name: 'selectedEmployee'
})
export class SelectedEmployeePipe implements PipeTransform {

  transform(employees: Employee[], id: number): any {
    return employees.filter(x => x.id === id);
  }

}

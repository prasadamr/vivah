import { Component, OnInit } from "@angular/core";
import {Employee} from "./employee";
import {EmployeeService} from "./employee.service";

@Component({

  moduleId: module.id,
  selector: 'show-employees',
  templateUrl: 'show-employees.component.html',
  styleUrls: ['show-employees.component.css']
})

export class ShowEmployeesComponent implements OnInit{

    selectedDesignation: number = 0;
    selectedEmployee: Employee = {IdEmployee:0, EmployeeCode: '', EmployeeName: '', Salary: 0, PhoneNumber: '', Designation: 0};


  /*  allEmployeesList: Employee[] = [{EmployeeCode: 'Emp_001', EmployeeName: 'Jagadish', Salary: 9000, PhoneNumber: '9449787850', Designation: 1},
                                  {EmployeeCode: 'Emp_002', EmployeeName: 'Ramesh', Salary: 11000, PhoneNumber: '9449787850', Designation: 2},
                                  {EmployeeCode: 'Emp_003', EmployeeName: 'Suresh', Salary: 8000, PhoneNumber: '9449787850', Designation: 3},
                                  {EmployeeCode: 'Emp_004', EmployeeName: 'Prasad', Salary: 12000, PhoneNumber: '9449787850', Designation: 1}];

*/

   allEmployeesList:Employee[];

   constructor(private _empService:EmployeeService){

   }

    fileterdEmployeesList: Employee[];

    ngOnInit(): void{

         this._empService.getEmployee().subscribe(response => this.allEmployeesList=response);
         this._empService.getEmployee().subscribe(response => this.fileterdEmployeesList=response);

  //      this.allEmployeesList = this._empService.getEmployee();
    //    this.fileterdEmployeesList = this.allEmployeesList;
    }

    onChange(): void{

        if(this.selectedDesignation > 0)
          this.fileterdEmployeesList = this.allEmployeesList.filter((employee)=> employee.Designation == this.selectedDesignation);
        else
          this.fileterdEmployeesList = this.allEmployeesList;
    }

    onSelect(employee: Employee): void{

        //Assign the Selected Employee Object to the Class Propery
        this.selectedEmployee = employee;
    }
}

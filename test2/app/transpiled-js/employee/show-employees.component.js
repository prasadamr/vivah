"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var ShowEmployeesComponent = (function () {
    function ShowEmployeesComponent(_empService) {
        this._empService = _empService;
        this.selectedDesignation = 0;
        this.selectedEmployee = { IdEmployee: 0, EmployeeCode: '', EmployeeName: '', Salary: 0, PhoneNumber: '', Designation: 0 };
    }
    ShowEmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._empService.getEmployee().subscribe(function (response) { return _this.allEmployeesList = response; });
        this._empService.getEmployee().subscribe(function (response) { return _this.fileterdEmployeesList = response; });
        //      this.allEmployeesList = this._empService.getEmployee();
        //    this.fileterdEmployeesList = this.allEmployeesList;
    };
    ShowEmployeesComponent.prototype.onChange = function () {
        var _this = this;
        if (this.selectedDesignation > 0)
            this.fileterdEmployeesList = this.allEmployeesList.filter(function (employee) { return employee.Designation == _this.selectedDesignation; });
        else
            this.fileterdEmployeesList = this.allEmployeesList;
    };
    ShowEmployeesComponent.prototype.onSelect = function (employee) {
        //Assign the Selected Employee Object to the Class Propery
        this.selectedEmployee = employee;
    };
    return ShowEmployeesComponent;
}());
ShowEmployeesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'show-employees',
        templateUrl: 'show-employees.component.html',
        styleUrls: ['show-employees.component.css']
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], ShowEmployeesComponent);
exports.ShowEmployeesComponent = ShowEmployeesComponent;
//# sourceMappingURL=show-employees.component.js.map
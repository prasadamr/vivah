"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var http_1 = require("@angular/http");
//Components Registered
var app_component_1 = require("./app.component");
var header_component_1 = require("./header.component");
var footer_component_1 = require("./footer.component");
var home_component_1 = require("./home.component");
var left_navigation_component_1 = require("./left-navigation.component");
var about_us_component_1 = require("./about-us.component");
var contact_us_component_1 = require("./contact-us.component");
var show_employees_component_1 = require("./employee/show-employees.component");
//Services
var employee_service_1 = require("./employee/employee.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            home_component_1.HomeComponent,
            left_navigation_component_1.LeftNavigationComponent,
            about_us_component_1.AboutUsComponent,
            contact_us_component_1.ContactUsComponent,
            show_employees_component_1.ShowEmployeesComponent
        ],
        providers: [
            employee_service_1.EmployeeService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
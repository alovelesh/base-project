webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".wrapper{\n\tposition: relative;\n\theight: 100vh;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n -->\n<!-- <div class=\"wrapper\">\n  <app-header></app-header>\n  <app-side-navbar></app-side-navbar>\n  <app-main-section></app-main-section>\n</div> -->\n<div class=\"wrapper\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_tree_component__ = __webpack_require__("./node_modules/angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_header_header_component__ = __webpack_require__("./src/app/home/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_side_navbar_side_navbar_component__ = __webpack_require__("./src/app/home/side-navbar/side-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_main_section_main_section_component__ = __webpack_require__("./src/app/home/main-section/main-section-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_main_section_welcome_welcome_component__ = __webpack_require__("./src/app/home/main-section/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__task_management_index__ = __webpack_require__("./src/app/task-management/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reusable_components_list_list_component__ = __webpack_require__("./src/app/reusable_components/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__reusable_components_angular_material_dialog_ng_mat_dialog_component__ = __webpack_require__("./src/app/reusable_components/angular-material-dialog/ng-mat-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__reusable_modules_dynamic_form_dynamic_form_module__ = __webpack_require__("./src/app/reusable_modules/dynamic-form/dynamic-form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__http_interceptors_index__ = __webpack_require__("./src/app/http-interceptors/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__service_common_service__ = __webpack_require__("./src/app/service/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__service_reusable_functions_service__ = __webpack_require__("./src/app/service/reusable_functions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__guards_login_resolve__ = __webpack_require__("./src/app/guards/login.resolve.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













/*Demo*/

// import { TaskManagementComponent } from './task-management/task-management.component';
/*Resuable Components*/






//import { RequestCache, RequestCacheWithMap } from './service/request-cache.service';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_side_navbar_side_navbar_component__["a" /* SideNavbar */],
                __WEBPACK_IMPORTED_MODULE_9__home_main_section_main_section_component__["a" /* MainSection */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_main_section_welcome_welcome_component__["a" /* WelcomeComponent */]
            ].concat(__WEBPACK_IMPORTED_MODULE_13__task_management_index__["a" /* TASK_MANAGEMENT */], [
                __WEBPACK_IMPORTED_MODULE_14__reusable_components_list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_15__reusable_components_angular_material_dialog_ng_mat_dialog_component__["a" /* NgMatDialogComponent */]
            ]),
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_17__app_routing__["a" /* AppRouting */],
                __WEBPACK_IMPORTED_MODULE_4__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_tree_component__["c" /* TreeModule */],
                __WEBPACK_IMPORTED_MODULE_16__reusable_modules_dynamic_form_dynamic_form_module__["a" /* DynamicFormModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__http_interceptors_index__["a" /* httpInterceptorProviders */],
                __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_20__service_common_service__["a" /* CommonService */],
                __WEBPACK_IMPORTED_MODULE_21__service_reusable_functions_service__["a" /* ReusableFunctionsService */],
                __WEBPACK_IMPORTED_MODULE_22__guards_login_resolve__["a" /* LoginResolver */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_15__reusable_components_angular_material_dialog_ng_mat_dialog_component__["a" /* NgMatDialogComponent */], __WEBPACK_IMPORTED_MODULE_13__task_management_index__["b" /* TASK_MANAGEMENT_OBJ */].TaskManagementFormComponent]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_login_resolve__ = __webpack_require__("./src/app/guards/login.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_main_section_main_section_component__ = __webpack_require__("./src/app/home/main-section/main-section-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_main_section_welcome_welcome_component__ = __webpack_require__("./src/app/home/main-section/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__task_management_index__ = __webpack_require__("./src/app/task-management/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/*Demo*/

var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_7__home_main_section_welcome_welcome_component__["a" /* WelcomeComponent */] },
            { path: 'main', component: __WEBPACK_IMPORTED_MODULE_6__home_main_section_main_section_component__["a" /* MainSection */] },
            { path: 'tasks', component: __WEBPACK_IMPORTED_MODULE_8__task_management_index__["b" /* TASK_MANAGEMENT_OBJ */].TaskManagementComponent }
        ] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */], resolve: { loginResolver: __WEBPACK_IMPORTED_MODULE_3__guards_login_resolve__["a" /* LoginResolver */] } },
    { path: '**', redirectTo: '' }
];
var AppRouting = /** @class */ (function () {
    function AppRouting() {
    }
    AppRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRouting);
    return AppRouting;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_common_service__ = __webpack_require__("./src/app/service/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, http, commonService) {
        this.router = router;
        this.http = http;
        this.commonService = commonService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage['auth-token']) {
            // logged in so return true
            if (this.commonService.appMenus.length)
                return true;
            else {
                this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                return false;
            }
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__service_common_service__["a" /* CommonService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/login.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_common_service__ = __webpack_require__("./src/app/service/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginResolver = /** @class */ (function () {
    function LoginResolver(commonService, router) {
        this.commonService = commonService;
        this.router = router;
        // code...
    }
    LoginResolver.prototype.resolve = function (route, state) {
        if (!localStorage['auth-token'])
            return true;
        return this.commonService.getLoginData('/api/usermanagement/loginByToken', { token: localStorage['auth-token'] }, route.queryParams['returnUrl']);
        // return new Promise((resolve)=>{
        //        this.commonService.getLoginData('/api/usermanagement/loginByToken',{token : localStorage['auth-token']}).then(()=>{
        //            resolve(false);
        // 		this.router.navigate(['']);
        //          },()=> {
        //             resolve(true);
        //        })
        // })
    };
    LoginResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], LoginResolver);
    return LoginResolver;
}());



/***/ }),

/***/ "./src/app/home/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".main-header {\n    position: relative;\n    max-height: 100px;\n    z-index:2;\n}\n.main-header .logo {\n    display: block;\n    float: left;\n    height: 50px;\n    font-size: 20px;\n    line-height: 50px;\n    text-align: center;\n    width: 230px;\n    padding: 0 15px;\n    font-weight: 300;\n    overflow: hidden;\n}\n.main-header .navbigation {\n    margin-bottom: 0;\n    margin-left: 230px;\n    border: none;\n    min-height: 50px;\n    border-radius: 0;\n}\n.main-header .sidebar-toggle {\n    float: left;\n    background-color: transparent;\n    background-image: none;\n    padding: 15px 15px;\n    font-family: fontAwesome;\n}\n.main-header .sidebar-toggle:before {\n    content: \"\\f0c9\";\n}\n.sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    border: 0;\n}\n.main-header .sidebar-toggle .icon-bar {\n    display: none;\n}\n.main-header .logo {\n    background-color: #367fa9;\n    color: #fff;\n    border-bottom: 0 solid transparent;\n}\n.main-header .navbigation {\n    background-color: #3c8dbc;\n}\n.main-sidebar{\n    background-color: #222d32;\n}\n.main-header .navbigation .sidebar-toggle {\n    color: #fff;\n}\n.profile {\n    float: right; \n    margin-right: 15px;\n    position: relative;\n}\na.profilelink {\n    position: relative;\n    display: block;\n    padding: 13px 15px;\n    color: #fff;\n}\na.profilelink:hover{\n    background: #367fa9;\n}\n.user-name{\n    display: inline-block;\n    position: relative;\n    top: -3px;\n    font-size: 14px;\n}\n.user-image {\n    float: left;\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    margin-right: 10px;\n    margin-top: -2px;\n}\n.dropdown-menu {\n    margin-top: 0;\n    border-radius: 0;\n    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n    background: rgba(255, 255, 255, 0.96);\n    border: 1px solid #dddddd;\n    padding: 0;\n    min-width: 120px;\n    max-width: 300px;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    min-width: 160px;\n    padding: 5px 0;\n    margin: 0;\n    font-size: 14px;\n    list-style: none;\n}\n.dropdown-menu > li {\n    margin: 0;\n}\n.dropdown-menu > li > a {\n    padding: 10px 5px 10px 5px;\n    border-bottom: 1px solid #e2e2e2;\n    color: #575757;\n    font-size: 12px;\n    margin-left: 10px;\n    margin-right: 10px;\n    display: block;\n    line-height: 1.428571429;\n}\n.dropdown-menu > li > a:hover{\n    background: #f6f6f6;\n}\n.dropdown-menu > li:last-child > a{\n    border-bottom: 0;\n}\n.dropdown-menu > li > a i {\n    margin-right: 10px;\n    font-size: 18px;\n    vertical-align: middle;\n}"

/***/ }),

/***/ "./src/app/home/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n  <!-- <a routerLink=\"/\" class=\"logo\">New Dashboard</a> -->\n  <a routerLink=\"/\" class=\"logo\"><mat-icon>home</mat-icon></a>\n  <nav class=\"navbigation navbar-static-top\">\n    <!-- <a href=\"javascript:void(0)\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\" (click)='menuToggel()'>\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n    </a> -->\n    <div class=\"profile\">\n        <a class=\"profilelink\" (click)=\"open = !open\">\n            <img src=\"./assets/images/user.jpg\" class=\"user-image\">\n            <span class=\"user-name\">Alexander Pierce</span>\n        </a>\n        <ul class=\"dropdown-menu\" [ngClass]=\"open ? 'd-block' : 'd-none'\" >\n            <li>\n                <a href=\"#\">\n                    <i class=\"fa fa-user\"></i> My Account\n                </a>\n            </li>\n            <li>\n                <a href=\"#\">\n                    <i class=\"fa fa-gear\"></i> Account Settings\n                </a>\n            </li>\n            <li>\n                <a routerLink=\"/login\" (click)=\"logout()\">\n                    <i class=\"fa fa-sign-out\"></i>Logout\n                </a>\n            </li>\n        </ul>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/home/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__("./src/app/service/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(commonService) {
        this.commonService = commonService;
    }
    HeaderComponent.prototype.logout = function () {
        localStorage.removeItem('auth-token');
        this.commonService.appMenus = [];
        // clear service of controllers as well.
        // deregister routes too
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/home/header/header.component.html"),
            styles: [__webpack_require__("./src/app/home/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".main-section{\n\tmargin-left: 230px;\n    -webkit-transition: margin .3s ease-in-out,-webkit-transform .3s ease-in-out;\n    transition: margin .3s ease-in-out,-webkit-transform .3s ease-in-out;\n    transition: transform .3s ease-in-out,margin .3s ease-in-out;\n    transition: transform .3s ease-in-out,margin .3s ease-in-out,-webkit-transform .3s ease-in-out;\n\tbackground-color: #ecf0f5;\n    height: calc(100vh - 50px);\n    overflow-y: auto;\n}\n.collapse-menu.main-section{\n\tmargin-left: 35px; \n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-side-navbar></app-side-navbar>\n<section class=\"main-section\" [ngClass]=\"{'collapse-menu':!commonService.isSideBarExpand}\">\n\t<router-outlet></router-outlet>\n</section>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__("./src/app/service/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(commonService) {
        this.commonService = commonService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/main-section/main-section-component.css":
/***/ (function(module, exports) {

module.exports = "\n.small.main-section{\n\tmargin-left: 50px;\n}\n\n.content {\n    padding: 15px;\n}\n\n.content-header {\n    position: relative;\n    padding: 15px 15px 0 15px;\n}\n\n.content-header>h1 {\n    margin: 0;\n    font-size: 24px;\n}\n\n.content-header>h1>small {\n    font-size: 15px;\n    display: inline-block;\n    padding-left: 4px;\n    font-weight: 300;\n}\n\n.content-header>.breadcrumb {\n    float: right;\n    background: transparent;\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 12px;\n    padding: 7px 5px;\n    position: absolute;\n    top: 15px;\n    right: 10px;\n    border-radius: 2px;\n    list-style: none;\n}\n\n.breadcrumb>li {\n    display: inline-block;\n}\n\n.content-header>.breadcrumb>li>a {\n    color: #444;\n    text-decoration: none;\n    display: inline-block;\n}\n\n.breadcrumb>.active {\n    color: #777;\n}\n\n.content-header>.breadcrumb>li+li:before {\n    content: '>\\00a0';\n}\n\n.breadcrumb>li+li:before {\n    padding: 0 5px;\n    color: #ccc;\n    content: \"/\\00a0\";\n}\n\n.content-header>.breadcrumb>li>a>.fa {\n    margin-right: 5px;\n}\n\n.box {\n    position: relative;\n    border-radius: 3px;\n    background: #ffffff;\n    border-top: 3px solid #d2d6de;\n    margin-bottom: 20px;\n    width: 100%;\n    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.1);\n            box-shadow: 0 1px 1px rgba(0,0,0,0.1);\n}\n\n.box-header {\n    color: #444;\n    display: block;\n    padding: 10px;\n    position: relative;\n}\n\n.box-header:before, .box-body:before, .box-footer:before, .box-header:after, .box-body:after, .box-footer:after {\n    content: \" \";\n    display: table;\n}\n\n.box-header .box-title {\n    display: inline-block;\n    font-size: 18px;\n    margin: 0;\n    line-height: 1;\n}\n\n.box-body {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px;\n    padding: 10px;\n}\n\n.margin-top32{\n    margin-top: 32px;\n}"

/***/ }),

/***/ "./src/app/home/main-section/main-section-component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Name: {{data.name}}\n<input type=\"text\" [(ngModel)]=\"data.name\"> -->\n<section class=\"content-header\">\n  <h1> Data Tables </h1>\n  <ol class=\"breadcrumb\">\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n    <li><a href=\"#\">Tables</a></li>\n    <li class=\"active\">Data tables</li>\n  </ol>\n</section>\n<section class=\"content\">\n  <div class=\"box\">\n    <div class=\"box-body\">\n      <div class=\"row\">\n        <div class=\"col-4\">\n          <form>\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Email address</label>\n              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Enter email\">\n              <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Password</label>\n              <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n            </div>\n            <div class=\"form-check\">\n              <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n              <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n          </form>\n        </div>\n        <div class=\"col-4\">\n          <form>\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail2\">Email address</label>\n              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail2\" placeholder=\"Enter email\">\n              <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword2\">Password</label>\n              <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword2\" placeholder=\"Password\">\n            </div>\n            <div class=\"form-check\">\n              <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck2\">\n              <label class=\"form-check-label\" for=\"exampleCheck2\">Check me out</label>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n          </form>\n        </div>\n        <div class=\"col-4\">\n          <form>\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail3\">Email address</label>\n              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail3\" placeholder=\"Enter email\">\n              <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword3\">Password</label>\n              <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword3\" placeholder=\"Password\">\n            </div>\n            <div class=\"form-check\">\n              <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck3\">\n              <label class=\"form-check-label\" for=\"exampleCheck3\">Check me out</label>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n          </form>\n        </div>\n       \n      </div>\n    </div>\n  </div>\n  <div class=\"box\">\n    <div class=\"box-body\">\n\n<div class=\"row\">\n      <div class=\"col-4\">\n            <div class=\"form-group\">\n              <label >Search</label>\n              <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\">\n            </div>\n      </div>\n      <div class=\"col-4\">\n            <div class=\"form-group\">\n              <label >Search</label>\n              <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\">\n            </div>\n      </div>\n      <div class=\"col-4\">\n          <button type=\"submit\" class=\"btn btn-primary margin-top32\">Submit</button>\n      </div>\n    </div>\n      <table id=\"example2\" class=\"table table-bordered table-hover dataTable\">\n        <thead>\n          <tr>\n            <th>Rendering engine</th>\n            <th>Browser</th>\n            <th>Platform(s)</th>\n            <th>Engine version</th>\n            <th>CSS grade</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>Misc</td>\n            <td>NetFront 3.4</td>\n            <td>Embedded devices</td>\n            <td>-</td>\n            <td>A</td>\n          </tr>\n          <tr>\n            <td>Misc</td>\n            <td>Dillo 0.8</td>\n            <td>Embedded devices</td>\n            <td>-</td>\n            <td>X</td>\n          </tr>\n          <tr>\n            <td>Misc</td>\n            <td>Links</td>\n            <td>Text only</td>\n            <td>-</td>\n            <td>X</td>\n          </tr>\n          <tr>\n            <td>Misc</td>\n            <td>Lynx</td>\n            <td>Text only</td>\n            <td>-</td>\n            <td>X</td>\n          </tr>\n          <tr>\n            <td>Misc</td>\n            <td>IE Mobile</td>\n            <td>Windows Mobile 6</td>\n            <td>-</td>\n            <td>C</td>\n          </tr>\n          <tr>\n            <td>Misc</td>\n            <td>PSP browser</td>\n            <td>PSP</td>\n            <td>-</td>\n            <td>C</td>\n          </tr>\n          <tr>\n            <td>Other browsers</td>\n            <td>All others</td>\n            <td>-</td>\n            <td>-</td>\n            <td>U</td>\n          </tr>\n        </tbody>\n        <tfoot>\n          <tr>\n            <th>Rendering engine</th>\n            <th>Browser</th>\n            <th>Platform(s)</th>\n            <th>Engine version</th>\n            <th>CSS grade</th>\n          </tr>\n        </tfoot>\n      </table>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/home/main-section/main-section-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainSection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainSection = /** @class */ (function () {
    function MainSection() {
    }
    MainSection = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-section',
            template: __webpack_require__("./src/app/home/main-section/main-section-component.html"),
            styles: [__webpack_require__("./src/app/home/main-section/main-section-component.css")]
        })
    ], MainSection);
    return MainSection;
}());



/***/ }),

/***/ "./src/app/home/main-section/welcome/welcome.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/main-section/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<app-list [config]=\"listConfig\" [dataSource]=\"dataSource\" [totalCount]=\"totalCount\" (initialized)=\"onInitializeList($event)\" (onSelect)=\"onSelect($event)\"></app-list>\n<!-- <hr> -->\n<!-- <mat-card *ngFor=\"let course of courses\" class=\"course-card mat-elevation-z10\">\n\n    <mat-card-header>\n\n        <mat-card-title>{{course.description}}</mat-card-title>\n\n    </mat-card-header>\n\n    <img mat-card-image [src]=\"course.iconUrl\">\n\n    <mat-card-content>\n        <p>{{course.longDescription}}</p>\n    </mat-card-content>\n\n    <mat-card-actions class=\"course-actions\">\n\n        <button mat-button class=\"mat-raised-button mat-primary\" [routerLink]=\"['/courses', course.id]\">\n            VIEW COURSE\n        </button>\n\n        <button mat-button class=\"mat-raised-button mat-accent\"\n                (click)=\"editCourse(course)\">\n            EDIT\n        </button>\n\n    </mat-card-actions>\n\n</mat-card>\n -->\n"

/***/ }),

/***/ "./src/app/home/main-section/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_reusable_functions_service__ = __webpack_require__("./src/app/service/reusable_functions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(dialog, http, reusableFunctionsService) {
        this.dialog = dialog;
        this.http = http;
        this.reusableFunctionsService = reusableFunctionsService;
        this.totalCount = 50;
        this.dataSource = [];
        this.listConfig = {
            // columns : [
            //   {field : 'id', notToDisplay : true },
            //   {field : 'component' },
            //   {field : 'type'},
            //   {field : 'description'},
            //   {field : 'status' }
            // ],
            columns: [
                { field: "id" },
                { field: "Atomic Weight" },
                { field: "Name" },
                { field: "Sym." },
                { field: "M.P. (°C)" },
                { field: "B.P. (°C)" },
                { field: "Density (g/cm3)" },
                { field: "Earth crust (%)" },
                { field: "Discovery (Year)" },
                { field: "Group" },
                { field: "Electron configuration" },
                { field: "Ionization energy (eV)" },
            ],
            sortable: true,
            selectable: true,
            filterable: true,
            pageable: {},
            serverInteraction: true,
            footer: {
                row: {
                    "id": "1",
                    "Atomic Weight": "0.000",
                    "Name": "XXXXXXXX",
                    "Sym.": "X",
                    "M.P. (°C)": "-000",
                    "B.P. (°C)": "-000",
                    "Density (g/cm3)": "0.00",
                    "Earth crust (%)": "0.00",
                    "Discovery (Year)": "0000",
                    "Group": "0",
                    "Electron configuration": "0x0",
                    "Ionization energy (eV)": "00.00"
                }
            },
            showLoadingProgress: true,
            showPopupOnDelete: true,
            actions: {
                title: 'Actions',
                edit: {},
                delete: {},
            },
            allowAdd: {}
        };
    }
    WelcomeComponent.prototype.onInitializeList = function (event) {
        var _this = this;
        switch (event.eventName) {
            case "initialized":
                break;
            case "filterUpdate": {
                var queryParams_1 = event.data;
                //this.http.get('/assets/others/bug-feature-update.json').subscribe((data : any)=>{
                this.http.get('/assets/others/periodic-table.json').subscribe(function (data) {
                    if (queryParams_1.searchValue)
                        data = data.filter(function (obj) {
                            /*return obj.component.toLowerCase().search(queryParams.searchValue.toLowerCase()) >= 0 ||
                            obj.description.toLowerCase().search(queryParams.searchValue.toLowerCase()) >= 0 ||
                            obj.type.toLowerCase().search(queryParams.searchValue.toLowerCase()) >= 0 ||
                            obj.status.toLowerCase().search(queryParams.searchValue.toLowerCase()) >= 0;*/
                            return obj.Name.toLowerCase().search(queryParams_1.searchValue.toLowerCase()) >= 0;
                        });
                    if (queryParams_1.sort && queryParams_1.sort.dir)
                        data = _this.reusableFunctionsService.sortArray(data, queryParams_1.sort.field, queryParams_1.sort.dir);
                    setTimeout(function () {
                        _this.totalCount = data.length;
                        queryParams_1.limit && (_this.dataSource = data.slice(queryParams_1.offset, queryParams_1.offset + queryParams_1.limit));
                    }, 1000);
                }, function (err) {
                    console.log({ status: 'KO', data: err });
                });
                break;
            }
        }
    };
    WelcomeComponent.prototype.onSelect = function (row) {
        console.log('onSelect', row);
    };
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.http.get('/assets/others/bug-feature-update.json').subscribe((data : {}[])=>{
        this.http.get('/assets/others/periodic-table.json').subscribe(function (data) {
            _this.dataSource = _this.listConfig.serverInteraction ? data.slice(0, 10) : data;
            _this.totalCount = data.length;
            //this.listConfig.isFooterRequired.footer.id = 10000;
        }, function (err) {
            console.log({ status: 'KO', data: err });
        });
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("./src/app/home/main-section/welcome/welcome.component.html"),
            styles: [__webpack_require__("./src/app/home/main-section/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__service_reusable_functions_service__["a" /* ReusableFunctionsService */]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/home/side-navbar/side-navbar.component.css":
/***/ (function(module, exports) {

module.exports = "\n/* For Larg Desktop */\n.side-navbar {\n    position: absolute;\n    top: 0;\n    left: 0;\n    padding-top: 50px;\n    min-height: 100%;\n    width: 230px;\n    z-index: 1;\n    background-color: #377ea9;\n    -webkit-transition: width .3s ease-in-out;\n    transition: width .3s ease-in-out;\n}\n.collapse-menu.side-navbar{\n    width: 35px; \n}\n.menu-holder {\n    height: calc(100vh - 118px);\n    overflow-y: auto;    \n}\n.menu-toggle-icon {\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    background-color: #87bcde;\n    text-align: center;\n    padding-top: 7px;\n}\n/*.sidebar-menu{\n    white-space: nowrap;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    margin-top: 10px;\n}\n.sidebar-menu a{\n\tfont-size: 14px;\n    color: #b8c7ce;\n}\n.sidebar-menu > li {\n    position: relative;\n}\n.sidebar-menu > li > a {\n    padding: 0px 5px 0px 15px;\n    display: block;\n    position: relative;\n}\n.sidebar-menu > li a .fa{\n    width: 20px;\n}\n.sidebar-menu > li > a {\n    border-left: 3px solid transparent;\n}\n\n.sidebar-menu>li:hover > a{\n    background: #1e282c;\n    color: #fff;\n}\n.sidebar-menu >li.active > a {\n    border-left-color: #3c8dbc;\n    color: #fff;\n}\n\n.sidebar-menu > li > a span{\n    display: inline-block;\n    padding: 12px 5px 12px 0;\n    \n}\n\n.sidebar-menu > li:not(.treeview) > a >span {\n    border-bottom-right-radius: 4px;\n}\n.sidebar-menu > li > a span.pull-right-container {\n    float: right;\n    margin-top: 4px;\n}\n.sidebar-menu li > a > .pull-right-container > .fa-angle-left {\n    width: auto;\n    height: auto;\n    padding: 0;\n    margin-right: 10px;\n}\n.treeview-menu {\n    display: none;\n    background: #2c3b41;\n    margin: 0;\n    padding-left: 5px;\n}\n.sidebar-menu >li.active .treeview-menu {\n    display: block;\n}\n.treeview-menu > li > a {\n    padding: 5px 5px 8px 15px;\n    display: block;\n}\n.treeview-menu li:hover a{\n    color: #fff;\n}\n.sidebar-menu > li:hover > a .fa-angle-left{\n    transform: rotate(-90deg);\n}*/\n/* For Small Desktop */\n/*.small .sidebar-menu >li.active .treeview-menu {\n    display: none;\n}\n.small.side-navbar {\n    position: absolute;\n    top: 0;\n    left: 0;\n    padding-top: 50px;\n    min-height: 100%;\n    width: 50px;\n    z-index: 1;\n    background-color: #222d32;\n    \n}\n.small .sidebar-menu > li > a {\n    padding: 12px 5px 12px 15px;\n    display: block;\n    position: relative;\n}\n.small .sidebar-menu > li > a span{\n    display: none;\n}\n\n.small .sidebar-menu > li:hover > a span{\n    display: block;\n    position: absolute;\n    width: 180px;\n    left: 50px;\n    border-top-right-radius: 4px;\n    top: 4px;\n    margin-left: -3px;\n    padding: 12px 5px 12px 20px;\n    background-color: #1e282c;\n}\n.small .sidebar-menu > li:hover > a span.pull-right-container {\n    position: relative;\n    float: right;\n    width: auto;\n    left: 180px;\n    top: -30px;\n    z-index: 3;\n}\n.small .treeview-menu {\n    display: none;\n    list-style: none;\n    padding: 5px 0;\n    margin: 0;\n    padding-left: 5px;\n    border-bottom-right-radius: 4px;\n    background: #2c3b41;\n}\n.small .sidebar-menu>li:hover .treeview-menu{\n    display: block;\n    position: absolute;\n    width: 180px;\n    left: 50px;\n} */\n\n\n"

/***/ }),

/***/ "./src/app/home/side-navbar/side-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"side-navbar\" [ngClass]=\"{'collapse-menu':!commonService.isSideBarExpand}\">\n    <input style=\"width: 100%;\" [hidden]=\"!commonService.isSideBarExpand\" id=\"filter\" #filter (keyup)=\"tree.treeModel.filterNodes(filter.value)\" placeholder=\"Search menus\"/>\n    <div class=\"menu-holder\">\n        <tree-root [nodes]=\"nodes\" [focused]=\"true\" [(state)]=\"state\" #tree [options]=\"options\" (initialized)=\"treeRootEvent($event)\">\n          <ng-template #treeNodeTemplate let-node let-index=\"index\">\n            <span [hidden]=\"!commonService.isSideBarExpand\">\n                <mat-icon>{{node.data.iconName}}</mat-icon>\n                {{node.data.name}}\n            </span>\n            <div [hidden]=\"commonService.isSideBarExpand\">\n                <span matTooltip=\"{{node.data.name}}\" matTooltipPosition=\"after\"><mat-icon>{{node.data.iconName}}</mat-icon></span>    \n            </div>\n          </ng-template>\n        </tree-root>\n    </div>\n    <div class=\"menu-toggle-icon\">\n        <a href=\"javascript:void(0)\" \n        (click)=\"commonService.isSideBarExpand=!commonService.isSideBarExpand;menuToggle()\" class=\"material-icons\">{{commonService.isSideBarExpand ? 'keyboard_arrow_left' : 'keyboard_arrow_right'}}</a>\n    </div>\n</aside>"

/***/ }),

/***/ "./src/app/home/side-navbar/side-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_tree_component__ = __webpack_require__("./node_modules/angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_common_service__ = __webpack_require__("./src/app/service/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SideNavbar = /** @class */ (function () {
    function SideNavbar(commonService, router) {
        var _this = this;
        this.commonService = commonService;
        this.router = router;
        this.treeInitializeFlag = false;
        this.currentRoute = '';
        this.needToCollapseAfterNavigate = false;
        // Provide Menu Array to tree component
        this.nodes = this.commonService.appMenus;
        // Provide options Object to tree component
        this.options = {
            //    displayField: 'nodeName',
            //    isExpandedField: 'expanded',
            idField: 'controller_id',
            //    hasChildrenField: 'nodes',
            //    nodeHeight: 1,
            //    allowDrag: (node) => {
            //      return true;
            //    },
            //    allowDrop: (node) => {
            //      return true;
            //    },
            //    useVirtualScroll: true,
            //    animateExpand: true,
            //    scrollOnActivate: true,
            //    animateSpeed: 30,
            //    animateAcceleration: 1.2,
            actionMapping: {
                mouse: {
                    // contextMenu: (tree, node, $event) => {
                    //   $event.preventDefault();
                    //   alert(`context menu for ${node.data.name}`);
                    // },
                    // dblClick: (tree, node, $event) => {
                    //   if (node.hasChildren) {
                    //     TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
                    //   }
                    // },
                    // dblClick: (tree, node, $event) => {
                    //   if (node.hasChildren) {
                    //     TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
                    //   }
                    // },
                    click: function (tree, node, $event) {
                        //tree.collapseAll();
                        //$event.preventDefault();
                        if (node.hasChildren) {
                            __WEBPACK_IMPORTED_MODULE_2_angular_tree_component__["b" /* TREE_ACTIONS */].TOGGLE_EXPANDED(tree, node, $event);
                            if (!_this.commonService.isSideBarExpand) {
                                _this.commonService.isSideBarExpand = true;
                                _this.needToCollapseAfterNavigate = true;
                            }
                        }
                        else {
                            __WEBPACK_IMPORTED_MODULE_2_angular_tree_component__["b" /* TREE_ACTIONS */].ACTIVATE(tree, node, $event);
                            _this.router.navigate([node.data.route]);
                            if (_this.needToCollapseAfterNavigate) {
                                _this.commonService.isSideBarExpand = false;
                                _this.menuToggle();
                            }
                        }
                        // $event.shiftKey
                        //   ? TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(tree, node, $event)
                        //   : TREE_ACTIONS.TOGGLE_ACTIVE(tree, node, $event);
                    }
                },
                keys: (_a = {},
                    _a[__WEBPACK_IMPORTED_MODULE_2_angular_tree_component__["a" /* KEYS */].ENTER] = function (tree, node, $event) {
                        if (!node.hasChildren)
                            _this.router.navigate([node.data.route]);
                        //alert(`This is ${node.data.name}`)
                    },
                    _a)
            }
        };
        // Call on route change
        this.routerSubscriber = router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                // Save current route in currentRoute var
                _this.currentRoute = event.urlAfterRedirects.replace('/', '');
                _this.treeInitializeFlag && _this.collapseAndSetActiveNode();
            }
        });
        var _a;
    }
    // Unsubscribe routerSubscriber
    SideNavbar.prototype.ngOnDestroy = function () {
        this.routerSubscriber.unsubscribe();
    };
    // Collapse All node and set active node
    SideNavbar.prototype.collapseAndSetActiveNode = function () {
        var _this = this;
        this.treeRef.treeModel.collapseAll();
        setTimeout(function () {
            // this.treeRef.treeModel.getNodeById(node.data.id);
            _this.commonService.isSideBarExpand && _this.treeRef.treeModel.getNodeBy(function (node) { return node.data.route === _this.currentRoute; }).setActiveAndVisible();
        }, 0);
    };
    // On collapse Menu collapse all node otherwise 
    SideNavbar.prototype.menuToggle = function () {
        this.needToCollapseAfterNavigate = false;
        localStorage.isSideBarExpand = this.commonService.isSideBarExpand;
        this.commonService.isSideBarExpand ? this.collapseAndSetActiveNode() : this.treeRef.treeModel.collapseAll();
        // userPre
    };
    Object.defineProperty(SideNavbar.prototype, "state", {
        // Get State of tree
        get: function () {
            var temp = localStorage.treeState;
            if (temp) {
                temp = JSON.parse(temp);
                this.commonService.isSideBarExpand || (temp.expandedNodeIds = {});
            }
            return temp;
        },
        // Set State of tree
        set: function (state) {
            localStorage.treeState = JSON.stringify(state);
        },
        enumerable: true,
        configurable: true
    });
    // Call On initialization of tree component
    SideNavbar.prototype.treeRootEvent = function (data) {
        switch (data.eventName) {
            case "initialized": {
                this.treeInitializeFlag = true;
                var selectedNode = data.treeModel.getActiveNode();
                if (selectedNode)
                    this.router.navigate([selectedNode.data.route]);
                else if (this.currentRoute)
                    this.collapseAndSetActiveNode();
                break;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('tree'),
        __metadata("design:type", Object)
    ], SideNavbar.prototype, "treeRef", void 0);
    SideNavbar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-side-navbar",
            template: __webpack_require__("./src/app/home/side-navbar/side-navbar.component.html"),
            styles: [__webpack_require__("./src/app/home/side-navbar/side-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], SideNavbar);
    return SideNavbar;
}());

// nodes
// hasChildren: For async data load. Denotes that this node might have children, even when 'children' attr is empty.
// isExpanded: Determines whether the node starts as expanded by default. Notice that this field is not bindable, meaning that changing it doesn't affect the tree and vice versa.


/***/ }),

/***/ "./src/app/http-interceptors/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return httpInterceptorProviders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__set_header_interceptor__ = __webpack_require__("./src/app/http-interceptors/set-header-interceptor.ts");
/* "Barrel" of Http Interceptors */


// import { CachingInterceptor } from './caching-interceptor';
/** Http interceptor providers in outside-in order */
var httpInterceptorProviders = [
    { provide: __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_1__set_header_interceptor__["a" /* SetHeaderInterceptor */], multi: true },
];


/***/ }),

/***/ "./src/app/http-interceptors/set-header-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetHeaderInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__("./src/app/service/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*import { finalize, tap } from 'rxjs/operators';*/

var SetHeaderInterceptor = /** @class */ (function () {
    function SetHeaderInterceptor(commonService) {
        this.commonService = commonService;
    }
    SetHeaderInterceptor.prototype.intercept = function (req, next) {
        // const started = Date.now();
        // let ok: string;
        // Clone the request to add the new header.
        var authReq = req.clone({ setHeaders: {
                'x-access-token': this.commonService.getAuthToken()
            }
        });
        //send the newly created request
        return next.handle(authReq);
        // extend server response observable with logging
        /*return next.handle(authReq)
          .pipe(
            // Log when response observable either completes or errors
            finalize(() => {
              console.log(`${req.method} "${req.urlWithParams}"
                 ${ok} in ${Date.now() - started} ms.`);
            })
          );*/
    };
    SetHeaderInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */]])
    ], SetHeaderInterceptor);
    return SetHeaderInterceptor;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login{\n    width: 500px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: -159px;\n    margin-left: -250px;\n\n}\n\n\n.panel {\n    background-color: #fff;\n    border: 1px solid #bce8f1;\n    border-radius: 4px;\n    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);\n    box-shadow: 0 1px 1px rgba(0,0,0,.05);\n}\n\n\n.panel-heading {\n    padding: 10px 15px;\n    border-bottom: 1px solid #bce8f1;\n    border-top-right-radius: 3px;\n    border-top-left-radius: 3px;\n    color: #31708f;\n    background-color: #d9edf7;\n}\n\n\n.panel-title {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 16px;\n    color: inherit;\n}\n\n\n.forgot {\n    float: right;\n    font-size: 12px;\n    position: relative;\n    top: -10px;\n}\n\n\n.forgot a{\n    color: #31708f;\n}\n\n\n.panel-body {\n    padding: 15px;\n    padding-top: 30px;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ul>\n  <li *ngFor=\"let user of demousers\">{{ user.email }}</li>\n</ul> -->\n<div class=\"login\">\n    <div class=\"panel panel-info\">\n    <div class=\"panel-heading\">\n        <div class=\"panel-title\">Sign In</div>\n        <div class=\"forgot\"><a href=\"#\">Forgot password?</a></div>\n    </div>\n    <div class=\"panel-body\">\n    <form  (ngSubmit)=\"login()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\">\n            <label for=\"username\">Email</label>\n            <input type=\"email\" class=\"form-control\" name=\"email\" ngModel #email=\"ngModel\" required email />\n            <div *ngIf=\"email.errors && email.touched\">\n\t            <span *ngIf=\"email.errors.required\" class=\"redItalic\">Email required.</span>\n\t            <span *ngIf=\"!email.errors.required && email.errors.email\" class=\"redItalic\">Email not valid.</span>\n            </div>\n            <!-- <div *ngIf=\"(email.touched && !email.valid) || (f.submitted && !email.valid)\" class=\"help-block\">Email is required</div> -->\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" ngModel #password=\"ngModel\" required minlength=\"6\" maxlength=\"15\" />\n            <div *ngIf=\"password.errors && password.touched\">\n\t            <span *ngIf=\"password.errors.required\" class=\"redItalic\">Password required.</span>\n\t            <span *ngIf=\"!password.errors.required && (password.errors.minlength || password.errors.maxlength)\" class=\"redItalic\">Password length must be in between of 6 and 15.</span>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading || !f.valid\" class=\"btn btn-success\">Login</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        </div>\n    </form>\n    </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_reusable_functions_service__ = __webpack_require__("./src/app/service/reusable_functions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_common_service__ = __webpack_require__("./src/app/service/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { HttpClient, HttpHeaders } from '@angular/common/http';


//import { LoginResponse } from '../models/login_response.model';
var LoginComponent = /** @class */ (function () {
    //demousers : Array<any>;
    function LoginComponent(route, 
        //private router: Router,
        // private http : HttpClient,
        reusableFunctionsService, commonService) {
        this.route = route;
        this.reusableFunctionsService = reusableFunctionsService;
        this.commonService = commonService;
        this.loading = false;
    }
    //ngOnInit() {
    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    // if (localStorage.getItem('currentUser')) {
    //     (this.returnUrl === "login") && (this.returnUrl = '/');
    //     this.router.navigate([this.returnUrl]);
    // }
    // }
    LoginComponent.prototype.login = function () {
        var _this = this;
        // Set loading true
        this.loading = true;
        this.commonService.getLoginData('/api/usermanagement/login', this.loginForm.value, this.route.snapshot.queryParams['returnUrl']).then(function (result) {
            // Set loading false
            _this.loading = false;
            result && _this.reusableFunctionsService.showNotification({
                message: result.data.error && result.data.error.message,
                type: 'error'
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* NgForm */])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__service_reusable_functions_service__["a" /* ReusableFunctionsService */],
            __WEBPACK_IMPORTED_MODULE_4__service_common_service__["a" /* CommonService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatTooltipModule */],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/reusable_components/angular-material-dialog/ng-mat-dialog.component.css":
/***/ (function(module, exports) {

module.exports = ".close {\n    float: right;\n    margin-top: -7%;\n    margin-right: -7%;\n}"

/***/ }),

/***/ "./src/app/reusable_components/angular-material-dialog/ng-mat-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<button *ngIf=\"config.showCancelIcon\" class=\"btn btn-link close\" (click)=\"dialogRef.close()\">\n\t<mat-icon>cancel</mat-icon>\n</button>\n<div mat-dialog-title>\n\t{{config.title}}\n</div>\n<mat-dialog-content>\n\t<span>{{config.textContent}}</span>\n</mat-dialog-content>\n<br>\n<mat-dialog-actions>\n    <button class=\"mat-raised-button\" (click)=\"dialogRef.close({ok:false})\">\n\t    <span class=\"mat-button-wrapper\"><mat-icon>{{config.cancel.icon}}</mat-icon>{{config.cancel.text}}</span>\n\t</button>\n\t<button class=\"mat-raised-button\" (click)=\"dialogRef.close({ok:true})\">\n\t    <span class=\"mat-button-wrapper\"><mat-icon>{{config.ok.icon}}</mat-icon>{{config.ok.text}}</span>\n\t</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/reusable_components/angular-material-dialog/ng-mat-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgMatDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var NgMatDialogComponent = /** @class */ (function () {
    function NgMatDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.config = {
            showCancelIcon: true,
            title: "Delete",
            textContent: "Are you sure you want to delete this record?",
            ok: { text: 'Delete', icon: 'delete' },
            cancel: { text: 'Cancel', icon: 'cancel' }
        };
        if (data && data.config) {
            Object.assign(this.config, data.config || {});
        }
    }
    NgMatDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ng-mat-dialog',
            template: __webpack_require__("./src/app/reusable_components/angular-material-dialog/ng-mat-dialog.component.html"),
            styles: [__webpack_require__("./src/app/reusable_components/angular-material-dialog/ng-mat-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */], Object])
    ], NgMatDialogComponent);
    return NgMatDialogComponent;
}());



/***/ }),

/***/ "./src/app/reusable_components/list/list.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n}\n.spinner-container {\n    height: 360px;\n    width: 390px;\n    position: fixed;\n}\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0;\n}\n.main-fab {\n  position:absolute;\n}\n.main-fab + .example-header {\n  margin-left: 20px; \n}\n.mat-fab {\n  width: 40px;\n  height: 40px;\n  outline: none;\n  opacity: 0.83;\n}\n/* Absolute Center Spinner */\n.loading-indicator {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n/* Transparent Overlay */\n.loading-indicator:before {\n  content: '';\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.3);\n}\n/*Mat Overrite Class*/\n.mat-header-cell {   \n  font-weight: bold;\n}\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n.mat-header-row {\n  min-height: 40px;\n}\n.mat-row {\n  min-height: 46px;\n}\nmat-row:nth-child(even){\n  background-color:white;\n}\nmat-row:nth-child(odd){\n  background-color:#cccccc54;\n}\nmat-row.highlight{\n  background-color: #408dbc63;\n}\nmat-row.mat-row.totals-row {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0;\n  background-color: #6783b545;\n  border-top: 1px solid #CCC;\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./src/app/reusable_components/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <!-- Add Button Division -->\n  <div *ngIf=\"config.allowAdd\" class=\"main-fab\">\n      <button class=\"mat-fab mat-accent mat-button\" [matTooltip]=\"config.allowAdd?.tooltip || 'Add new record'\" [matTooltipPosition]=\"config.allowAdd?.tooltipPosition || 'after'\" (click)=\"initialized.next({eventName : 'add'})\" [disabled]=\"config.allowAdd?.isDisable\"><span>+</span></button>\n  </div>\n  <!-- Search Division -->\n  <div *ngIf=\"config.filterable\" class=\"example-header\">\n      <mat-form-field>\n        <input matInput (input)=\"config.serverInteraction || applyFilter($event.target.value)\" placeholder=\"Search\" #searchInput>\n      </mat-form-field>\n  </div>\n  <!-- Spinner Div -->\n  <div class=\"loading-indicator\" *ngIf=\"config.serverInteraction && config.showLoadingProgress && loading\">\n    <mat-progress-spinner mode=\"indeterminate\" color=\"accent\"></mat-progress-spinner>\n  </div>\n  <!-- Table -->\n  <mat-table [dataSource]=\"dataSource\" matSort [matSortDisabled]=\"!config.sortable\">\n    <!-- Dynamic Columns -->\n    <div *ngFor=\"let col of config.columns\">\n      <ng-container [matColumnDef]=\"col.field\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header [disabled]=\"!config.sortable || col.notToSort\"> {{col.title || (col.field | titlecase)}} </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element[col.field]}} </mat-cell>\n      </ng-container>\n    </div>\n    <!-- Dynamic Actions -->\n    <div *ngIf=\"config.actions\">\n      <ng-container matColumnDef=\"action\">\n          <mat-header-cell *matHeaderCellDef > {{config.actions?.title || 'Action'}} </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" >\n            <button *ngIf=\"config.actions?.edit && !(config.footer && row.isFooterRow)\" (click)=\"$event.stopPropagation();initialized.next({eventName : 'edit', data : row})\" class=\"btn btn-link remove-padding\" [disabled]=\"config.actions.edit?.isDisable\"><i class=\"material-icons\">edit</i></button>\n            <button *ngIf=\"config.actions?.delete && !(config.footer && row.isFooterRow)\" (click)=\"$event.stopPropagation();onDelete(row)\" class=\"btn btn-link remove-padding\" [disabled]=\"config.actions.edit?.isDisable\"><i class=\"material-icons\">delete</i></button>\n          </mat-cell>\n      </ng-container> \n    </div>\n    <!-- Dynamic Header -->\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <!-- Dynamic Row -->\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'highlight': selectedRow == row && config.selectable, 'totals-row' : config.footer && row.isFooterRow}\" (click)=\"onSelect.next(row);selectedRow = row\"></mat-row>\n  </mat-table>\n  <!-- Pagination -->\n  <mat-paginator *ngIf=\"config.pageable\"\n                 [length]=\"totalCount\"\n                 [pageSize]=\"config.pageable?.pageSize || 10\"\n                 [pageSizeOptions]=\"config.pageable?.pageSizeOptions || [10, 20, 50]\"\n                 [showFirstLastButtons]=\"config.pageable?.showFirstLastButtons === undefined || config.pageable?.showFirstLastButtons\">\n  </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/reusable_components/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_dialog_ng_mat_dialog_component__ = __webpack_require__("./src/app/reusable_components/angular-material-dialog/ng-mat-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_model__ = __webpack_require__("./src/app/reusable_components/list/list.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListComponent = /** @class */ (function () {
    function ListComponent(dialog) {
        var _this = this;
        this.dialog = dialog;
        // Column which are displayed in list
        this.displayedColumns = [];
        // List datasource
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatTableDataSource */]();
        // Set loading div false
        this.loading = false;
        this.ds = [];
        this.initialized = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        // If parent want to update grid with update datasource forcefully
        this.onDataSourceUpdate = function () { return _this.ngOnChanges(); };
        this.isObject = function (value) { return value !== null && typeof value === 'object'; };
    }
    // For filter for static data
    ListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ListComponent.prototype.ngOnChanges = function () {
        // After updating input hide loading division
        this.loading = false;
        // If server interaction(Means Searching, Sorting, Pagination applied on server end)
        //  is true and footer is also available then push footer into dataSource
        this.config.serverInteraction && this.config.footer && this.ds.push(Object.assign(this.config.footer.row, { isFooterRow: true }));
        // Convert input datasorce into Mat table data source
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatTableDataSource */](this.ds);
        // If server interaction is false then bind Mat sorting and pagination with datasource
        if (!this.config.serverInteraction) {
            // If paginator is true and no record exist in current pageindex then decrese the pageindex
            if (this.paginator && this.dataSource.data.length <= this.paginator.pageIndex * this.paginator.pageSize && this.paginator.pageIndex)
                this.paginator.pageIndex -= 1;
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
    };
    /**
     * Set the paginator after the view init since this component will
     * be able to query its view for the initialized paginator.
     */
    ListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.config.serverInteraction) {
            this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
            this.config.filterable && Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromEvent__["a" /* fromEvent */])(this.searchInput.nativeElement, 'input')
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* debounceTime */])(250), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* distinctUntilChanged */])(), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* tap */])(function () {
                _this.paginator.pageIndex = 0;
                _this.passFilterToParent();
            }))
                .subscribe();
            Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["a" /* merge */])(this.sort.sortChange, this.paginator.page)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* tap */])(function () { return _this.passFilterToParent(); }))
                .subscribe();
        }
        else {
            // If server interaction is false then bind Mat sorting and pagination with datasource
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
        // Call callback with 'initialized' event name
        this.initialized.next({ eventName: 'initialized' });
    };
    // Pass filter object to parent
    ListComponent.prototype.passFilterToParent = function () {
        var obj = {};
        // If pageable is true set offset and limit
        if (this.config.pageable) {
            obj.offset = this.paginator.pageIndex * this.paginator.pageSize;
            obj.limit = this.paginator.pageSize;
        }
        // If filterable is true set searchValue
        this.config.filterable && (obj.searchValue = this.searchInput.nativeElement.value.trim());
        // If sortable is true set sort object
        this.config.sortable && this.sort.active && (obj.sort = { field: this.sort.active, dir: this.sort.direction });
        // Call callback and pass data with 'filterUpdate' event name
        this.initialized.next({
            eventName: 'filterUpdate',
            data: obj
        });
        this.loading = true;
    };
    ListComponent.prototype.ngOnInit = function () {
        this.displayedColumns = [];
        // Collect display column from config.columns in which notToDisplay flag is false
        for (var _i = 0, _a = this.config.columns; _i < _a.length; _i++) {
            var ob = _a[_i];
            ob.notToDisplay || this.displayedColumns.push(ob.field);
        }
        // Check if config.actions is defined then push action column too.
        this.isObject(this.config.actions) && this.displayedColumns.push("action");
    };
    // Call on delete
    ListComponent.prototype.onDelete = function (row) {
        var _this = this;
        // config.showPopupOnDelete is true open confirmation popup
        if (this.config.showPopupOnDelete) {
            var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__angular_material_dialog_ng_mat_dialog_component__["a" /* NgMatDialogComponent */], {
                disableClose: true,
                autoFocus: true,
                data: {
                    config: this.isObject(this.config.showPopupOnDelete) && this.config.showPopupOnDelete
                }
            });
            dialogRef.afterClosed().subscribe(function (val) { return _this.isObject(val) && val.ok && _this.initialized.next({ eventName: 'delete', data: row }); });
        }
        else
            this.initialized.next({ eventName: 'delete', data: row });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('searchInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ListComponent.prototype, "searchInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatSort */])
    ], ListComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatPaginator */])
    ], ListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__list_model__["a" /* ListConfig */])
    ], ListComponent.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('dataSource'),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "ds", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "totalCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "initialized", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "onSelect", void 0);
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-list",
            template: __webpack_require__("./src/app/reusable_components/list/list.component.html"),
            styles: [__webpack_require__("./src/app/reusable_components/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/reusable_components/list/list.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListConfig; });
var ListConfig = /** @class */ (function () {
    function ListConfig() {
    }
    return ListConfig;
}());



/***/ }),

/***/ "./src/app/reusable_modules/dynamic-form/components/dynamic-field/dynamic-field.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFieldDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_button_form_button_component__ = __webpack_require__("./src/app/reusable_modules/dynamic-form/components/form-button/form-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_input_form_input_component__ = __webpack_require__("./src/app/reusable_modules/dynamic-form/components/form-input/form-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_select_form_select_component__ = __webpack_require__("./src/app/reusable_modules/dynamic-form/components/form-select/form-select.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var components = {
    button: __WEBPACK_IMPORTED_MODULE_2__form_button_form_button_component__["a" /* FormButtonComponent */],
    input: __WEBPACK_IMPORTED_MODULE_3__form_input_form_input_component__["a" /* FormInputComponent */],
    select: __WEBPACK_IMPORTED_MODULE_4__form_select_form_select_component__["a" /* FormSelectComponent */],
};
var DynamicFieldDirective = /** @class */ (function () {
    function DynamicFieldDirective(resolver, container /*,
        private renderer2 : Renderer2*/) {
        this.resolver = resolver;
        this.container = container; /*,
        private renderer2 : Renderer2*/
    }
    DynamicFieldDirective.prototype.ngOnChanges = function () {
        if (this.component) {
            this.component.instance.config = this.config;
            this.component.instance.group = this.group;
        }
    };
    DynamicFieldDirective.prototype.ngOnInit = function () {
        if (!components[this.config.type]) {
            var supportedTypes = Object.keys(components).join(', ');
            throw new Error("Trying to use an unsupported type (" + this.config.type + ").\n        Supported types: " + supportedTypes);
        }
        var component = this.resolver.resolveComponentFactory(components[this.config.type]);
        this.component = this.container.createComponent(component);
        //this.renderer2.addClass(this.component.location.nativeElement,'col-md-'+(this.config.colSize || 12));
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], DynamicFieldDirective.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], DynamicFieldDirective.prototype, "group", void 0);
    DynamicFieldDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[dynamicField]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */] /*,
            private renderer2 : Renderer2*/])
    ], DynamicFieldDirective);
    return DynamicFieldDirective;
}());



/***/ }),

/***/ "./src/app/reusable_modules/dynamic-form/components/form-button/form-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormButtonComponent = /** @class */ (function () {
    function FormButtonComponent() {
    }
    FormButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'form-button',
            //styleUrls: ['form-button.component.scss'],
            template: "\n    <div \n      class=\"dynamic-field form-button col-md-{{config.colSize || '12'}}\"\n      [formGroup]=\"group\">\n      <div [ngSwitch]=\"config.buttonType\">\n        <button *ngSwitchCase=\"'submit'\" class=\"btn btn-success\"\n          [disabled]=\"group.pristine || !group.valid\"\n          type=\"submit\">\n          {{ config.name }}\n        </button>\n        <button *ngSwitchCase=\"'reset'\" class=\"btn btn-danger\"\n          [disabled]=\"group.pristine\"\n          type=\"reset\" (click)=\"group.reset()\">\n          {{ config.name }}\n        </button>\n        <button *ngSwitchDefault class=\"btn btn-primary\"\n          [disabled]=\"config.disabled\"\n          [attr.type]=\"config.buttonType || 'button'\">\n          {{ config.name }}\n        </button>\n      </div>\n    </div>\n  "
        })
    ], FormButtonComponent);
    return FormButtonComponent;
}());



/***/ }),

/***/ "./src/app/reusable_modules/dynamic-form/components/form-input/form-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div \n  class=\"dynamic-field form-input col-md-{{config.colSize || '12'}}\" \n  [formGroup]=\"group\">\n  <div [ngSwitch]=\"config.inputType\">\n    <div *ngSwitchCase=\"'radio'\">\n      <label>{{config.label}}</label>\n        <ng-container *ngFor=\"let option of config.options\">\n            <div style=\"display: inline-block;margin-right:10px;\">\n                <input \n                  type=\"radio\" \n                  [formControlName]=\"config.name\"\n                  [value]= \"option.value\"/>{{option.name}}\n            </div>\n        </ng-container>\n    </div>\n    <div *ngSwitchCase=\"'checkbox'\">\n      <label for=\"timeslots\">{{config.label}}</label>\n    </div>\n    <div *ngSwitchDefault>\n      <label>{{ config.label }}</label>\n      <input\n        [attr.type]=\"config.inputType || 'text'\"\n        [attr.placeholder]=\"config.placeholder\"\n        [formControlName]=\"config.name\">\n        <div *ngIf=\"group.controls[config.name].errors && (group.controls[config.name].touched || group.controls[config.name].dirty)\">\n          <span class=\"redItalic\" *ngIf=\"group.controls[config.name].errors.required\">{{config.label}} is required!</span>\n          <span class=\"redItalic\" *ngIf=\"group.controls[config.name].errors.minlength\">{{config.label}} must be at least {{group.controls[config.name].errors.minlength.requiredLength}} characters!</span>\n          <span class=\"redItalic\" *ngIf=\"group.controls[config.name].errors.maxlength\">{{config.label}} must be upto {{group.controls[config.name].errors.maxlength.requiredLength}} characters!</span>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/reusable_modules/dynamic-form/components/form-input/form-input.component.scss":
/***/ (function(module, exports) {

module.exports = "input {\n  display: block;\n  font-family: inherit;\n  font-size: 14px;\n  width: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  outline: none;\n  padding: 10px 15px;\n  color: rgba(0, 0, 0, 0.7); }\n  input:focus {\n    border: 1px solid rgba(0, 0, 0, 0.4);\n    -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n            box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); }\n"

/***/ }),

/***/ "./src/app/reusable_modules/dynamic-form/components/form-input/form-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormInputComponent = /** @class */ (function () {
    function FormInputComponent() {
    }
    FormInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'form-input',
            styles: [__webpack_require__("./src/app/reusable_modules/dynamic-form/components/form-input/form-input.component.scss")],
            template: __webpack_require__("./src/app/reusable_modules/dynamic-form/components/form-input/form-input.component.html")
        })
    ], FormInputComponent);
    return FormInputComponent;
}());



/***/ }),

/***/ "./src/app/reusable_modules/dynamic-form/components/form-select/form-select.component.scss":
/***/ (function(module, exports) {

module.exports = "select {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  text-indent: .01px;\n  text-overflow: '';\n  overflow: hidden;\n  font-family: inherit;\n  font-size: 14px;\n  padding: 10px 15px;\n  border-radius: 0;\n  color: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  width: 100%;\n  outline: none;\n  background: linear-gradient(45deg, transparent 50%, rgba(0, 0, 0, 0.7) 50%) no-repeat calc(100% - 20px) calc(1em + 4px), linear-gradient(135deg, rgba(0, 0, 0, 0.7) 50%, transparent 50%) no-repeat calc(100% - 15px) calc(1em + 4px);\n  background-size: 5px 5px, 5px 5px; }\n  select:focus {\n    border: 1px solid rgba(0, 0, 0, 0.4);\n    -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n            box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); }\n"

/***/ }),

/***/ "./src/app/reusable_modules/dynamic-form/components/form-select/form-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormSelectComponent = /** @class */ (function () {
    function FormSelectComponent() {
    }
    FormSelectComponent.prototype.isObject = function (val) { return val !== null && typeof val === 'object'; };
    FormSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'form-select',
            styles: [__webpack_require__("./src/app/reusable_modules/dynamic-form/components/form-select/form-select.component.scss")],
            template: "\n    <div \n      class=\"dynamic-field form-select col-md-{{config.colSize || '12'}}\"\n      [formGroup]=\"group\">\n      <label>{{ config.label }}</label>\n      <select [formControlName]=\"config.name\">\n        <option value=\"\">{{ config.placeholder }}</option>\n        <option *ngFor=\"let option of config.options\" [value]=\"isObject(option) ? option[config.valueField] : option\">\n          {{ isObject(option) ? option[config.textField] : option }}\n        </option>\n      </select>\n      <div *ngIf=\"group.controls[config.name].errors && (group.controls[config.name].touched || group.controls[config.name].dirty)\">\n          <span class=\"redItalic\" *ngIf=\"group.controls[config.name].errors.required\">{{config.label}} is required!</span>\n      </div>\n    </div>\n  "
        })
    ], FormSelectComponent);
    return FormSelectComponent;
}());



/***/ }),

/***/ "./src/app/reusable_modules/dynamic-form/containers/dynamic-form/dynamic-form.component.scss":
/***/ (function(module, exports) {

module.exports = ":host /deep/ .dynamic-field {\n  margin-bottom: 15px; }\n  :host /deep/ .dynamic-field label {\n    display: block;\n    font-size: 16px;\n    font-weight: 400;\n    letter-spacing: 0px;\n    margin-bottom: 10px;\n    color: rgba(0, 0, 0, 0.9); }\n  :host /deep/ .col-md-3, /deep/ .col-md-6, /deep/ .col-md-9, /deep/ .col-md-12 {\n  float: left;\n  padding-right: 5px;\n  padding-left: 5px; }\n"

/***/ }),

/***/ "./src/app/reusable_modules/dynamic-form/containers/dynamic-form/dynamic-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent(fb) {
        this.fb = fb;
        this.config = [];
        this.submit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    Object.defineProperty(DynamicFormComponent.prototype, "controls", {
        get: function () { return this.config.filter(function (_a) {
            var type = _a.type;
            return type !== 'button';
        }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormComponent.prototype, "changes", {
        get: function () { return this.form.valueChanges; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormComponent.prototype, "valid", {
        get: function () { return this.form.valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormComponent.prototype, "value", {
        get: function () { return this.form.value; },
        enumerable: true,
        configurable: true
    });
    DynamicFormComponent.prototype.ngOnInit = function () {
        this.form = this.createGroup();
    };
    DynamicFormComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.form) {
            var controls_1 = Object.keys(this.form.controls);
            var configControls_1 = this.controls.map(function (item) { return item.name; });
            controls_1
                .filter(function (control) { return !configControls_1.includes(control); })
                .forEach(function (control) { return _this.form.removeControl(control); });
            configControls_1
                .filter(function (control) { return !controls_1.includes(control); })
                .forEach(function (name) {
                var config = _this.config.find(function (control) { return control.name === name; });
                _this.form.addControl(name, _this.createControl(config));
            });
        }
    };
    DynamicFormComponent.prototype.createGroup = function () {
        var _this = this;
        var group = this.fb.group({});
        this.controls.forEach(function (control) { return group.addControl(control.name, _this.createControl(control)); });
        return group;
    };
    DynamicFormComponent.prototype.createControl = function (config) {
        var disabled = config.disabled, validation = config.validation, value = config.value;
        return this.fb.control({ disabled: disabled, value: value }, validation);
    };
    DynamicFormComponent.prototype.handleSubmit = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.submit.emit(this.value);
    };
    DynamicFormComponent.prototype.setDisabled = function (name, disable) {
        var method = disable ? 'disable' : 'enable';
        // if (this.form.controls[name]) {
        //   this.form.controls[name][method]();
        //   return;
        // }
        // this.config = this.config.map((item) => {
        //   if (item.name === name) {
        //     item.disabled = disable;
        //   }
        //   return item;
        // });
        for (var _i = 0, _a = this.config; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.name === name) {
                this.form.controls[name] && this.form.controls[name][method]();
                item.disabled = disable;
                break;
            }
        }
    };
    DynamicFormComponent.prototype.disableAll = function (disable) {
        var method = disable ? 'disable' : 'enable';
        for (var _i = 0, _a = this.config; _i < _a.length; _i++) {
            var item = _a[_i];
            this.form.controls[item.name] && this.form.controls[item.name][method]();
            item.disabled = disable;
        }
    };
    DynamicFormComponent.prototype.patchValue = function (value) {
        this.form.patchValue(value, { emitEvent: true });
    };
    DynamicFormComponent.prototype.setValue = function (name, value) {
        this.form.controls[name].setValue(value, { emitEvent: true });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], DynamicFormComponent.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], DynamicFormComponent.prototype, "submit", void 0);
    DynamicFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            exportAs: 'dynamicForm',
            selector: 'dynamic-form',
            styles: [__webpack_require__("./src/app/reusable_modules/dynamic-form/containers/dynamic-form/dynamic-form.component.scss")],
            template: "\n    <form\n      class=\"dynamic-form\"\n      [formGroup]=\"form\"\n      (ngSubmit)=\"handleSubmit($event)\">\n      <ng-container\n        *ngFor=\"let field of config;\"\n        dynamicField\n        [config]=\"field\"\n        [group]=\"form\">\n      </ng-container>\n    </form>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());



/***/ }),

/***/ "./src/app/reusable_modules/dynamic-form/dynamic-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dynamic_field_dynamic_field_directive__ = __webpack_require__("./src/app/reusable_modules/dynamic-form/components/dynamic-field/dynamic-field.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_dynamic_form_dynamic_form_component__ = __webpack_require__("./src/app/reusable_modules/dynamic-form/containers/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_form_button_form_button_component__ = __webpack_require__("./src/app/reusable_modules/dynamic-form/components/form-button/form-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_form_input_form_input_component__ = __webpack_require__("./src/app/reusable_modules/dynamic-form/components/form-input/form-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_form_select_form_select_component__ = __webpack_require__("./src/app/reusable_modules/dynamic-form/components/form-select/form-select.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DynamicFormModule = /** @class */ (function () {
    function DynamicFormModule() {
    }
    DynamicFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__components_dynamic_field_dynamic_field_directive__["a" /* DynamicFieldDirective */],
                __WEBPACK_IMPORTED_MODULE_4__containers_dynamic_form_dynamic_form_component__["a" /* DynamicFormComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_form_button_form_button_component__["a" /* FormButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_form_input_form_input_component__["a" /* FormInputComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_form_select_form_select_component__["a" /* FormSelectComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__containers_dynamic_form_dynamic_form_component__["a" /* DynamicFormComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__components_form_button_form_button_component__["a" /* FormButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_form_input_form_input_component__["a" /* FormInputComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_form_select_form_select_component__["a" /* FormSelectComponent */]
            ]
        })
    ], DynamicFormModule);
    return DynamicFormModule;
}());



/***/ }),

/***/ "./src/app/service/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reusable_functions_service__ = __webpack_require__("./src/app/service/reusable_functions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { MatSnackBar } from '@angular/material';


// import { LoginResponse } from '../models/login_response.model';
// Mat Snack Bar default configuration
var CommonService = /** @class */ (function () {
    function CommonService(http, reusableFunctionsService, router) {
        this.http = http;
        this.reusableFunctionsService = reusableFunctionsService;
        this.router = router;
        this.isSideBarExpand = true;
        //Store Application Menus after login and clear after logout
        this.appMenus = [];
        // Get auth token from localstorage
        this.getAuthToken = function () { return localStorage['auth-token'] || ''; };
    }
    CommonService.prototype.getLoginData = function (url, data, ret_url) {
        var _this = this;
        (ret_url === '/login') && (ret_url = '');
        return new Promise(function (resolve, reject) {
            _this.http.post(url, data).subscribe(function (result) {
                var isSideBarExpand = localStorage.isSideBarExpand;
                _this.isSideBarExpand = (isSideBarExpand !== undefined) ? JSON.parse(localStorage.isSideBarExpand) : !!result.data.isSideBarExpand;
                result.data.token && (localStorage['auth-token'] = result.data.token);
                _this.appMenus = _this.reusableFunctionsService.getNestedChildren(result.data.appMenus, 'controller_id', 'parent_controller_id');
                resolve(false /*{status:'OK', data : result}*/);
                _this.router.navigate([ret_url || '']);
            }, function (err) {
                resolve({ status: 'KO', data: err });
            });
        });
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__reusable_functions_service__["a" /* ReusableFunctionsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/service/reusable_functions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReusableFunctionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var snackBarDefaultConfig = {
    message: "xxxxxxxxxxxx",
    action: "close",
    duration: 2000,
    type: 'success'
};
var ReusableFunctionsService = /** @class */ (function () {
    function ReusableFunctionsService(snackBar, router) {
        var _this = this;
        this.snackBar = snackBar;
        this.router = router;
        // Show notifications
        this.showNotification = function (obj) {
            if (obj === void 0) { obj = {}; }
            var config = Object.assign({}, snackBarDefaultConfig, obj);
            _this.snackBar.open(config.message, config.action, {
                duration: config.duration,
                extraClasses: [config.type]
            });
        };
        // Check object
        this.isObject = function (value) { return value !== null && typeof value === 'object'; };
        // Check Server response error
        this.checkError = function (err) {
            // If server response is 401(unauthorized) then redirect to login page 
            // also remove auth-token from localstorage
            if (_this.isObject(err) && (err.status === 401)) {
                localStorage.removeItem('auth-token');
                _this.router.navigate(['/login']);
            }
        };
    }
    // Convert Linear to Multi Level
    ReusableFunctionsService.prototype.getNestedChildren = function (arr, primKey, ParKey, parent) {
        var out = [];
        for (var i in arr) {
            if (arr[i][ParKey] == parent) {
                var children = this.getNestedChildren(arr, primKey, ParKey, arr[i][primKey]);
                children.length && (arr[i].children = children);
                out.push(arr[i]);
            }
        }
        return out;
    };
    // Sort Array on behalf of field name
    ReusableFunctionsService.prototype.sortArray = function (array, field, sortingType, fieldType) {
        var dir = 1;
        if (!array.length)
            return array;
        (sortingType == 'desc') && (dir = -1);
        switch (fieldType) {
            case "number":
                array.sort(function (a, b) {
                    return (a[field] - b[field]) * dir;
                });
                break;
            case "date": {
                var x_1, y_1;
                array.sort(function (a, b) {
                    x_1 = new Date(a[field]).getTime();
                    y_1 = new Date(b[field]).getTime();
                    return ((x_1 < y_1) ? -1 : ((y_1 < x_1) ? 1 : 0)) * dir;
                });
                break;
            }
            default: {
                var x_2, y_2;
                array.sort(function (a, b) {
                    x_2 = a[field].toLowerCase();
                    y_2 = b[field].toLowerCase();
                    return ((x_2 < y_2) ? -1 : ((y_2 < x_2) ? 1 : 0)) * dir;
                });
                break;
            }
        }
        return array;
    };
    ReusableFunctionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]])
    ], ReusableFunctionsService);
    return ReusableFunctionsService;
}());



/***/ }),

/***/ "./src/app/task-management/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TASK_MANAGEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TASK_MANAGEMENT_OBJ; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__task_management_component__ = __webpack_require__("./src/app/task-management/task-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_management_form_task_management_form_component__ = __webpack_require__("./src/app/task-management/task-management-form/task-management-form.component.ts");


var TASK_MANAGEMENT = [__WEBPACK_IMPORTED_MODULE_0__task_management_component__["a" /* TaskManagementComponent */], __WEBPACK_IMPORTED_MODULE_1__task_management_form_task_management_form_component__["a" /* TaskManagementFormComponent */]];
var TASK_MANAGEMENT_OBJ = { TaskManagementComponent: __WEBPACK_IMPORTED_MODULE_0__task_management_component__["a" /* TaskManagementComponent */], TaskManagementFormComponent: __WEBPACK_IMPORTED_MODULE_1__task_management_form_task_management_form_component__["a" /* TaskManagementFormComponent */] };


/***/ }),

/***/ "./src/app/task-management/task-management-form/task-management-form.component.html":
/***/ (function(module, exports) {

module.exports = "<button tabindex=\"-1\" class=\"btn btn-link close\" (click)=\"dialogRef.close()\">\n\t<mat-icon>cancel</mat-icon>\n</button>\n<div mat-dialog-title>\n\t{{title}}\n</div>\n<dynamic-form\n\t[config]=\"config\"\n\t#form=\"dynamicForm\"\n\t(submit)=\"submit($event)\">\n</dynamic-form>"

/***/ }),

/***/ "./src/app/task-management/task-management-form/task-management-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskManagementFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_management_form_config__ = __webpack_require__("./src/app/task-management/task-management-form/task-management-form.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reusable_modules_dynamic_form_containers_dynamic_form_dynamic_form_component__ = __webpack_require__("./src/app/reusable_modules/dynamic-form/containers/dynamic-form/dynamic-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var TaskManagementFormComponent = /** @class */ (function () {
    function TaskManagementFormComponent(dialogRef, _a, cdr) {
        var data = _a.data, title = _a.title;
        var _this = this;
        this.dialogRef = dialogRef;
        this.cdr = cdr;
        this.data = {
            component: "",
            description: "",
            typeId: "",
            status: ""
        };
        this.config = __WEBPACK_IMPORTED_MODULE_2__task_management_form_config__["a" /* default */];
        this.title = '';
        this.submit = function (val) { return _this.dialogRef.close(Object.assign(_this.data, val)); };
        data && Object.assign(this.data, data);
        this.title = title;
    }
    TaskManagementFormComponent.prototype.ngAfterViewInit = function () {
        this.form.patchValue(this.data);
        this.cdr.detectChanges();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__reusable_modules_dynamic_form_containers_dynamic_form_dynamic_form_component__["a" /* DynamicFormComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__reusable_modules_dynamic_form_containers_dynamic_form_dynamic_form_component__["a" /* DynamicFormComponent */])
    ], TaskManagementFormComponent.prototype, "form", void 0);
    TaskManagementFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-task-management-form',
            template: __webpack_require__("./src/app/task-management/task-management-form/task-management-form.component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], TaskManagementFormComponent);
    return TaskManagementFormComponent;
}());



/***/ }),

/***/ "./src/app/task-management/task-management-form/task-management-form.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");

var CONFIG = [
    {
        type: 'input',
        label: 'Component name',
        name: 'component',
        placeholder: 'Enter component',
        validation: [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["k" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_0__angular_forms__["k" /* Validators */].maxLength(40)]
    }, {
        type: 'input',
        label: 'Description',
        name: 'description',
        placeholder: 'Enter description',
        validation: [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["k" /* Validators */].maxLength(140)]
    }, {
        type: 'select',
        colSize: 6,
        label: 'Type',
        name: 'typeId',
        textField: 'name',
        valueField: 'value',
        options: [{ name: 'bug', value: 1 }, { name: 'feature', value: 2 }, { name: 'update', value: 3 }],
        placeholder: '-select type-',
        validation: [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["k" /* Validators */].required]
    }, {
        type: 'select',
        colSize: 6,
        label: 'Status',
        name: 'status',
        options: ['Not yet started', 'Done', 'Pending'],
        placeholder: '-select status-',
        validation: [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["k" /* Validators */].required]
    },
    {
        name: 'Submit',
        type: 'button',
        colSize: 6,
        buttonType: 'submit'
    }
];
/* harmony default export */ __webpack_exports__["a"] = (CONFIG);


/***/ }),

/***/ "./src/app/task-management/task-management.component.html":
/***/ (function(module, exports) {

module.exports = "<app-list [config]=\"listConfig\" [dataSource]=\"dataSource\" (initialized)=\"onInitializeList($event)\"></app-list>\n"

/***/ }),

/***/ "./src/app/task-management/task-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reusable_components_list_list_component__ = __webpack_require__("./src/app/reusable_components/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_management_form_task_management_form_component__ = __webpack_require__("./src/app/task-management/task-management-form/task-management-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_reusable_functions_service__ = __webpack_require__("./src/app/service/reusable_functions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var typeObj = {
    1: "bug",
    2: "feature",
    3: "update"
};
var TaskManagementComponent = /** @class */ (function () {
    function TaskManagementComponent(dialog, http, reusableFunctionsService) {
        this.dialog = dialog;
        this.http = http;
        this.reusableFunctionsService = reusableFunctionsService;
        // List Copmonent config
        this.dataSource = [];
        this.listConfig = {
            columns: [
                { field: 'id', notToDisplay: true },
                { field: 'component' },
                { field: 'type' },
                { field: 'description' },
                { field: 'status' }
            ],
            sortable: true,
            filterable: true,
            pageable: true,
            serverInteraction: false,
            showLoadingProgress: true,
            showPopupOnDelete: true,
            actions: {
                title: 'Actions',
                edit: true,
                delete: true
            },
            allowAdd: {
                tooltip: "Add task"
            }
        };
    }
    TaskManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get task list data
        this.http.get('/api/taskmanagement/list').subscribe(function (data) {
            _this.dataSource = data;
        }, function (err) { return _this.reusableFunctionsService.checkError(err); });
    };
    TaskManagementComponent.prototype.add = function (data) {
        var _this = this;
        // Open dialog on add and edit event
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__task_management_form_task_management_form_component__["a" /* TaskManagementFormComponent */], {
            disableClose: true,
            autoFocus: true,
            width: '500px',
            data: {
                data: data,
                title: data ? 'Update task' : 'Add task'
            }
        });
        // On close dialog
        dialogRef.afterClosed().subscribe(function (val) {
            if (_this.reusableFunctionsService.isObject(val)) {
                val.type = typeObj[val.typeId];
                val.typeId = +val.typeId;
                // Call api to save task data
                _this.http.post('/api/taskmanagement/save', val).subscribe(function (_a) {
                    var message = _a.message, data = _a.data;
                    // Update datasource
                    _this.dataSource = data;
                    // Show success notification
                    _this.reusableFunctionsService.showNotification({
                        message: message,
                        type: 'success'
                    });
                }, function (err) { return _this.reusableFunctionsService.checkError(err); });
            }
        });
    };
    // On delete of task
    TaskManagementComponent.prototype.delete = function (_a) {
        var _this = this;
        var id = _a.id;
        this.http.delete('/api/taskmanagement/delete/' + id).subscribe(function (_a) {
            var message = _a.message, data = _a.data;
            // Update datasource
            _this.dataSource = data;
            // Show success notification
            _this.reusableFunctionsService.showNotification({
                message: message,
                type: 'success'
            });
        }, function (err) { return _this.reusableFunctionsService.checkError(err); });
    };
    // On initialization of list component
    TaskManagementComponent.prototype.onInitializeList = function (event) {
        switch (event.eventName) {
            case "add":
                this.add();
                break;
            case "delete":
                this.delete(event.data);
                break;
            case "edit":
                this.add(event.data);
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__reusable_components_list_list_component__["a" /* ListComponent */]),
        __metadata("design:type", Object)
    ], TaskManagementComponent.prototype, "listComponent", void 0);
    TaskManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-task-management',
            template: __webpack_require__("./src/app/task-management/task-management.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__service_reusable_functions_service__["a" /* ReusableFunctionsService */]])
    ], TaskManagementComponent);
    return TaskManagementComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
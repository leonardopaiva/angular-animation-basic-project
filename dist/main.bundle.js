webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__projects_projects_component__["a" /* ProjectsComponent */], data: { animation: { page: 'rootPage' } } },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_3__users_users_component__["a" /* UsersComponent */], data: { animation: { page: 'usersPage' } } }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin-top: 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <ul class=\"nav nav-pills\">\n        <li role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"><a routerLink=\"/\">Projects</a></li>\n        <li role=\"presentation\" routerLinkActive=\"active\"><a routerLink=\"/users\">Users</a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"row\" style=\"overflow: hidden\">\n    <div class=\"col-xs-12\" [@routeState]=\"getAnimationData(routlet)\">\n      <router-outlet #routlet=\"outlet\"></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.getAnimationData = function (outlet) {
        var routeData = outlet.activatedRouteData['animation'];
        if (!routeData) {
            return 'rootPage';
        }
        return routeData['page'];
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* trigger */])('routeState', [
                    // transition('rootPage => usersPage', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* transition */])('rootPage => usersPage', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* group */])([
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])(':enter', [
                                // animateChild(), /* vai executar a animacao padrao da rota, setada no users.component.ts depois vai continuar a animacao */
                                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
                                    transform: 'translateX(-400px)',
                                    opacity: 0
                                }),
                                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out')
                            ], { optional: true }),
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])(':leave', [
                                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
                                    transform: 'translateX(-600px)',
                                    opacity: 0
                                }))
                            ], { optional: true })
                        ])
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* transition */])('usersPage => rootPage', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* group */])([
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])(':enter', [
                                // animateChild(), /* vai executar a animacao padrao da rota, setada no users.component.ts depois vai continuar a animacao */
                                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
                                    transform: 'translateY(-400px)',
                                    opacity: 0
                                }),
                                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out')
                            ], { optional: true }),
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])(':leave', [
                                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
                                    transform: 'translateY(-600px)',
                                    opacity: 0
                                }))
                            ], { optional: true })
                        ])
                    ])
                ])
            ]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__project_project_component__ = __webpack_require__("../../../../../src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__projects_projects_service__ = __webpack_require__("../../../../../src/app/projects/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new_project_new_project_component__ = __webpack_require__("../../../../../src/app/new-project/new-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__project_project_component__["a" /* ProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_9__new_project_new_project_component__["a" /* NewProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_10__users_users_component__["a" /* UsersComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__projects_projects_service__["a" /* ProjectsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/new-project/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buttonStateTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formStateTrigger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var buttonStateTrigger = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* trigger */])('buttonState', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* state */])('valid', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
        backgroundColor: 'lightgreen',
        borderColor: 'green',
        color: 'green'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* state */])('invalid', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
        backgroundColor: 'red',
        color: 'white',
        borderColor: 'darkred',
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* transition */])('invalid => valid', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* group */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(100, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
                transform: 'scale(1.1)'
            })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(200, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
                backgroundColor: 'lightgreen',
                borderColor: 'green',
                color: 'green'
            }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(200, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
            transform: 'scale(1)'
        }))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* transition */])('valid => invalid', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* group */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(100, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
                transform: 'scale(1.1)'
            })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(200, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
                backgroundColor: 'red',
                color: 'white',
                borderColor: 'darkred',
            }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(200, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
            transform: 'scale(1)'
        }))
    ])
]);
var formStateTrigger = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* trigger */])('formState', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* transition */])('* => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('input.ng-invalid:focus', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(200, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
                backgroundColor: 'red'
            })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(200)
        ], { optional: true })
    ])
]);


/***/ }),

/***/ "../../../../../src/app/new-project/new-project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-project/new-project.component.html":
/***/ (function(module, exports) {

module.exports = "\n<form (ngSubmit)=\"onCreateProject()\" #f=\"ngForm\" [@formState]=\"f.value\">\n  <div class=\"form-group\">\n    <label for=\"name\" class=\"control-label\">Name</label>\n    <input\n      type=\"text\"\n      id=\"name\"\n      ngModel\n      name=\"name\"\n      class=\"form-control\"\n      required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"description\">Description</label>\n    <input\n      type=\"text\"\n      id=\"description\"\n      ngModel\n      name=\"description\"\n      class=\"form-control\"\n      required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"status\">Status</label>\n    <select\n      name=\"status\"\n      [ngModel]=\"'active'\"\n      id=\"status\"\n      class=\"form-control\">\n      <option\n        *ngFor=\"let status of availableStatus\"\n        style=\"text-transform: capitalize\"\n        [value]=\"status\">{{ status }}</option>\n    </select>\n  </div>\n  <button\n    type=\"submit\"\n    [disabled]=\"!f.valid\"\n    [@buttonState]=\"f.valid ? 'valid' : 'invalid'\"\n    class=\"btn btn-success\">Create Project</button>\n  <button\n    type=\"button\"\n    class=\"btn btn-danger\"\n    (click)=\"onCancel()\">Cancel</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/new-project/new-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animations__ = __webpack_require__("../../../../../src/app/new-project/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewProjectComponent = (function () {
    function NewProjectComponent() {
        this.creationCancelled = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.projectCreated = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.availableStatus = [
            'active',
            'inactive',
            'critical'
        ];
    }
    NewProjectComponent.prototype.ngOnInit = function () {
    };
    NewProjectComponent.prototype.onCreateProject = function () {
        this.projectCreated.emit({ name: this.form.value.name, description: this.form.value.description, status: this.form.value.status });
    };
    NewProjectComponent.prototype.onCancel = function () {
        this.form.reset();
        this.creationCancelled.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], NewProjectComponent.prototype, "creationCancelled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], NewProjectComponent.prototype, "projectCreated", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */])
    ], NewProjectComponent.prototype, "form", void 0);
    NewProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-new-project',
            template: __webpack_require__("../../../../../src/app/new-project/new-project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new-project/new-project.component.css")],
            animations: [
                __WEBPACK_IMPORTED_MODULE_0__animations__["a" /* buttonStateTrigger */],
                __WEBPACK_IMPORTED_MODULE_0__animations__["b" /* formStateTrigger */]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], NewProjectComponent);
    return NewProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/project/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return statusChange; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var statusChange = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* trigger */])('statusChange', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* transition */])('* => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
            opacity: '{{ startOpacity }}',
            transform: 'translateX(-100%)'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
            opacity: '{{ opacity }}',
            transform: 'translateX(0)'
        }))
    ], { params: { opacity: 1 } })
]);


/***/ }),

/***/ "../../../../../src/app/project/project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display:block;\n  border-radius: 3px;\n  margin: 20px 0;\n  /* padding:20px; */\n  box-shadow: 3px 3px 2px #ccc;\n  /* transition: border-color 0.5s ease-out; */\n}\n/* \n:host(.marked) {\n  padding: 19px;\n} */\n\n:host(.inactive) {\n  color: #ccc;\n}\n\n.form-control {\n  display: inline-block;\n  width: 50%;\n}\n\n.display-inline-block {\n  display: inline-block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>\n  {{ project.name }}\n  <!-- Show different usages of ngClass and ngStyle\"-->\n  <span\n    [@statusChange]=\"{value: statusState, params: { startOpacity: 0.1, endOpacity: 1 }}\"\n    class=\"label display-inline-block\"\n    [ngClass]=\"getPrjStatusClass()\">{{ project.status }}</span>\n</h3>\n<hr>\n<p>{{ project.description }}</p>\n<select #prjStatus class=\"form-control\">\n  <option value=\"active\" [selected]=\"project.status === 'active'\">Active</option>\n  <option value=\"inactive\" [selected]=\"project.status === 'inactive'\">Inactive</option>\n  <option value=\"critical\" [selected]=\"project.status === 'critical'\">Critical</option>\n</select>\n<button class=\"btn btn-primary\" (click)=\"onUpdateStatus(prjStatus.value)\">Update Status</button>\n<button class=\"btn btn-danger\" (click)=\"onDelete()\">Delete Project</button>\n"

/***/ }),

/***/ "../../../../../src/app/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animations__ = __webpack_require__("../../../../../src/app/project/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectComponent = (function () {
    function ProjectComponent() {
        this.statusUpdated = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.projectDeleted = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.statusState = 'default';
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent.prototype.onUpdateStatus = function (newStatus) {
        this.statusState === 'default' ? this.statusState = 'newstate' : this.statusState = 'default';
        this.statusUpdated.emit(newStatus);
    };
    ProjectComponent.prototype.onDelete = function () {
        this.projectDeleted.emit();
    };
    ProjectComponent.prototype.getPrjStatusClass = function () {
        return {
            'label-success': this.project.status === 'active',
            'label-default': this.project.status === 'inactive',
            'label-danger': this.project.status === 'critical'
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ProjectComponent.prototype, "project", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ProjectComponent.prototype, "statusUpdated", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ProjectComponent.prototype, "projectDeleted", void 0);
    ProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-project',
            template: __webpack_require__("../../../../../src/app/project/project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project/project.component.css")],
            animations: [
                __WEBPACK_IMPORTED_MODULE_0__animations__["a" /* statusChange */]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/projects/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return markedTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return itemStateTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return slideStateTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return listStateTrigger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var markedTrigger = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* trigger */])('markedState', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* state */])('default', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
        border: '1px solid black',
        backgroundColor: 'transparent',
        padding: '20px'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* state */])('marked', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
        border: '2px solid blue',
        backgroundColor: '#caeff9',
        padding: '19px'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* transition */])('default => marked', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
            border: '2px solid black',
            padding: '19px',
            transform: 'scale(1)'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('200ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
            transform: 'scale(1.05)'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(200)
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* transition */])('marked => default', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
            border: '1px solid black',
            padding: '20px'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out')
    ])
    // transition('marked => default', animate('300ms ease-out'))
]);
var itemStateTrigger = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* trigger */])('itemState', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* transition */])(':leave', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* keyframes */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
                opacity: 1,
                transform: 'translateX(0)'
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
                opacity: 1,
                transform: 'translateX(-15%)'
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
                opacity: 0,
                transform: 'translateX(100%)'
            })
        ]))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* transition */])('slidUp => slidDown', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
            transform: 'translateY(-100%)'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
            transform: 'translateY(0)'
        }))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* transition */])('slidDown => slidUp', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
            transform: 'translateY(0)'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
            transform: 'translateY(-100%)'
        }))
    ])
]);
var slideStateTrigger = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* trigger */])('slideState', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* transition */])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
            transform: 'translateY(-100%)'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
            transform: 'translateY(0)'
        }))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* transition */])(':leave', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
            transform: 'translateY(0)'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
            transform: 'translateY(-100%)'
        }))
    ])
]);
var listStateTrigger = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* trigger */])('listState', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* transition */])('* => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* stagger */])(400, [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('800ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* keyframes */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
                        opacity: 1,
                        transform: 'translateX(15%)',
                        offset: 0.8
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
                        opacity: 1,
                        transform: 'translateX(0)',
                        offset: 1
                    })
                ]))
            ]),
        ], { optional: true })
    ])
]);


/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n}\n\n.inactive {\n  border: 1px solid #ccc;\n}\n\n.marked {\n  border: 2px solid blue;\n  -webkit-animation: marked 0.5s ease-out forwards;\n          animation: marked 0.5s ease-out forwards;\n}\n\n@-webkit-keyframes marked {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    -webkit-transform: scale(1.02);\n            transform: scale(1.02);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@keyframes marked {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    -webkit-transform: scale(1.02);\n            transform: scale(1.02);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n\n\n.loading-bar {\n  width: 200px;\n  height:20px;\n  border:1px solid black;\n  margin: auto;\n  box-sizing: content-box;\n}\n\n.loading-bar-element {\n  width: 0;\n  height:20px;\n  background-color: deepskyblue;\n  -webkit-animation: loading 1s ease-out infinite;\n          animation: loading 1s ease-out infinite;\n}\n\n@-webkit-keyframes loading {\n  0% {\n    width: 0;\n  }\n  100% {\n    width:100%;\n  }\n}\n\n@keyframes loading {\n  0% {\n    width: 0;\n  }\n  100% {\n    width:100%;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h3>My Projects</h3>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <button\n      class=\"btn btn-default\"\n      *ngIf=\"!createNew\"\n      (click)=\"createNew = true\">Create new Project</button>\n    <button\n      class=\"btn btn-danger\"\n      *ngIf=\"createNew\"\n      (click)=\"createNew = false\">Cancel</button>\n  </div>\n</div>\n<br /><br />\n<div class=\"row\">\n  <div class=\"col-xs-12\" style=\"overflow: hidden\">\n    <app-new-project\n      *ngIf=\"createNew\"\n      (projectCreated)=\"onProjectCreated($event)\"\n      @slideState\n      (creationCancelled)=\"createNew = false\"></app-new-project>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <div\n      class=\"loading-bar\"\n      *ngIf=\"!projects\">\n      <div\n        class=\"loading-bar-element\"\n        *ngIf=\"progress != 'finished'\"></div>\n    </div>\n      <div [@listState]=\"projects?.length\">\n        <app-project\n          *ngFor=\"let prj of projects; let i = index\"\n          [project]=\"prj\"\n          [@markedState]=\"markedPrjIndex === i ? 'marked' : 'default'\"\n          [@itemState]=\"createNew ? 'slidDown' : 'slidUp'\"\n          [ngClass]=\"{inactive: prj.status === 'inactive'}\"\n          (statusUpdated)=\"onStatusUpdated($event, i)\"\n          (projectDeleted)=\"onProjectDeleted(i)\"\n          (click)=\"markedPrjIndex = i\"></app-project>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_route_animations__ = __webpack_require__("../../../../../src/app/shared/route-animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_service__ = __webpack_require__("../../../../../src/app/projects/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations__ = __webpack_require__("../../../../../src/app/projects/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsComponent = (function () {
    function ProjectsComponent(prjService) {
        this.prjService = prjService;
        this.routeAnimation = true;
        this.markedPrjIndex = 0;
        this.progress = 'progressing';
        this.createNew = false;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prjService.loadProjects()
            .subscribe(function (prj) {
            _this.progress = 'finished';
            _this.projects = prj;
        });
    };
    ProjectsComponent.prototype.onStatusUpdated = function (newStatus, id) {
        this.projects[id].status = newStatus;
    };
    ProjectsComponent.prototype.onProjectDeleted = function (index) {
        console.log(index);
        this.projects.splice(index, 1);
        console.dir(this.projects);
    };
    ProjectsComponent.prototype.onProjectCreated = function (project) {
        var _this = this;
        this.createNew = false;
        setTimeout(function () {
            _this.projects.push(project);
        }, 300);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* HostBinding */])('@routeSlideState'),
        __metadata("design:type", Object)
    ], ProjectsComponent.prototype, "routeAnimation", void 0);
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")],
            animations: [
                __WEBPACK_IMPORTED_MODULE_3__animations__["c" /* markedTrigger */],
                __WEBPACK_IMPORTED_MODULE_3__animations__["a" /* itemStateTrigger */],
                __WEBPACK_IMPORTED_MODULE_3__animations__["d" /* slideStateTrigger */],
                // routeFadeStateTrigger,
                __WEBPACK_IMPORTED_MODULE_0__shared_route_animations__["b" /* routeSlideStateTrigger */],
                __WEBPACK_IMPORTED_MODULE_3__animations__["b" /* listStateTrigger */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__projects_service__["a" /* ProjectsService */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/projects/projects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");

var ProjectsService = (function () {
    function ProjectsService() {
        this.projects = [
            { name: 'Learn Angular Styles', description: 'Practice hard to understand how you may style components and update styles dynamically', status: 'active' },
            { name: 'Learn Angular Animations', description: 'Learn how Angular helps with animating elements on your page', status: 'active' },
            { name: 'Understanding Angular Basics', description: 'Understand what Angular is, how it works and how and when you might use it', status: 'inactive' },
            { name: 'Learn JavaScript, HTML and CSS', description: 'Absolutely required to dive deep into Angular and all its features', status: 'critical' },
        ];
    }
    ProjectsService.prototype.loadProjects = function () {
        var _this = this;
        var prjLoader = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            setTimeout(function () {
                observer.next(_this.projects);
            }, 2000);
        });
        return prjLoader;
    };
    return ProjectsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/route-animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routeFadeStateTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routeSlideStateTrigger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var fadeAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animation */])([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
        opacity: '{{ startOpacity }}'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('{{ duration }}')
], { params: { startOpacity: 0, duration: '100ms' } }); /*duration precisa ser '100ms' nao pode ser apenas 100 */
var routeFadeStateTrigger = function (params) { return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* trigger */])('routeFadeState', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* transition */])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* useAnimation */])(fadeAnimation, { params: params })
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* transition */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(300, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
        opacity: 0
    }))),
]); };
var routeSlideStateTrigger = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* trigger */])('routeSlideState', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* transition */])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
            transform: 'translateY(-100%)',
            opacity: 0
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(300)
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* transition */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* style */])({
        opacity: 0
    })),
]);


/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Manage your Users</h3>\n<ul\n  class=\"list-group\">\n  <li class=\"list-group-item\">Max</li>\n  <li class=\"list-group-item\">Anna</li>\n  <li class=\"list-group-item\">Chris</li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_route_animations__ = __webpack_require__("../../../../../src/app/shared/route-animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = (function () {
    function UsersComponent() {
        // @HostBinding('@routeSlideState') routeAnimation = true;
        this.routeAnimation = true;
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('@routeFadeState'),
        __metadata("design:type", Object)
    ], UsersComponent.prototype, "routeAnimation", void 0);
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/users.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__shared_route_animations__["a" /* routeFadeStateTrigger */])({ startOpacity: 0, duration: '2500ms' }),
                __WEBPACK_IMPORTED_MODULE_1__shared_route_animations__["b" /* routeSlideStateTrigger */]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
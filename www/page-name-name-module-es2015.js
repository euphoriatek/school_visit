(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-name-name-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/name/name.page.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/name/name.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n\n\t<div class =\"background\">\n\t\t<div class=\"logo\">\n\t\t\t<img src=\"./assets/image/logo.png\" alt=\"logo\">\n\t\t</div>\n\t\t<h1 class=\"title\">What is your name</h1>\n\n\t\t<div class=\"log_content\">\n\t\t\t<ion-item>\n\t\t\t\t<ion-input placeholder=\"Name \" class=\"input\"></ion-input>\n\t\t\t</ion-item>\n\n\t\t</div>\n\n\t\t<div class=\"ion-padding bothbtn\">\n\t\t\t<ion-button expand=\"block\" type=\"submit\" class=\"btn1\" [routerLink]=\"['/where']\">Next</ion-button>\n\t\t\t<ion-button expand=\"block\" type=\"submit\" class=\"btn2\" [routerLink]=\"['/contract']\">Back</ion-button>\n\t\t</div>\n\n\t</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/name/name-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/page/name/name-routing.module.ts ***!
  \**************************************************/
/*! exports provided: NamePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamePageRoutingModule", function() { return NamePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _name_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./name.page */ "./src/app/page/name/name.page.ts");




const routes = [
    {
        path: '',
        component: _name_page__WEBPACK_IMPORTED_MODULE_3__["NamePage"]
    }
];
let NamePageRoutingModule = class NamePageRoutingModule {
};
NamePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NamePageRoutingModule);



/***/ }),

/***/ "./src/app/page/name/name.module.ts":
/*!******************************************!*\
  !*** ./src/app/page/name/name.module.ts ***!
  \******************************************/
/*! exports provided: NamePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamePageModule", function() { return NamePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _name_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./name-routing.module */ "./src/app/page/name/name-routing.module.ts");
/* harmony import */ var _name_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./name.page */ "./src/app/page/name/name.page.ts");








let NamePageModule = class NamePageModule {
};
NamePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _name_routing_module__WEBPACK_IMPORTED_MODULE_6__["NamePageRoutingModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["IonicStorageModule"].forRoot()
        ],
        declarations: [_name_page__WEBPACK_IMPORTED_MODULE_7__["NamePage"]]
    })
], NamePageModule);



/***/ }),

/***/ "./src/app/page/name/name.page.scss":
/*!******************************************!*\
  !*** ./src/app/page/name/name.page.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background: url(\"/assets/image/background.png\") no-repeat;\n  background-size: 100% 100%;\n  display: block;\n}\n\n.logo {\n  max-width: 80px;\n  margin: 0 auto;\n  padding: 70px 0 40px;\n}\n\n.title {\n  text-align: center;\n  color: #2d2626f0;\n  padding: 0 10px;\n  font-size: 18px;\n}\n\n.log_content {\n  margin: auto;\n  max-width: 400px;\n  background-color: transparent;\n}\n\n.input, .ion-input {\n  border: 2px solid #80808073;\n  border-radius: 50px;\n  padding: 0px 39px 0px 14px !important;\n  font-size: 12px !important;\n}\n\n.btn1 {\n  --background: #1d4c77de !important;\n  --border-radius: 50px !important;\n  text-transform: capitalize !important;\n  margin-top: 70px;\n  height: 38px;\n  font-size: 14px;\n}\n\n.btn2 {\n  --background: #1d4c77de !important;\n  --border-radius: 50px !important;\n  text-transform: capitalize !important;\n  margin-top: 20px;\n  height: 38px;\n  font-size: 14px;\n}\n\n.bothbtn {\n  margin: auto;\n  max-width: 500px;\n  font-size: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy92aXNpdG9yX2FwcC9zcmMvYXBwL3BhZ2UvbmFtZS9uYW1lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS9uYW1lL25hbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MseURBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUNDRDs7QURFQTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNDRDs7QURDQTtFQUNDLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NEOztBREVBO0VBRUMsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUNBRDs7QURHQTtFQUNDLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLDBCQUFBO0FDQUQ7O0FER0E7RUFDQyxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQUQ7O0FERUE7RUFDQyxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0VEIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9uYW1lL25hbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XG5cdGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZS9iYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9nb3tcblx0bWF4LXdpZHRoOiA4MHB4O1xuXHRtYXJnaW46IDAgYXV0bztcblx0cGFkZGluZzogNzBweCAwIDQwcHg7XG59XG4udGl0bGV7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRjb2xvcjogIzJkMjYyNmYwO1xuXHRwYWRkaW5nOiAwIDEwcHg7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmxvZ19jb250ZW50e1xuXG5cdG1hcmdpbjogYXV0bztcblx0bWF4LXdpZHRoOiA0MDBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5pbnB1dCAsLmlvbi1pbnB1dHtcblx0Ym9yZGVyOiAycHggc29saWQgIzgwODA4MDczO1xuXHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRwYWRkaW5nOiAwcHggMzlweCAwcHggMTRweCAhaW1wb3J0YW50O1xuXHRmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcblxufVxuLmJ0bjF7XG5cdC0tYmFja2dyb3VuZDogIzFkNGM3N2RlICFpbXBvcnRhbnQ7XG5cdC0tYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuXHRtYXJnaW4tdG9wOiA3MHB4O1xuXHRoZWlnaHQ6IDM4cHg7XG5cdGZvbnQtc2l6ZTogMTRweDtcbn1cbi5idG4ye1xuXHQtLWJhY2tncm91bmQ6ICMxZDRjNzdkZSAhaW1wb3J0YW50O1xuXHQtLWJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcblx0bWFyZ2luLXRvcDogMjBweDtcblx0aGVpZ2h0OiAzOHB4O1xuXHRmb250LXNpemU6IDE0cHg7XG59XG4uYm90aGJ0bntcblx0bWFyZ2luOiBhdXRvO1xuXHRtYXgtd2lkdGg6IDUwMHB4O1xuXHRmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn0iLCIuYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2UvYmFja2dyb3VuZC5wbmdcIikgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sb2dvIHtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNzBweCAwIDQwcHg7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyZDI2MjZmMDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5sb2dfY29udGVudCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5pbnB1dCwgLmlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4MDgwODA3MztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMHB4IDM5cHggMHB4IDE0cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4xIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMWQ0Yzc3ZGUgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIGhlaWdodDogMzhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYnRuMiB7XG4gIC0tYmFja2dyb3VuZDogIzFkNGM3N2RlICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJvdGhidG4ge1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/name/name.page.ts":
/*!****************************************!*\
  !*** ./src/app/page/name/name.page.ts ***!
  \****************************************/
/*! exports provided: NamePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamePage", function() { return NamePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");



let NamePage = class NamePage {
    constructor(storage) {
        this.storage = storage;
        this.storage.set('userDataName', this.userName);
    }
    ngOnInit() {
    }
};
NamePage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
NamePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-name',
        template: __webpack_require__(/*! raw-loader!./name.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/name/name.page.html"),
        styles: [__webpack_require__(/*! ./name.page.scss */ "./src/app/page/name/name.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
], NamePage);



/***/ })

}]);
//# sourceMappingURL=page-name-name-module-es2015.js.map
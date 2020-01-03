(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-purpose-purpose-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/purpose/purpose.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/purpose/purpose.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content>\n\t<div class =\"background\">\n\t\t<div class=\"logo\">\n\t\t\t<img src=\"./assets/image/logo.png\" alt=\"logo\">\n\t\t</div>\n\t\t<h1 class=\"title\"> What is the purpose of your visit today?</h1>\n\n\t\t<div class=\"log_content\">\n\t\t\t<ion-item>\n\t\t\t\t<ion-input placeholder=\"Reason for visit\" class=\"input\"></ion-input>\n\t\t\t</ion-item>\n\n\t\t</div>\n\n\t\t<div class=\"ion-padding bothbtn\">\n\t\t\t<ion-button expand=\"block\" type=\"submit\" class=\"btn1\" [routerLink]=\"['/camera']\">Next</ion-button>\n\t\t\t<ion-button expand=\"block\" type=\"submit\" class=\"btn2\" [routerLink]=\"['/yourname']\">Back</ion-button>\n\t\t</div>\n\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/purpose/purpose-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/page/purpose/purpose-routing.module.ts ***!
  \********************************************************/
/*! exports provided: PurposePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurposePageRoutingModule", function() { return PurposePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _purpose_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purpose.page */ "./src/app/page/purpose/purpose.page.ts");




const routes = [
    {
        path: '',
        component: _purpose_page__WEBPACK_IMPORTED_MODULE_3__["PurposePage"]
    }
];
let PurposePageRoutingModule = class PurposePageRoutingModule {
};
PurposePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PurposePageRoutingModule);



/***/ }),

/***/ "./src/app/page/purpose/purpose.module.ts":
/*!************************************************!*\
  !*** ./src/app/page/purpose/purpose.module.ts ***!
  \************************************************/
/*! exports provided: PurposePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurposePageModule", function() { return PurposePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _purpose_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./purpose-routing.module */ "./src/app/page/purpose/purpose-routing.module.ts");
/* harmony import */ var _purpose_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purpose.page */ "./src/app/page/purpose/purpose.page.ts");







let PurposePageModule = class PurposePageModule {
};
PurposePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _purpose_routing_module__WEBPACK_IMPORTED_MODULE_5__["PurposePageRoutingModule"]
        ],
        declarations: [_purpose_page__WEBPACK_IMPORTED_MODULE_6__["PurposePage"]]
    })
], PurposePageModule);



/***/ }),

/***/ "./src/app/page/purpose/purpose.page.scss":
/*!************************************************!*\
  !*** ./src/app/page/purpose/purpose.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background: url(\"/assets/image/background.png\") no-repeat;\n  background-size: 100% 100%;\n  display: block;\n}\n\n.logo {\n  max-width: 80px;\n  margin: 0 auto;\n  padding: 70px 0 40px;\n}\n\n.title {\n  text-align: center;\n  color: #2d2626f0;\n  padding: 0 10px;\n  font-size: 18px;\n}\n\n.log_content {\n  margin: auto;\n  max-width: 500px;\n  background-color: transparent;\n}\n\n.input, .ion-input {\n  border: 2px solid #80808073;\n  border-radius: 50px;\n  padding: 4px 57px 0px 15px !important;\n  font-size: 12px !important;\n}\n\n.btn1 {\n  --background: #1d4c77de !important;\n  --border-radius: 50px !important;\n  text-transform: capitalize !important;\n  margin-top: 80px;\n  height: 38px;\n  font-size: 14px;\n}\n\n.btn2 {\n  --background: #1d4c77de !important;\n  --border-radius: 50px !important;\n  text-transform: capitalize !important;\n  margin-top: 20px;\n  height: 38px;\n  font-size: 14px;\n}\n\n.bothbtn {\n  margin: auto;\n  max-width: 500px;\n  font-size: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy92aXNpdG9yX2FwcC9zcmMvYXBwL3BhZ2UvcHVycG9zZS9wdXJwb3NlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS9wdXJwb3NlL3B1cnBvc2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MseURBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUNDRDs7QURFQTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNDRDs7QURDQTtFQUNDLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NEOztBREVBO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUNDRDs7QURFQTtFQUNDLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUVBLDBCQUFBO0FDQUQ7O0FER0E7RUFDQyxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQUQ7O0FERUE7RUFDQyxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0VEIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9wdXJwb3NlL3B1cnBvc2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XG5cdGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZS9iYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9nb3tcblx0bWF4LXdpZHRoOiA4MHB4O1xuXHRtYXJnaW46IDAgYXV0bztcblx0cGFkZGluZzogNzBweCAwIDQwcHg7XG59XG4udGl0bGV7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRjb2xvcjogIzJkMjYyNmYwO1xuXHRwYWRkaW5nOiAwIDEwcHg7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmxvZ19jb250ZW50e1xuXHRtYXJnaW46IGF1dG87XG5cdG1heC13aWR0aDogNTAwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uaW5wdXQgLC5pb24taW5wdXR7XG5cdGJvcmRlcjogMnB4IHNvbGlkICM4MDgwODA3Mztcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0cGFkZGluZzogNHB4IDU3cHggMHB4IDE1cHggIWltcG9ydGFudDtcblxuXHRmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcblxufVxuLmJ0bjF7XG5cdC0tYmFja2dyb3VuZDogIzFkNGM3N2RlICFpbXBvcnRhbnQ7XG5cdC0tYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuXHRtYXJnaW4tdG9wOiA4MHB4O1xuXHRoZWlnaHQ6IDM4cHg7XG5cdGZvbnQtc2l6ZTogMTRweDtcbn1cbi5idG4ye1xuXHQtLWJhY2tncm91bmQ6ICMxZDRjNzdkZSAhaW1wb3J0YW50O1xuXHQtLWJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcblx0bWFyZ2luLXRvcDogMjBweDtcblx0aGVpZ2h0OiAzOHB4O1xuXHRmb250LXNpemU6IDE0cHg7XG59XG4uYm90aGJ0bntcblx0bWFyZ2luOiBhdXRvO1xuXHRtYXgtd2lkdGg6IDUwMHB4O1xuXHRmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cblxuXG5cblxuIiwiLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlL2JhY2tncm91bmQucG5nXCIpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9nbyB7XG4gIG1heC13aWR0aDogODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDcwcHggMCA0MHB4O1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMmQyNjI2ZjA7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubG9nX2NvbnRlbnQge1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uaW5wdXQsIC5pb24taW5wdXQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjODA4MDgwNzM7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDRweCA1N3B4IDBweCAxNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuXG4uYnRuMSB7XG4gIC0tYmFja2dyb3VuZDogIzFkNGM3N2RlICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJ0bjIge1xuICAtLWJhY2tncm91bmQ6ICMxZDRjNzdkZSAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5ib3RoYnRuIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/purpose/purpose.page.ts":
/*!**********************************************!*\
  !*** ./src/app/page/purpose/purpose.page.ts ***!
  \**********************************************/
/*! exports provided: PurposePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurposePage", function() { return PurposePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PurposePage = class PurposePage {
    constructor() { }
    ngOnInit() {
    }
};
PurposePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-purpose',
        template: __webpack_require__(/*! raw-loader!./purpose.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/purpose/purpose.page.html"),
        styles: [__webpack_require__(/*! ./purpose.page.scss */ "./src/app/page/purpose/purpose.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PurposePage);



/***/ })

}]);
//# sourceMappingURL=page-purpose-purpose-module-es2015.js.map
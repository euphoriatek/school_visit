(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-yourname-yourname-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/yourname/yourname.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/yourname/yourname.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content>\n\t<div class =\"background\">\n\t\t<div class=\"logo\">\n\t\t\t<img src=\"./assets/image/logo.png\" alt=\"logo\">\n\t\t</div>\n\t\t<h1 class=\"title\">Who are you visiting today?</h1>\n\n\t\t<div class=\"log_content\">\n\t\t\t<ion-item>\n\t\t\t\t<ion-input placeholder=\"please input name of person you are visiting\" class=\"input\"></ion-input>\n\t\t\t</ion-item>\n\n\t\t</div>\n\n\t\t<div class=\"ion-padding bothbtn\">\n\t\t\t<ion-button expand=\"block\" type=\"submit\" class=\"btn1\" [routerLink]=\"['/purpose']\">Next</ion-button>\n\t\t\t<ion-button expand=\"block\" type=\"submit\" class=\"btn2\" [routerLink]=\"['/work-with-child']\">Back</ion-button>\n\t\t</div>\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/yourname/yourname-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/page/yourname/yourname-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: YournamePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YournamePageRoutingModule", function() { return YournamePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _yourname_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./yourname.page */ "./src/app/page/yourname/yourname.page.ts");




var routes = [
    {
        path: '',
        component: _yourname_page__WEBPACK_IMPORTED_MODULE_3__["YournamePage"]
    }
];
var YournamePageRoutingModule = /** @class */ (function () {
    function YournamePageRoutingModule() {
    }
    YournamePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], YournamePageRoutingModule);
    return YournamePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/page/yourname/yourname.module.ts":
/*!**************************************************!*\
  !*** ./src/app/page/yourname/yourname.module.ts ***!
  \**************************************************/
/*! exports provided: YournamePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YournamePageModule", function() { return YournamePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _yourname_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./yourname-routing.module */ "./src/app/page/yourname/yourname-routing.module.ts");
/* harmony import */ var _yourname_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./yourname.page */ "./src/app/page/yourname/yourname.page.ts");







var YournamePageModule = /** @class */ (function () {
    function YournamePageModule() {
    }
    YournamePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _yourname_routing_module__WEBPACK_IMPORTED_MODULE_5__["YournamePageRoutingModule"]
            ],
            declarations: [_yourname_page__WEBPACK_IMPORTED_MODULE_6__["YournamePage"]]
        })
    ], YournamePageModule);
    return YournamePageModule;
}());



/***/ }),

/***/ "./src/app/page/yourname/yourname.page.scss":
/*!**************************************************!*\
  !*** ./src/app/page/yourname/yourname.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background: url(\"/assets/image/background.png\") no-repeat;\n  background-size: 100% 100%;\n  display: block;\n}\n\n.logo {\n  max-width: 80px;\n  margin: 0 auto;\n  padding: 70px 0 40px;\n}\n\n.title {\n  text-align: center;\n  color: #2d2626f0;\n  padding: 0 10px;\n  font-size: 18px;\n}\n\n.log_content {\n  margin: auto;\n  max-width: 400px;\n  background-color: transparent;\n}\n\n.input, .ion-input {\n  border: 2px solid #80808073;\n  border-radius: 50px;\n  padding: 0px 20px 0px 16px !important;\n  font-size: 12px !important;\n}\n\n.btn1 {\n  --background: #1d4c77de !important;\n  --border-radius: 50px !important;\n  text-transform: capitalize !important;\n  margin-top: 80px;\n  height: 38px;\n  font-size: 14px;\n}\n\n.btn2 {\n  --background: #1d4c77de !important;\n  --border-radius: 50px !important;\n  text-transform: capitalize !important;\n  margin-top: 20px;\n  height: 38px;\n  font-size: 14px;\n}\n\n.bothbtn {\n  margin: auto;\n  max-width: 500px;\n  font-size: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy92aXNpdG9yX2FwcC9zcmMvYXBwL3BhZ2UveW91cm5hbWUveW91cm5hbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlL3lvdXJuYW1lL3lvdXJuYW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHlEQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDQ0Q7O0FERUE7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7RUFDQSxnQkFBQTtFQUVBLDZCQUFBO0FDQUQ7O0FER0E7RUFDQywyQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSwwQkFBQTtBQ0FEOztBREVBO0VBQ0Msa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NEOztBRENBO0VBQ0Msa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0VEOztBREFBO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNHRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2UveW91cm5hbWUveW91cm5hbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XG5cdGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZS9iYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9nb3tcblx0bWF4LXdpZHRoOiA4MHB4O1xuXHRtYXJnaW46IDAgYXV0bztcblx0cGFkZGluZzogNzBweCAwIDQwcHg7XG59XG4udGl0bGV7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRjb2xvcjogIzJkMjYyNmYwO1xuXHRwYWRkaW5nOiAwIDEwcHg7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmxvZ19jb250ZW50e1xuXHRtYXJnaW46IGF1dG87XG5cdG1heC13aWR0aDogNDAwcHg7XG5cdFxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmlucHV0ICwuaW9uLWlucHV0e1xuXHRib3JkZXI6IDJweCBzb2xpZCAjODA4MDgwNzM7XG5cdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdHBhZGRpbmc6IDBweCAyMHB4IDBweCAxNnB4ICFpbXBvcnRhbnQ7XG5cdGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuLmJ0bjF7XG5cdC0tYmFja2dyb3VuZDogIzFkNGM3N2RlICFpbXBvcnRhbnQ7XG5cdC0tYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuXHRtYXJnaW4tdG9wOiA4MHB4O1xuXHRoZWlnaHQ6IDM4cHg7XG5cdGZvbnQtc2l6ZTogMTRweDtcbn1cbi5idG4ye1xuXHQtLWJhY2tncm91bmQ6ICMxZDRjNzdkZSAhaW1wb3J0YW50O1xuXHQtLWJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcblx0bWFyZ2luLXRvcDogMjBweDtcblx0aGVpZ2h0OiAzOHB4O1xuXHRmb250LXNpemU6IDE0cHg7XG59XG4uYm90aGJ0bntcblx0bWFyZ2luOiBhdXRvO1xuXHRtYXgtd2lkdGg6IDUwMHB4O1xuXHRmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn0iLCIuYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2UvYmFja2dyb3VuZC5wbmdcIikgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sb2dvIHtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNzBweCAwIDQwcHg7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyZDI2MjZmMDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5sb2dfY29udGVudCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5pbnB1dCwgLmlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4MDgwODA3MztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMHB4IDIwcHggMHB4IDE2cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4xIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMWQ0Yzc3ZGUgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIGhlaWdodDogMzhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYnRuMiB7XG4gIC0tYmFja2dyb3VuZDogIzFkNGM3N2RlICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJvdGhidG4ge1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/yourname/yourname.page.ts":
/*!************************************************!*\
  !*** ./src/app/page/yourname/yourname.page.ts ***!
  \************************************************/
/*! exports provided: YournamePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YournamePage", function() { return YournamePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var YournamePage = /** @class */ (function () {
    function YournamePage() {
    }
    YournamePage.prototype.ngOnInit = function () {
    };
    YournamePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-yourname',
            template: __webpack_require__(/*! raw-loader!./yourname.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/yourname/yourname.page.html"),
            styles: [__webpack_require__(/*! ./yourname.page.scss */ "./src/app/page/yourname/yourname.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], YournamePage);
    return YournamePage;
}());



/***/ })

}]);
//# sourceMappingURL=page-yourname-yourname-module-es5.js.map
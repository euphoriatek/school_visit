(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-ty-enjoyday-ty-enjoyday-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/ty-enjoyday/ty-enjoyday.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/ty-enjoyday/ty-enjoyday.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content>\n\t<div class =\"background\">\n\t\t<div class=\"logo\">\n\t\t\t<img src=\"./assets/image/logo.png\" alt=\"logo\" [routerLink]=\"['/logout']\">\n\t\t</div>\n\t\t<div class=\"main_img\">\n\n\t\t\t<img src=\"./assets/image/enjoyday.png\" alt=\"login\" >\n\t\t</div>\n\n\t\t<div class=\"bothbtn\">\n\t\t\t<div class=\"content\">\n\t\t\t\tThanks for singning Out.<br>\n\t\t\t\tEnjoy Your Day<br>\n\t\t\t\t<!-- <ion-button type=\"submit\" [routerLink]=\"['/login']\" class=\"again\"> Agian login</ion-button> -->\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/ty-enjoyday/ty-enjoyday-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/page/ty-enjoyday/ty-enjoyday-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: TyEnjoydayPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TyEnjoydayPageRoutingModule", function() { return TyEnjoydayPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ty_enjoyday_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ty-enjoyday.page */ "./src/app/page/ty-enjoyday/ty-enjoyday.page.ts");




var routes = [
    {
        path: '',
        component: _ty_enjoyday_page__WEBPACK_IMPORTED_MODULE_3__["TyEnjoydayPage"]
    }
];
var TyEnjoydayPageRoutingModule = /** @class */ (function () {
    function TyEnjoydayPageRoutingModule() {
    }
    TyEnjoydayPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TyEnjoydayPageRoutingModule);
    return TyEnjoydayPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/page/ty-enjoyday/ty-enjoyday.module.ts":
/*!********************************************************!*\
  !*** ./src/app/page/ty-enjoyday/ty-enjoyday.module.ts ***!
  \********************************************************/
/*! exports provided: TyEnjoydayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TyEnjoydayPageModule", function() { return TyEnjoydayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ty_enjoyday_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ty-enjoyday-routing.module */ "./src/app/page/ty-enjoyday/ty-enjoyday-routing.module.ts");
/* harmony import */ var _ty_enjoyday_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ty-enjoyday.page */ "./src/app/page/ty-enjoyday/ty-enjoyday.page.ts");







var TyEnjoydayPageModule = /** @class */ (function () {
    function TyEnjoydayPageModule() {
    }
    TyEnjoydayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ty_enjoyday_routing_module__WEBPACK_IMPORTED_MODULE_5__["TyEnjoydayPageRoutingModule"]
            ],
            declarations: [_ty_enjoyday_page__WEBPACK_IMPORTED_MODULE_6__["TyEnjoydayPage"]]
        })
    ], TyEnjoydayPageModule);
    return TyEnjoydayPageModule;
}());



/***/ }),

/***/ "./src/app/page/ty-enjoyday/ty-enjoyday.page.scss":
/*!********************************************************!*\
  !*** ./src/app/page/ty-enjoyday/ty-enjoyday.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background: url(\"/assets/image/background.png\") no-repeat;\n  background-size: 100% 100%;\n  display: block;\n}\n\n.logo {\n  max-width: 80px;\n  margin: 0 auto;\n  padding: 70px 0 40px;\n}\n\n.content {\n  text-align: center;\n  color: #2d2626f0;\n  padding: 10px 18px 15px 31px;\n  font-size: 15px;\n  background: #b8b9dc59;\n}\n\n.main_img {\n  margin: auto;\n  padding: 15px;\n  text-align: center;\n  max-width: 200px;\n}\n\n.bothbtn {\n  margin: auto;\n  max-width: 300px;\n  text-align: center;\n  font-size: 10px !important;\n}\n\n.again {\n  padding: 2px;\n  text-align: center;\n  max-width: 194px;\n  font-size: 12px;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy92aXNpdG9yX2FwcC9zcmMvYXBwL3BhZ2UvdHktZW5qb3lkYXkvdHktZW5qb3lkYXkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlL3R5LWVuam95ZGF5L3R5LWVuam95ZGF5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHlEQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDQ0Q7O0FERUE7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDQ0Q7O0FESUE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNERDs7QURPQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0pEOztBRE1BO0VBRUMsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQ0pEOztBRE1BO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNIRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvdHktZW5qb3lkYXkvdHktZW5qb3lkYXkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XG5cdGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZS9iYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9nb3tcblx0bWF4LXdpZHRoOiA4MHB4O1xuXHRtYXJnaW46IDAgYXV0bztcblx0cGFkZGluZzogNzBweCAwIDQwcHg7XG5cbn1cblxuXG4uY29udGVudHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRjb2xvcjogIzJkMjYyNmYwO1xuXHRwYWRkaW5nOiAxMHB4IDE4cHggMTVweCAzMXB4O1xuXHRmb250LXNpemU6IDE1cHg7XG5cdGJhY2tncm91bmQ6ICNiOGI5ZGM1OTtcblx0XG5cblxuXG59XG4ubWFpbl9pbWd7XG5cdG1hcmdpbjogYXV0bztcblx0cGFkZGluZzogMTVweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXgtd2lkdGg6IDIwMHB4O1xufVxuLmJvdGhidG57XG5cdC8vcGFkZGluZzoxMXB4IDMxcHggMTAwcHggN3B4O1xuXHRtYXJnaW46IGF1dG87XG5cdG1heC13aWR0aDogMzAwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4uYWdhaW57XG5cdHBhZGRpbmc6IDJweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXgtd2lkdGg6IDE5NHB4O1xuXHRmb250LXNpemU6IDEycHg7XG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXG59IiwiLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlL2JhY2tncm91bmQucG5nXCIpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9nbyB7XG4gIG1heC13aWR0aDogODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDcwcHggMCA0MHB4O1xufVxuXG4uY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyZDI2MjZmMDtcbiAgcGFkZGluZzogMTBweCAxOHB4IDE1cHggMzFweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjYjhiOWRjNTk7XG59XG5cbi5tYWluX2ltZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDIwMHB4O1xufVxuXG4uYm90aGJ0biB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmFnYWluIHtcbiAgcGFkZGluZzogMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC13aWR0aDogMTk0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59Il19 */"

/***/ }),

/***/ "./src/app/page/ty-enjoyday/ty-enjoyday.page.ts":
/*!******************************************************!*\
  !*** ./src/app/page/ty-enjoyday/ty-enjoyday.page.ts ***!
  \******************************************************/
/*! exports provided: TyEnjoydayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TyEnjoydayPage", function() { return TyEnjoydayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TyEnjoydayPage = /** @class */ (function () {
    function TyEnjoydayPage() {
    }
    TyEnjoydayPage.prototype.ngOnInit = function () {
    };
    TyEnjoydayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ty-enjoyday',
            template: __webpack_require__(/*! raw-loader!./ty-enjoyday.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/ty-enjoyday/ty-enjoyday.page.html"),
            styles: [__webpack_require__(/*! ./ty-enjoyday.page.scss */ "./src/app/page/ty-enjoyday/ty-enjoyday.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TyEnjoydayPage);
    return TyEnjoydayPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-ty-enjoyday-ty-enjoyday-module-es5.js.map
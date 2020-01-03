(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-confirm-sign-confirm-sign-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/confirm-sign/confirm-sign.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/confirm-sign/confirm-sign.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content>\n\n\t<div class =\"background\">\n\t\t<div class=\"logo\">\n\t\t\t<img src=\"./assets/image/logo.png\" alt=\"logo\">\n\t\t</div>\n\n\t\t<div class=\"main_img\">\n\n\t\t\t<img src=\"./assets/image/signcnfrm.png\" alt=\"login\" >\n\t\t</div>\n\n\t\t<h1 class=\"title\">Would you like to Sign In or SignOut</h1>\n\t\t<div class=\"ion-padding bothbtn\">\n\t\t\t<ion-button  expand=\"block\" type=\"submit\" class=\"btn1 mt-20\" [routerLink]=\"['/contract']\">Sign In</ion-button>\n\t\t\t<ion-button expand=\"block\" type=\"submit\" class=\"btn2 mt-20\" [routerLink]=\"['/scan-code']\">Sign Out</ion-button> \n\t\t</div>\n\n\t</div>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/confirm-sign/confirm-sign-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/page/confirm-sign/confirm-sign-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ConfirmSignPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmSignPageRoutingModule", function() { return ConfirmSignPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _confirm_sign_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-sign.page */ "./src/app/page/confirm-sign/confirm-sign.page.ts");




var routes = [
    {
        path: '',
        component: _confirm_sign_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmSignPage"]
    }
];
var ConfirmSignPageRoutingModule = /** @class */ (function () {
    function ConfirmSignPageRoutingModule() {
    }
    ConfirmSignPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ConfirmSignPageRoutingModule);
    return ConfirmSignPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/page/confirm-sign/confirm-sign.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/page/confirm-sign/confirm-sign.module.ts ***!
  \**********************************************************/
/*! exports provided: ConfirmSignPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmSignPageModule", function() { return ConfirmSignPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _confirm_sign_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-sign-routing.module */ "./src/app/page/confirm-sign/confirm-sign-routing.module.ts");
/* harmony import */ var _confirm_sign_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm-sign.page */ "./src/app/page/confirm-sign/confirm-sign.page.ts");







var ConfirmSignPageModule = /** @class */ (function () {
    function ConfirmSignPageModule() {
    }
    ConfirmSignPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _confirm_sign_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmSignPageRoutingModule"]
            ],
            declarations: [_confirm_sign_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmSignPage"]]
        })
    ], ConfirmSignPageModule);
    return ConfirmSignPageModule;
}());



/***/ }),

/***/ "./src/app/page/confirm-sign/confirm-sign.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/page/confirm-sign/confirm-sign.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background: url(\"/assets/image/background.png\") no-repeat;\n  background-size: 100% 100%;\n  display: block;\n}\n\n.logo {\n  max-width: 80px;\n  margin: 0 auto;\n  padding: 70px 0 40px;\n}\n\n.title {\n  text-align: center;\n  color: #2d2626f0;\n  padding: 0 10px;\n  font-size: 18px;\n}\n\n.main_img {\n  margin: auto;\n  padding: 15px;\n  text-align: center;\n  max-width: 200px;\n}\n\n.btn1 {\n  --background: #17529d !important;\n  --border-radius: 50px !important;\n  text-transform: capitalize !important;\n  margin-top: 0px;\n  height: 38px;\n  font-size: 14px;\n}\n\n.btn2 {\n  --background: #17529d !important;\n  --border-radius: 50px !important;\n  text-transform: capitalize !important;\n  margin-top: 20px;\n  height: 38px;\n  font-size: 14px;\n}\n\n.bothbtn {\n  max-width: 500px;\n  /* text-align: center; */\n  margin: auto;\n  font-size: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy92aXNpdG9yX2FwcC9zcmMvYXBwL3BhZ2UvY29uZmlybS1zaWduL2NvbmZpcm0tc2lnbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2UvY29uZmlybS1zaWduL2NvbmZpcm0tc2lnbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx5REFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0NEOztBREVBO0VBRUMsa0JBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDREQ7O0FER0E7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBRDs7QURFQTtFQUNDLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NEOztBRENBO0VBQ0MsZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0VEOztBREFBO0VBQ0MsZ0JBQUE7RUFDRyx3QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9jb25maXJtLXNpZ24vY29uZmlybS1zaWduLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5ke1xuXHRiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2UvYmFja2dyb3VuZC5wbmcnKSBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuLmxvZ297XG5cdG1heC13aWR0aDogODBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHBhZGRpbmc6IDcwcHggMCA0MHB4O1xuXG59XG4udGl0bGV7XG5cblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHQvL2ZvbnQtc2l6ZTogbGFyZ2VyO1xuXHRjb2xvcjogIzJkMjYyNmYwO1xuXHRwYWRkaW5nOiAwIDEwcHg7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cbi5tYWluX2ltZ3tcblx0bWFyZ2luOiBhdXRvO1xuXHRwYWRkaW5nOiAxNXB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1heC13aWR0aDogMjAwcHg7XG59XG4uYnRuMXtcblx0LS1iYWNrZ3JvdW5kOiAjMTc1MjlkICFpbXBvcnRhbnQ7XG5cdC0tYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuXHRtYXJnaW4tdG9wOiAwcHg7XG5cdGhlaWdodDogMzhweDtcblx0Zm9udC1zaXplOiAxNHB4O1xufVxuLmJ0bjJ7XG5cdC0tYmFja2dyb3VuZDogIzE3NTI5ZCAhaW1wb3J0YW50O1xuXHQtLWJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcblx0bWFyZ2luLXRvcDogMjBweDtcblx0aGVpZ2h0OiAzOHB4O1xuXHRmb250LXNpemU6IDE0cHg7XG59XG4uYm90aGJ0bntcblx0bWF4LXdpZHRoOiA1MDBweDtcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4iLCIuYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2UvYmFja2dyb3VuZC5wbmdcIikgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sb2dvIHtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNzBweCAwIDQwcHg7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyZDI2MjZmMDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5tYWluX2ltZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDIwMHB4O1xufVxuXG4uYnRuMSB7XG4gIC0tYmFja2dyb3VuZDogIzE3NTI5ZCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJ0bjIge1xuICAtLWJhY2tncm91bmQ6ICMxNzUyOWQgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGhlaWdodDogMzhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYm90aGJ0biB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/confirm-sign/confirm-sign.page.ts":
/*!********************************************************!*\
  !*** ./src/app/page/confirm-sign/confirm-sign.page.ts ***!
  \********************************************************/
/*! exports provided: ConfirmSignPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmSignPage", function() { return ConfirmSignPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfirmSignPage = /** @class */ (function () {
    function ConfirmSignPage() {
    }
    ConfirmSignPage.prototype.ngOnInit = function () {
    };
    ConfirmSignPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-sign',
            template: __webpack_require__(/*! raw-loader!./confirm-sign.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/confirm-sign/confirm-sign.page.html"),
            styles: [__webpack_require__(/*! ./confirm-sign.page.scss */ "./src/app/page/confirm-sign/confirm-sign.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfirmSignPage);
    return ConfirmSignPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-confirm-sign-confirm-sign-module-es5.js.map
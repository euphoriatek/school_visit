(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/login/login.page.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/login/login.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content>\n\t<div class =\"background\">\n\t\t<div class=\"logo\">\n\t\t\t<img src=\"./assets/image/logo.png\" alt=\"logo\">\n\t\t</div>\n\t\t<div class=\"main_img\">\n\n\t\t\t<img src=\"./assets/image/login_img.png\" alt=\"login\" >\n\t\t</div>\n\n\n\n\t\t<div class=\"log_content\">\n\t\t\t<div>\n\t\t\t\t<h1 class=\"title\">Log in</h1>\n\t\t\t</div>\n\t\t\t<ion-item>\n\t\t\t\t<ion-input placeholder=\"Username\" class=\"input\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-input type=\"password\" placeholder=\"Password\" class=\"input\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<div class=\"ion-padding\">\n\t\t\t\t<ion-button expand=\"block\" type=\"submit\" class=\"btn\" [routerLink]=\"['/confirm-sign']\">Log in</ion-button>\n\t\t\t</div>\n\n\t\t\t<h6 class=\"text\">Forgot Password?</h6> \n\t\t</div> \n\t</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/login/login-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/page/login/login-routing.module.ts ***!
  \****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/page/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/page/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/page/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/page/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/page/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/page/login/login.page.scss":
/*!********************************************!*\
  !*** ./src/app/page/login/login.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  text-align: center;\n  color: #2d2626f0;\n  padding: 0 10px;\n  font-size: 18px;\n}\n\n.background {\n  background: url(\"/assets/image/background.png\") no-repeat;\n  background-size: 100% 100%;\n  display: block;\n}\n\n.logo {\n  max-width: 80px;\n  margin: 0 auto;\n  padding: 70px 0 40px;\n}\n\n.main_img {\n  margin: auto;\n  padding: 0px;\n  text-align: center;\n  max-width: 150px;\n}\n\n.log_content {\n  max-width: 500px;\n  margin: auto;\n  text-align: center;\n  background-color: transparent;\n}\n\n.input, .ion-input {\n  border: 2px solid #80808073;\n  border-radius: 50px;\n  padding: 0px 16px !important;\n  margin-top: 6px;\n  font-size: 12px !important;\n}\n\n.btn {\n  --background: #17529d !important;\n  --border-radius: 50px !important;\n  font-size: 15px !important;\n  text-transform: lowercase !important;\n  height: 38px;\n  font-size: 14px;\n}\n\nh6 {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-weight: 400;\n  line-height: 0.2;\n  text-align: center;\n  font-size: 12px;\n  color: #808080;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy92aXNpdG9yX2FwcC9zcmMvYXBwL3BhZ2UvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0FEOztBREdBO0VBQ0MseURBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUNBRDs7QURJQTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNERDs7QURJQTtFQUNDLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0REOztBRElBO0VBRUMsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQ0ZEOztBREtBO0VBQ0MsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FDRkQ7O0FES0E7RUFDQyxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRkQ7O0FETUE7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0hEIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Ly9mb250LXNpemU6IGxhcmdlcjtcblx0Y29sb3I6ICMyZDI2MjZmMDtcblx0cGFkZGluZzogMCAxMHB4O1xuXHRmb250LXNpemU6IDE4cHg7XG59XG5cbi5iYWNrZ3JvdW5ke1xuXHRiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2UvYmFja2dyb3VuZC5wbmcnKSBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuXHRkaXNwbGF5OiBibG9jaztcblxufVxuXG4ubG9nb3tcblx0bWF4LXdpZHRoOiA4MHB4O1xuXHRtYXJnaW46IDAgYXV0bztcblx0cGFkZGluZzogNzBweCAwIDQwcHg7XG5cbn1cbi5tYWluX2ltZ3tcblx0bWFyZ2luOiBhdXRvO1xuXHRwYWRkaW5nOiAwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLmxvZ19jb250ZW50e1xuXHRcblx0bWF4LXdpZHRoOiA1MDBweDtcblx0bWFyZ2luOiBhdXRvO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uaW5wdXQgLC5pb24taW5wdXR7XG5cdGJvcmRlcjogMnB4IHNvbGlkICM4MDgwODA3Mztcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0cGFkZGluZzogMHB4IDE2cHggIWltcG9ydGFudDtcblx0bWFyZ2luLXRvcDo2cHg7XG5cdGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuXG59XG4uYnRue1xuXHQtLWJhY2tncm91bmQ6ICMxNzUyOWQgIWltcG9ydGFudDtcblx0LS1ib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG5cdGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuXHR0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG5cdGhlaWdodDogMzhweDtcblx0Zm9udC1zaXplOiAxNHB4O1xufVxuXG5cbmg2IHtcblx0bWFyZ2luLXRvcDogMHB4O1xuXHRtYXJnaW4tYm90dG9tOiAwcHg7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdGxpbmUtaGVpZ2h0OiAwLjI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRjb2xvcjogIzgwODA4MDtcbn1cblxuIiwiLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzJkMjYyNmYwO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlL2JhY2tncm91bmQucG5nXCIpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9nbyB7XG4gIG1heC13aWR0aDogODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDcwcHggMCA0MHB4O1xufVxuXG4ubWFpbl9pbWcge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuXG4ubG9nX2NvbnRlbnQge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5pbnB1dCwgLmlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4MDgwODA3MztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMHB4IDE2cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cblxuLmJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzE3NTI5ZCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmg2IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAwLjI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgwODA4MDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/login/login.page.ts":
/*!******************************************!*\
  !*** ./src/app/page/login/login.page.ts ***!
  \******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginPage = class LoginPage {
    constructor() { }
    ngOnInit() {
    }
};
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/page/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=page-login-login-module-es2015.js.map
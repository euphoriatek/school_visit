(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-work-with-child-work-with-child-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/work-with-child/work-with-child.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/work-with-child/work-with-child.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content>\n\n\t<div class=\"background\">\n\n\t\t<div class=\"logo\">\n\t\t\t<img src=\"./assets/image/logo.png\" alt=\"logo\">\n\t\t</div>\n\n\t\t<div class=\"content\">\n\t\t\tDo you have a Working with Children Check?\n\t\t</div>\n\t\t\n\t\t<div class=\"boxes\">\n\t\t\t<div class=\"box\"> \n\t\t\t\t<h1>Yes</h1>\n\t\t\t</div>\n\n\t\t\t<div class=\"box\"> \n\t\t\t\t<h1>No</h1>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"in\">\n\t\t\t<ion-item>\n\t\t\t\t<ion-input placeholder=\"Please Input Your WWCCcard Number [if 'Yes']\" class=\"input\"></ion-input>\n\t\t\t</ion-item>\n\t\t</div>\n\n\t\t<div class=\"ion-padding bothbtn\">\n\t\t\t<ion-button expand=\"block\" type=\"submit\" class=\"btn1\" [routerLink]=\"['/yourname']\">Next</ion-button>\n\t\t\t<ion-button expand=\"block\" type=\"submit\" class=\"btn2\" [routerLink]=\"['/where']\">Back</ion-button>\n\t\t</div>\n\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/work-with-child/work-with-child-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/page/work-with-child/work-with-child-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: WorkWithChildPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkWithChildPageRoutingModule", function() { return WorkWithChildPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _work_with_child_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work-with-child.page */ "./src/app/page/work-with-child/work-with-child.page.ts");




const routes = [
    {
        path: '',
        component: _work_with_child_page__WEBPACK_IMPORTED_MODULE_3__["WorkWithChildPage"]
    }
];
let WorkWithChildPageRoutingModule = class WorkWithChildPageRoutingModule {
};
WorkWithChildPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WorkWithChildPageRoutingModule);



/***/ }),

/***/ "./src/app/page/work-with-child/work-with-child.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/page/work-with-child/work-with-child.module.ts ***!
  \****************************************************************/
/*! exports provided: WorkWithChildPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkWithChildPageModule", function() { return WorkWithChildPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _work_with_child_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work-with-child-routing.module */ "./src/app/page/work-with-child/work-with-child-routing.module.ts");
/* harmony import */ var _work_with_child_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work-with-child.page */ "./src/app/page/work-with-child/work-with-child.page.ts");







let WorkWithChildPageModule = class WorkWithChildPageModule {
};
WorkWithChildPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _work_with_child_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorkWithChildPageRoutingModule"]
        ],
        declarations: [_work_with_child_page__WEBPACK_IMPORTED_MODULE_6__["WorkWithChildPage"]]
    })
], WorkWithChildPageModule);



/***/ }),

/***/ "./src/app/page/work-with-child/work-with-child.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/page/work-with-child/work-with-child.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background: url(\"/assets/image/background.png\") no-repeat;\n  background-size: 100% 100%;\n  display: block;\n}\n\n.logo {\n  max-width: 80px;\n  margin: 0 auto;\n}\n\n.content {\n  text-align: center;\n  color: #2d2626f0;\n  padding: 4px 11px 30px 9px;\n  font-size: 16px;\n}\n\n.boxes {\n  text-align: center;\n  width: 100%;\n  margin: auto;\n  max-width: 500px;\n}\n\n.box {\n  background: #c0c0c085;\n  padding: 2px 1px 7px 0px;\n  margin: 2px 132px 27px 116px;\n  max-height: 80px;\n  border-radius: 10px;\n}\n\n.in {\n  margin: auto;\n  max-width: 400px;\n  background-color: transparent;\n}\n\n.input, .ion-input {\n  border: 2px solid #80808073;\n  border-radius: 50px;\n  padding: 2px 18px !important;\n  margin-top: 10px;\n  font-size: 12px !important;\n}\n\n.btn1 {\n  --background: #1d4c77de !important;\n  --border-radius: 50px !important;\n  text-transform: capitalize !important;\n  margin-top: 0px;\n  height: 38px;\n  font-size: 14px;\n}\n\n.btn2 {\n  --background: #1d4c77de !important;\n  --border-radius: 50px !important;\n  text-transform: capitalize !important;\n  margin-top: 10px;\n  height: 38px;\n  font-size: 14px;\n}\n\n.bothbtn {\n  margin: auto;\n  max-width: 500px;\n  font-size: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy92aXNpdG9yX2FwcC9zcmMvYXBwL3BhZ2Uvd29yay13aXRoLWNoaWxkL3dvcmstd2l0aC1jaGlsZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2Uvd29yay13aXRoLWNoaWxkL3dvcmstd2l0aC1jaGlsZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx5REFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLGNBQUE7QUNDRDs7QURHQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNBRDs7QURLQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0ZEOztBREtBO0VBQ0MscUJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZEOztBREtBO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUNGRDs7QURNQTtFQUNDLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNIRDs7QURLQTtFQUNDLGtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0ZEOztBRElBO0VBQ0Msa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0REOztBREdBO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNBRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2Uvd29yay13aXRoLWNoaWxkL3dvcmstd2l0aC1jaGlsZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHtcblx0YmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlL2JhY2tncm91bmQucG5nJykgbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi5sb2dve1xuXHRtYXgtd2lkdGg6IDgwcHg7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHQvL3BhZGRpbmc6IDcwcHggMCA0MHB4O1xuXG59XG4uY29udGVudHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRjb2xvcjogIzJkMjYyNmYwO1xuXHRwYWRkaW5nOiA0cHggMTFweCAzMHB4IDlweDtcblx0Zm9udC1zaXplOiAxNnB4O1xufVxuXG5cblxuLmJveGVze1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXJnaW46IGF1dG87XG5cdG1heC13aWR0aDogNTAwcHg7XG5cdFxufVxuLmJveHtcblx0YmFja2dyb3VuZDogI2MwYzBjMDg1O1xuXHRwYWRkaW5nOiAycHggMXB4IDdweCAwcHg7XG5cdG1hcmdpbjoycHggMTMycHggMjdweCAxMTZweDtcblx0bWF4LWhlaWdodDogODBweDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmlue1xuXHRtYXJnaW46IGF1dG87XG5cdG1heC13aWR0aDogNDAwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG5cbn1cbi5pbnB1dCAsLmlvbi1pbnB1dHtcblx0Ym9yZGVyOiAycHggc29saWQgIzgwODA4MDczO1xuXHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRwYWRkaW5nOiAycHggMThweCAhaW1wb3J0YW50O1xuXHRtYXJnaW4tdG9wOjEwcHg7XG5cdGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuLmJ0bjF7XG5cdC0tYmFja2dyb3VuZDogIzFkNGM3N2RlICFpbXBvcnRhbnQ7XG5cdC0tYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuXHRtYXJnaW4tdG9wOiAwcHg7XG5cdGhlaWdodDogMzhweDtcblx0Zm9udC1zaXplOiAxNHB4O1xufVxuLmJ0bjJ7XG5cdC0tYmFja2dyb3VuZDogIzFkNGM3N2RlICFpbXBvcnRhbnQ7XG5cdC0tYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuXHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRoZWlnaHQ6IDM4cHg7XG5cdGZvbnQtc2l6ZTogMTRweDtcbn1cbi5ib3RoYnRue1xuXHRtYXJnaW46IGF1dG87XG5cdG1heC13aWR0aDogNTAwcHg7XG5cdGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufVxuIiwiLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlL2JhY2tncm91bmQucG5nXCIpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9nbyB7XG4gIG1heC13aWR0aDogODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzJkMjYyNmYwO1xuICBwYWRkaW5nOiA0cHggMTFweCAzMHB4IDlweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uYm94ZXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5ib3gge1xuICBiYWNrZ3JvdW5kOiAjYzBjMGMwODU7XG4gIHBhZGRpbmc6IDJweCAxcHggN3B4IDBweDtcbiAgbWFyZ2luOiAycHggMTMycHggMjdweCAxMTZweDtcbiAgbWF4LWhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmluIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmlucHV0LCAuaW9uLWlucHV0IHtcbiAgYm9yZGVyOiAycHggc29saWQgIzgwODA4MDczO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiAycHggMThweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cblxuLmJ0bjEge1xuICAtLWJhY2tncm91bmQ6ICMxZDRjNzdkZSAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJ0bjIge1xuICAtLWJhY2tncm91bmQ6ICMxZDRjNzdkZSAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5ib3RoYnRuIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/work-with-child/work-with-child.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/page/work-with-child/work-with-child.page.ts ***!
  \**************************************************************/
/*! exports provided: WorkWithChildPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkWithChildPage", function() { return WorkWithChildPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WorkWithChildPage = class WorkWithChildPage {
    constructor() { }
    ngOnInit() {
    }
};
WorkWithChildPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-work-with-child',
        template: __webpack_require__(/*! raw-loader!./work-with-child.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/work-with-child/work-with-child.page.html"),
        styles: [__webpack_require__(/*! ./work-with-child.page.scss */ "./src/app/page/work-with-child/work-with-child.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WorkWithChildPage);



/***/ })

}]);
//# sourceMappingURL=page-work-with-child-work-with-child-module-es2015.js.map
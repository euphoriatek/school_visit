(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-thanks-for-sign-thanks-for-sign-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/thanks-for-sign/thanks-for-sign.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/thanks-for-sign/thanks-for-sign.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n\t<div class =\"background\">\n\t\t<div class=\"logo\">\n\t\t\t<img src=\"./assets/image/logo.png\" alt=\"logo\">\n\t\t</div>\n\t\t<div class=\"main_img\">\n\n\t\t\t<img src=\"./assets/image/ty.png\" alt=\"login\" >\n\t\t</div>\n\t\t<div class=\"content\">\n\t\t\tThanks for singning in.<br>\n\t\t\tPlease take your badge. <br>\n\n\t\t</div>\n\n\t</div>\n\n\n\t\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/thanks-for-sign/thanks-for-sign-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/page/thanks-for-sign/thanks-for-sign-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ThanksForSignPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksForSignPageRoutingModule", function() { return ThanksForSignPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _thanks_for_sign_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thanks-for-sign.page */ "./src/app/page/thanks-for-sign/thanks-for-sign.page.ts");




const routes = [
    {
        path: '',
        component: _thanks_for_sign_page__WEBPACK_IMPORTED_MODULE_3__["ThanksForSignPage"]
    }
];
let ThanksForSignPageRoutingModule = class ThanksForSignPageRoutingModule {
};
ThanksForSignPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ThanksForSignPageRoutingModule);



/***/ }),

/***/ "./src/app/page/thanks-for-sign/thanks-for-sign.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/page/thanks-for-sign/thanks-for-sign.module.ts ***!
  \****************************************************************/
/*! exports provided: ThanksForSignPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksForSignPageModule", function() { return ThanksForSignPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _thanks_for_sign_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thanks-for-sign-routing.module */ "./src/app/page/thanks-for-sign/thanks-for-sign-routing.module.ts");
/* harmony import */ var _thanks_for_sign_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thanks-for-sign.page */ "./src/app/page/thanks-for-sign/thanks-for-sign.page.ts");







let ThanksForSignPageModule = class ThanksForSignPageModule {
};
ThanksForSignPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _thanks_for_sign_routing_module__WEBPACK_IMPORTED_MODULE_5__["ThanksForSignPageRoutingModule"]
        ],
        declarations: [_thanks_for_sign_page__WEBPACK_IMPORTED_MODULE_6__["ThanksForSignPage"]]
    })
], ThanksForSignPageModule);



/***/ }),

/***/ "./src/app/page/thanks-for-sign/thanks-for-sign.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/page/thanks-for-sign/thanks-for-sign.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background: url(\"/assets/image/background.png\") no-repeat;\n  background-size: 100% 100%;\n  display: block;\n}\n\n.logo {\n  max-width: 80px;\n  margin: 0 auto;\n  padding: 70px 0 40px;\n}\n\n.content {\n  text-align: center;\n  color: #2d2626f0;\n  padding: 26px 8px 100px 11px;\n  font-size: 12px;\n  margin: auto;\n  max-width: 300px;\n}\n\n.main_img {\n  margin: auto;\n  padding: 15px;\n  text-align: center;\n  max-width: 220px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy92aXNpdG9yX2FwcC9zcmMvYXBwL3BhZ2UvdGhhbmtzLWZvci1zaWduL3RoYW5rcy1mb3Itc2lnbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2UvdGhhbmtzLWZvci1zaWduL3RoYW5rcy1mb3Itc2lnbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx5REFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0NEOztBREVBO0VBRUMsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0FEOztBREVBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9wYWdlL3RoYW5rcy1mb3Itc2lnbi90aGFua3MtZm9yLXNpZ24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XG5cdGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZS9iYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9nb3tcblx0bWF4LXdpZHRoOiA4MHB4O1xuXHRtYXJnaW46IDAgYXV0bztcblx0cGFkZGluZzogNzBweCAwIDQwcHg7XG5cbn1cbi5jb250ZW50e1xuXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6ICMyZDI2MjZmMDtcblx0cGFkZGluZzogMjZweCA4cHggMTAwcHggMTFweDtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRtYXJnaW46IGF1dG87XG5cdG1heC13aWR0aDogMzAwcHg7XG59XG4ubWFpbl9pbWd7XG5cdG1hcmdpbjogYXV0bztcblx0cGFkZGluZzogMTVweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXgtd2lkdGg6IDIyMHB4O1xufVxuIiwiLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlL2JhY2tncm91bmQucG5nXCIpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9nbyB7XG4gIG1heC13aWR0aDogODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDcwcHggMCA0MHB4O1xufVxuXG4uY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyZDI2MjZmMDtcbiAgcGFkZGluZzogMjZweCA4cHggMTAwcHggMTFweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMzAwcHg7XG59XG5cbi5tYWluX2ltZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDIyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/thanks-for-sign/thanks-for-sign.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/page/thanks-for-sign/thanks-for-sign.page.ts ***!
  \**************************************************************/
/*! exports provided: ThanksForSignPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksForSignPage", function() { return ThanksForSignPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let ThanksForSignPage = class ThanksForSignPage {
    constructor(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
        setTimeout(() => {
            this.router.navigateByUrl('/info');
        }, 1000);
    }
    ngOnInit() {
    }
};
ThanksForSignPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ThanksForSignPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-thanks-for-sign',
        template: __webpack_require__(/*! raw-loader!./thanks-for-sign.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/thanks-for-sign/thanks-for-sign.page.html"),
        styles: [__webpack_require__(/*! ./thanks-for-sign.page.scss */ "./src/app/page/thanks-for-sign/thanks-for-sign.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ThanksForSignPage);



/***/ })

}]);
//# sourceMappingURL=page-thanks-for-sign-thanks-for-sign-module-es2015.js.map
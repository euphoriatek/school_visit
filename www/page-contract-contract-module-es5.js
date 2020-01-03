(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-contract-contract-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/contract/contract.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/contract/contract.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n\t<div class=\"background\">\n\n\t\t<div class=\"logo\">\n\t\t\t<img src=\"./assets/image/logo.png\" alt=\"logo\">\n\t\t</div>\n\t\t<div class=\"ion-padding bothbtn\">\n\t\t\t<div class=\"box\">\n\t\t\t\t<p>Visitor</p>\n\t\t\t</div>\n\t\t\t<div class=\"box\">\n\t\t\t\t<p>Contractor</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"ion-padding bothbtn\">\n\t\t\t<ion-button expand=\"block\" type=\"submit\" class=\"btn\" [routerLink]=\"['/name']\">Next</ion-button>\n\t\t</div>\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/contract/contract-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/page/contract/contract-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ContractPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractPageRoutingModule", function() { return ContractPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contract_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contract.page */ "./src/app/page/contract/contract.page.ts");




var routes = [
    {
        path: '',
        component: _contract_page__WEBPACK_IMPORTED_MODULE_3__["ContractPage"]
    }
];
var ContractPageRoutingModule = /** @class */ (function () {
    function ContractPageRoutingModule() {
    }
    ContractPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ContractPageRoutingModule);
    return ContractPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/page/contract/contract.module.ts":
/*!**************************************************!*\
  !*** ./src/app/page/contract/contract.module.ts ***!
  \**************************************************/
/*! exports provided: ContractPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractPageModule", function() { return ContractPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contract_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contract-routing.module */ "./src/app/page/contract/contract-routing.module.ts");
/* harmony import */ var _contract_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contract.page */ "./src/app/page/contract/contract.page.ts");







var ContractPageModule = /** @class */ (function () {
    function ContractPageModule() {
    }
    ContractPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _contract_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContractPageRoutingModule"]
            ],
            declarations: [_contract_page__WEBPACK_IMPORTED_MODULE_6__["ContractPage"]]
        })
    ], ContractPageModule);
    return ContractPageModule;
}());



/***/ }),

/***/ "./src/app/page/contract/contract.page.scss":
/*!**************************************************!*\
  !*** ./src/app/page/contract/contract.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background: url(\"/assets/image/background.png\") no-repeat;\n  background-size: 100% 100%;\n  display: block;\n}\n\n.logo {\n  max-width: 80px;\n  margin: 0 auto;\n  padding: 70px 0 40px;\n}\n\n.box {\n  background: #17529d;\n  padding: 1px 25px 4px 33px;\n  max-height: 70px;\n  text-align: center;\n  color: #fff;\n  font-size: 18px;\n  border-radius: 10px;\n  margin: 20px 80px;\n}\n\n.btn {\n  --background: #1d4c77de !important;\n  --border-radius: 50px !important;\n  text-transform: capitalize !important;\n  padding: 0px 35px;\n  height: 38px;\n  font-size: 14px;\n}\n\n.bothbtn {\n  margin: auto;\n  max-width: 500px;\n  font-size: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy92aXNpdG9yX2FwcC9zcmMvYXBwL3BhZ2UvY29udHJhY3QvY29udHJhY3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlL2NvbnRyYWN0L2NvbnRyYWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHlEQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDQ0Q7O0FER0E7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDQUQ7O0FER0E7RUFDQyxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0FEOztBRElBO0VBQ0Msa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0REOztBREdBO0VBRUMsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNERCIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvY29udHJhY3QvY29udHJhY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XG5cdGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZS9iYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXG59XG5cbi5sb2dve1xuXHRtYXgtd2lkdGg6IDgwcHg7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRwYWRkaW5nOiA3MHB4IDAgNDBweDtcblxufVxuLmJveHtcblx0YmFja2dyb3VuZDogIzE3NTI5ZDtcblx0cGFkZGluZzogMXB4IDI1cHggNHB4IDMzcHg7XG5cdG1heC1oZWlnaHQ6IDcwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0bWFyZ2luOiAyMHB4IDgwcHg7XG59XG5cblxuLmJ0bntcblx0LS1iYWNrZ3JvdW5kOiAjMWQ0Yzc3ZGUgIWltcG9ydGFudDtcblx0LS1ib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG5cdHBhZGRpbmc6IDBweCAzNXB4O1xuXHRoZWlnaHQ6IDM4cHg7XG5cdGZvbnQtc2l6ZTogMTRweDtcbn1cbi5ib3RoYnRue1xuXHRcblx0bWFyZ2luOiBhdXRvO1xuXHRtYXgtd2lkdGg6IDUwMHB4O1xuXHRmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn0iLCIuYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2UvYmFja2dyb3VuZC5wbmdcIikgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sb2dvIHtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNzBweCAwIDQwcHg7XG59XG5cbi5ib3gge1xuICBiYWNrZ3JvdW5kOiAjMTc1MjlkO1xuICBwYWRkaW5nOiAxcHggMjVweCA0cHggMzNweDtcbiAgbWF4LWhlaWdodDogNzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDIwcHggODBweDtcbn1cblxuLmJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzFkNGM3N2RlICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggMzVweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5ib3RoYnRuIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/contract/contract.page.ts":
/*!************************************************!*\
  !*** ./src/app/page/contract/contract.page.ts ***!
  \************************************************/
/*! exports provided: ContractPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractPage", function() { return ContractPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContractPage = /** @class */ (function () {
    function ContractPage() {
    }
    ContractPage.prototype.ngOnInit = function () {
    };
    ContractPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contract',
            template: __webpack_require__(/*! raw-loader!./contract.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/contract/contract.page.html"),
            styles: [__webpack_require__(/*! ./contract.page.scss */ "./src/app/page/contract/contract.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContractPage);
    return ContractPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-contract-contract-module-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-info-info-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/info/info.page.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/info/info.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n\t<div class=\"background\">\n\n\t\t<div class=\"logo\">\n\t\t\t<img src=\"./assets/image/logo.png\" alt=\"logo\">\n\t\t</div>\n\n\t\t<ion-item class=\"item-native\" >\n\t\t\t<ion-input placeholder=\"Please Input Name\" class=\"input\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-input placeholder=\"Please Input your position\" class=\"input\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-datetime displayFormat=\"MM DD YY\" placeholder=\"Select Date\" class=\"datetime-text\">\n\t\t\t\t<ion-icon ios=\"ios-calendar\" md=\"md-calendar\"></ion-icon>\n\t\t\t</ion-datetime>\n\t\t</ion-item>\n\n\t\t<ion-item>\n\t\t\t<ion-input placeholder=\"Please Input Number\" class=\"input\"></ion-input>\n\t\t</ion-item>\n\n\t\t<div class=\"boxes\">\n\t\t\t<div class=\"box1\">\n\t\t\t\t<ngx-qrcode [(qrc-value)]=\"created_code\"></ngx-qrcode>\n\t\t\t</div>\n\t\t\t<div class=\"box2\">\n\t\t\t\t\n\t\t\t\t<img src=\"{{userImageData}}\" *ngIf=\"userImageData\" style=\"height: 100px; width: 100px;\">\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"ion-padding bothbtn\">\n\t\t\t<ion-button expand=\"block\" type=\"submit\" class=\"btn1\" [routerLink]=\"['/confirm-sign']\">Confirm</ion-button>\n\t\t\t<ion-button expand=\"block\" type=\"submit\" class=\"btn2\" [routerLink]=\"['/camera']\">Back</ion-button>\n\t\t</div> \n\n\n\t</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/info/info-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/page/info/info-routing.module.ts ***!
  \**************************************************/
/*! exports provided: InfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageRoutingModule", function() { return InfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info.page */ "./src/app/page/info/info.page.ts");




var routes = [
    {
        path: '',
        component: _info_page__WEBPACK_IMPORTED_MODULE_3__["InfoPage"]
    }
];
var InfoPageRoutingModule = /** @class */ (function () {
    function InfoPageRoutingModule() {
    }
    InfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], InfoPageRoutingModule);
    return InfoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/page/info/info.module.ts":
/*!******************************************!*\
  !*** ./src/app/page/info/info.module.ts ***!
  \******************************************/
/*! exports provided: InfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageModule", function() { return InfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _info_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-routing.module */ "./src/app/page/info/info-routing.module.ts");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/index.js");
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./info.page */ "./src/app/page/info/info.page.ts");









var InfoPageModule = /** @class */ (function () {
    function InfoPageModule() {
    }
    InfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _info_routing_module__WEBPACK_IMPORTED_MODULE_6__["InfoPageRoutingModule"],
                ngx_qrcode2__WEBPACK_IMPORTED_MODULE_7__["NgxQRCodeModule"],
                _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["IonicStorageModule"].forRoot()
            ],
            declarations: [_info_page__WEBPACK_IMPORTED_MODULE_8__["InfoPage"]]
        })
    ], InfoPageModule);
    return InfoPageModule;
}());



/***/ }),

/***/ "./src/app/page/info/info.page.scss":
/*!******************************************!*\
  !*** ./src/app/page/info/info.page.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background: url(\"/assets/image/background.png\") no-repeat;\n  background-size: 100% 100%;\n  display: block;\n}\n\n.logo {\n  max-width: 80px;\n  margin: 0 auto;\n  padding: 70px 0 40px;\n}\n\n.input, .ion-input {\n  border: 1px solid #80808073;\n  border-radius: 50px;\n  padding: 2px 18px !important;\n  margin-top: 10px;\n  font-size: 12px !important;\n}\n\nion-item {\n  --highlight-color-focused: none;\n  --border-color: transparent;\n  margin: auto;\n  max-width: 500px;\n}\n\n.datetime-text {\n  border: 1px solid #80808073;\n  border-radius: 50px;\n  --padding: 2px 15px !important;\n  margin-top: 10px;\n  font-size: 12px !important;\n  height: 35px !important;\n  width: 100% !important;\n}\n\n.item-native {\n  border-style: unset !important;\n}\n\n.boxes {\n  margin: auto;\n  max-width: 500px;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n  height: 80px;\n  max-height: 120px;\n}\n\n.box1 {\n  width: 100px;\n  background: #dcdce4;\n  max-height: 100px;\n  text-align: center;\n  color: #a99f9f;\n  font-size: 12px;\n  position: absolute;\n  top: 3px;\n  left: 20px;\n}\n\n.box2 {\n  width: 100px;\n  background: #dcdce4;\n  max-height: 100px;\n  text-align: center;\n  color: #a99f9f;\n  font-size: 12px;\n  right: 30px;\n  top: 3px;\n  position: absolute;\n}\n\n.btn1 {\n  --background: #1d4c77de !important;\n  --border-radius: 50px !important;\n  text-transform: capitalize !important;\n  margin-top: 15px;\n  height: 38px;\n  font-size: 14px;\n}\n\n.btn2 {\n  --background: #1d4c77de !important;\n  --border-radius: 50px !important;\n  text-transform: capitalize !important;\n  margin-top: 10px;\n  height: 38px;\n  font-size: 14px;\n}\n\n.bothbtn {\n  margin: auto;\n  max-width: 500px;\n  font-size: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy92aXNpdG9yX2FwcC9zcmMvYXBwL3BhZ2UvaW5mby9pbmZvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS9pbmZvL2luZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MseURBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUNDRDs7QURFQTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNDRDs7QURFQTtFQUNDLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNDRDs7QURLQTtFQUVDLCtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNIRDs7QURNQTtFQUNDLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDSEQ7O0FES0E7RUFDQyw4QkFBQTtBQ0ZEOztBREtBO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRkQ7O0FES0E7RUFDQyxZQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDSEQ7O0FEUUE7RUFDQyxZQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDTkQ7O0FEV0E7RUFDQyxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUkQ7O0FEVUE7RUFDQyxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUEQ7O0FEU0E7RUFDQyxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ05EIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9pbmZvL2luZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XG5cdGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZS9iYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9nb3tcblx0bWF4LXdpZHRoOiA4MHB4O1xuXHRtYXJnaW46IDAgYXV0bztcblx0cGFkZGluZzogNzBweCAwIDQwcHg7XG5cbn1cbi5pbnB1dCAsLmlvbi1pbnB1dHtcblx0Ym9yZGVyOiAxcHggc29saWQgIzgwODA4MDczO1xuXHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRwYWRkaW5nOiAycHggMThweCAhaW1wb3J0YW50O1xuXHRtYXJnaW4tdG9wOjEwcHg7XG5cdGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuXG59XG5cblxuXG5pb24taXRlbSBcbntcblx0LS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogbm9uZTtcblx0LS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuXHRtYXJnaW46IGF1dG87XG5cdG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5kYXRldGltZS10ZXh0IHtcblx0Ym9yZGVyOiAxcHggc29saWQgIzgwODA4MDczO1xuXHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHQtLXBhZGRpbmc6IDJweCAxNXB4ICFpbXBvcnRhbnQ7XG5cdG1hcmdpbi10b3A6MTBweDtcblx0Zm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG5cdGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xuXHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuLml0ZW0tbmF0aXZle1xuXHRib3JkZXItc3R5bGU6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3hlc3tcblx0bWFyZ2luOiBhdXRvO1xuXHRtYXgtd2lkdGg6IDUwMHB4O1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheSA6ZmxleDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRoZWlnaHQ6IDgwcHg7XG5cdG1heC1oZWlnaHQ6IDEyMHB4O1xufVxuXG4uYm94MXtcblx0d2lkdGg6IDEwMHB4O1xuXHRiYWNrZ3JvdW5kOiAjZGNkY2U0O1xuXHQvL3BhZGRpbmc6IDI5cHggN3B4IDI1cHggMHB4O1xuXHRtYXgtaGVpZ2h0OiAxMDBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRjb2xvcjogI2E5OWY5Zjtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogM3B4O1xuXHRsZWZ0OiAyMHB4O1xuXHRcblxufVxuXG4uYm94Mntcblx0d2lkdGg6IDEwMHB4O1xuXHRiYWNrZ3JvdW5kOiAjZGNkY2U0O1xuXHQvL3BhZGRpbmc6IDI5cHggN3B4IDI1cHggMHB4O1xuXHRtYXgtaGVpZ2h0OiAxMDBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRjb2xvcjogI2E5OWY5Zjtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRyaWdodDogMzBweDtcblx0dG9wOiAzcHg7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxufVxuXG5cbi5idG4xe1xuXHQtLWJhY2tncm91bmQ6ICMxZDRjNzdkZSAhaW1wb3J0YW50O1xuXHQtLWJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcblx0bWFyZ2luLXRvcDogMTVweDtcblx0aGVpZ2h0OiAzOHB4O1xuXHRmb250LXNpemU6IDE0cHg7XG59XG4uYnRuMntcblx0LS1iYWNrZ3JvdW5kOiAjMWQ0Yzc3ZGUgIWltcG9ydGFudDtcblx0LS1ib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG5cdG1hcmdpbi10b3A6IDEwcHg7XG5cdGhlaWdodDogMzhweDtcblx0Zm9udC1zaXplOiAxNHB4O1xufVxuLmJvdGhidG57XG5cdG1hcmdpbjogYXV0bztcblx0bWF4LXdpZHRoOiA1MDBweDtcblx0Zm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cblxuXG4iLCIuYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2UvYmFja2dyb3VuZC5wbmdcIikgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sb2dvIHtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNzBweCAwIDQwcHg7XG59XG5cbi5pbnB1dCwgLmlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA3MztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMnB4IDE4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogbm9uZTtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5kYXRldGltZS10ZXh0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDczO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAtLXBhZGRpbmc6IDJweCAxNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgYm9yZGVyLXN0eWxlOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4uYm94ZXMge1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogODBweDtcbiAgbWF4LWhlaWdodDogMTIwcHg7XG59XG5cbi5ib3gxIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZGNkY2U0O1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2E5OWY5ZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4O1xuICBsZWZ0OiAyMHB4O1xufVxuXG4uYm94MiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZDogI2RjZGNlNDtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNhOTlmOWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIHRvcDogM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5idG4xIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMWQ0Yzc3ZGUgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGhlaWdodDogMzhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYnRuMiB7XG4gIC0tYmFja2dyb3VuZDogIzFkNGM3N2RlICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJvdGhidG4ge1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/info/info.page.ts":
/*!****************************************!*\
  !*** ./src/app/page/info/info.page.ts ***!
  \****************************************/
/*! exports provided: InfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPage", function() { return InfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");




var InfoPage = /** @class */ (function () {
    function InfoPage(storage, common) {
        this.storage = storage;
        this.common = common;
        this.created_code = null;
        this.qr_data = {
            "amount": "",
            "account": "",
            "currency": ""
        };
        this.userCodeData = null;
        var ref = this;
        this.common.presentLoading();
        this.qr_data.account = 'hsynterkr';
        this.qr_data.currency = 'USD';
        this.qr_data.amount = '25';
        //this.created_code = this.Qrvalue;
        this.created_code = JSON.stringify(this.qr_data);
    }
    InfoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('userImage').then(function (val) {
            console.log('userImage', val);
            _this.userImageData = val;
        });
    };
    InfoPage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
    ]; };
    InfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! raw-loader!./info.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/info/info.page.html"),
            styles: [__webpack_require__(/*! ./info.page.scss */ "./src/app/page/info/info.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], InfoPage);
    return InfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-info-info-module-es5.js.map
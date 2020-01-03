(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-scan-code-scan-code-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/scan-code/scan-code.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/scan-code/scan-code.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n\t<div class =\"background\">\n\t\t<div class=\"logo\">\n\t\t\t<img src=\"./assets/image/logo.png\" alt=\"logo\">\n\t\t</div>\n\t\t<h1 class=\"title\">Please scan QR code on your badge to your sign out</h1>\n\n\t\t<div class=\"log_content\">\n\t\t\t<div class=\"scan\" (click)=\"scanQRCode()\">\n\t\t\t\t<p>tap to scan here...</p>\n\n\t\t\t\t<P>{{Qrvalue}}</P>\n\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- <div class=\"ion-padding bothbtn\">\n\t\t\t<ion-button expand=\"block\" type=\"submit\" class=\"btn2\" (click)=\"createCode()\">Create QR Code</ion-button>\n\t\t</div>\n\t\t<ion-card *ngIf=\"created_code\">\n\t\t\t<ngx-qrcode [(qrc-value)]=\"created_code\"></ngx-qrcode>\n\t\t\t<ion-card-content>\n\t\t\t\t<h2>Encoded Data</h2>\n\t\t\t\t<p>{{ created_code }}</p>\n\t\t\t</ion-card-content>\n\t\t</ion-card> -->\n\t\t<div class=\"ion-padding bothbtn\">\n\t\t\t<ion-button expand=\"block\" type=\"submit\" class=\"btn2\" [routerLink]=\"['/ty-enjoyday']\">Back</ion-button>\n\t\t</div>\n\n\t</div>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/scan-code/scan-code-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/page/scan-code/scan-code-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ScanCodePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanCodePageRoutingModule", function() { return ScanCodePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _scan_code_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scan-code.page */ "./src/app/page/scan-code/scan-code.page.ts");




const routes = [
    {
        path: '',
        component: _scan_code_page__WEBPACK_IMPORTED_MODULE_3__["ScanCodePage"]
    }
];
let ScanCodePageRoutingModule = class ScanCodePageRoutingModule {
};
ScanCodePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ScanCodePageRoutingModule);



/***/ }),

/***/ "./src/app/page/scan-code/scan-code.module.ts":
/*!****************************************************!*\
  !*** ./src/app/page/scan-code/scan-code.module.ts ***!
  \****************************************************/
/*! exports provided: ScanCodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanCodePageModule", function() { return ScanCodePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _scan_code_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scan-code-routing.module */ "./src/app/page/scan-code/scan-code-routing.module.ts");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/index.js");
/* harmony import */ var _scan_code_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scan-code.page */ "./src/app/page/scan-code/scan-code.page.ts");








let ScanCodePageModule = class ScanCodePageModule {
};
ScanCodePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ngx_qrcode2__WEBPACK_IMPORTED_MODULE_6__["NgxQRCodeModule"],
            _scan_code_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScanCodePageRoutingModule"]
        ],
        declarations: [_scan_code_page__WEBPACK_IMPORTED_MODULE_7__["ScanCodePage"]]
    })
], ScanCodePageModule);



/***/ }),

/***/ "./src/app/page/scan-code/scan-code.page.scss":
/*!****************************************************!*\
  !*** ./src/app/page/scan-code/scan-code.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background: url(\"/assets/image/background.png\") no-repeat;\n  background-size: 100% 100%;\n  display: block;\n}\n\n.logo {\n  max-width: 80px;\n  margin: 0 auto;\n  padding: 70px 0 40px;\n}\n\n.title {\n  text-align: center;\n  color: #2d2626f0;\n  padding: 0 10px;\n  font-size: 18px;\n}\n\n.log_content {\n  margin: auto;\n  max-width: 200px;\n  background-color: transparent;\n}\n\n.scan {\n  height: 130px;\n  background: silver;\n  overflow: auto;\n  text-align: center;\n}\n\n.btn2 {\n  --background: #1d4c77de !important;\n  --border-radius: 50px !important;\n  text-transform: capitalize !important;\n  height: 38px;\n  font-size: 14px;\n}\n\n.bothbtn {\n  margin: auto;\n  max-width: 500px;\n  font-size: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy92aXNpdG9yX2FwcC9zcmMvYXBwL3BhZ2Uvc2Nhbi1jb2RlL3NjYW4tY29kZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2Uvc2Nhbi1jb2RlL3NjYW4tY29kZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx5REFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0NEOztBREVBO0VBQ0Msa0JBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDQUQ7O0FER0E7RUFDQyxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ0FEOztBREVBO0VBQ0MsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0VEOztBREFBO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNHRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2Uvc2Nhbi1jb2RlL3NjYW4tY29kZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHtcblx0YmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlL2JhY2tncm91bmQucG5nJykgbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi5sb2dve1xuXHRtYXgtd2lkdGg6IDgwcHg7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRwYWRkaW5nOiA3MHB4IDAgNDBweDtcbn1cblxuLnRpdGxle1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblx0Y29sb3I6ICMyZDI2MjZmMDtcblx0cGFkZGluZzogMCAxMHB4O1xuXHRmb250LXNpemU6IDE4cHg7XG59XG5cbi5sb2dfY29udGVudHtcblx0bWFyZ2luOiBhdXRvO1xuXHRtYXgtd2lkdGg6IDIwMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5zY2Fue1xuXHRoZWlnaHQ6IDEzMHB4O1xuXHRiYWNrZ3JvdW5kOnNpbHZlcjsgXG5cdG92ZXJmbG93OiBhdXRvO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnRuMntcblx0LS1iYWNrZ3JvdW5kOiAjMWQ0Yzc3ZGUgIWltcG9ydGFudDtcblx0LS1ib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG5cdGhlaWdodDogMzhweDtcblx0Zm9udC1zaXplOiAxNHB4O1xufVxuLmJvdGhidG57XG5cdG1hcmdpbjogYXV0bztcblx0bWF4LXdpZHRoOiA1MDBweDtcblx0Zm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cblxuIiwiLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlL2JhY2tncm91bmQucG5nXCIpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9nbyB7XG4gIG1heC13aWR0aDogODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDcwcHggMCA0MHB4O1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMmQyNjI2ZjA7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubG9nX2NvbnRlbnQge1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc2NhbiB7XG4gIGhlaWdodDogMTMwcHg7XG4gIGJhY2tncm91bmQ6IHNpbHZlcjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bjIge1xuICAtLWJhY2tncm91bmQ6ICMxZDRjNzdkZSAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5ib3RoYnRuIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/scan-code/scan-code.page.ts":
/*!**************************************************!*\
  !*** ./src/app/page/scan-code/scan-code.page.ts ***!
  \**************************************************/
/*! exports provided: ScanCodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanCodePage", function() { return ScanCodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ScanCodePage = class ScanCodePage {
    constructor(qrScanner, platform, navCtrl, router) {
        this.qrScanner = qrScanner;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.router = router;
        this.created_code = null;
        this.qr_data = {
            "amount": "",
            "account": "",
            "currency": ""
        };
    }
    createCode() {
        this.qr_data.account = 'hsynterkr';
        this.qr_data.currency = 'USD';
        this.qr_data.amount = '25';
        //this.created_code = this.Qrvalue;
        this.created_code = JSON.stringify(this.qr_data);
        //this.storage.set('userCode', this.created_code);
    }
    scanQRCode() {
        this.qrScanner.prepare().then((status) => {
            if (status.authorized) {
                // camera permission was granted
                this.qrScanner.show();
                document.getElementsByTagName("body")[0].style.opacity = "0";
                // start scanning
                this.scanning = this.qrScanner.scan().subscribe((textFound) => {
                    console.log('Scanned something', textFound);
                    document.getElementsByTagName("body")[0].style.opacity = "1";
                    this.scanning.unsubscribe();
                    console.log(textFound);
                    alert(textFound);
                    this.Qrvalue = textFound;
                    this.router.navigateByUrl('/ty-enjoyday');
                }, (err) => {
                });
            }
            //this.qrScanner.hide(); // hide camera preview
            //scanSub.unsubscribe(); // stop scanning	
            else if (status.denied) {
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
            }
        });
        //.catch((e: any) => console.log('Error is', e));
    }
    ngOnInit() {
    }
};
ScanCodePage.ctorParameters = () => [
    { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["QRScanner"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ScanCodePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scan-code',
        template: __webpack_require__(/*! raw-loader!./scan-code.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/scan-code/scan-code.page.html"),
        styles: [__webpack_require__(/*! ./scan-code.page.scss */ "./src/app/page/scan-code/scan-code.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["QRScanner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ScanCodePage);



/***/ })

}]);
//# sourceMappingURL=page-scan-code-scan-code-module-es2015.js.map
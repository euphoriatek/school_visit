(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-camera-camera-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/camera/camera.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/camera/camera.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content>\n\t<div class =\"background\">\n\t\t<div class=\"logo\">\n\t\t\t<img src=\"./assets/image/logo.png\" alt=\"logo\">\n\t\t</div>\n\t\t\n\t\t<div class=\"content\">\n\t\t\tPlease look in to the camera\n\t\t</div>\n\n\t\t<!-- <div class=\"ion-padding tpic\">\n\t\t\t<ion-button (click)=\"open()\" class=\"btn1\">Take Photo</ion-button>\n\n\t\t</div> -->\n\t\t<div class=\"main_img\">\n\n\t\t\t<img src=\"{{imagefData}}\" alt=\"login\"  *ngIf=\"imagefData\">\n\t\t</div>\n\n\t\t<div class=\"ion-padding bothbtn\">\n\t\t\t<ion-button expand=\"block\" type=\"submit\" class=\"btn1\" [routerLink]=\"['/thanks-for-sign']\">Next</ion-button>\n\t\t\t<ion-button expand=\"block\" type=\"submit\" class=\"btn2\" [routerLink]=\"['/yourname']\">Back</ion-button>\n\t\t</div>\n\n\n\t</div>\n\t\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/camera/camera-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/page/camera/camera-routing.module.ts ***!
  \******************************************************/
/*! exports provided: CameraPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPageRoutingModule", function() { return CameraPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _camera_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camera.page */ "./src/app/page/camera/camera.page.ts");




var routes = [
    {
        path: '',
        component: _camera_page__WEBPACK_IMPORTED_MODULE_3__["CameraPage"]
    }
];
var CameraPageRoutingModule = /** @class */ (function () {
    function CameraPageRoutingModule() {
    }
    CameraPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CameraPageRoutingModule);
    return CameraPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/page/camera/camera.module.ts":
/*!**********************************************!*\
  !*** ./src/app/page/camera/camera.module.ts ***!
  \**********************************************/
/*! exports provided: CameraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPageModule", function() { return CameraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _camera_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./camera-routing.module */ "./src/app/page/camera/camera-routing.module.ts");
/* harmony import */ var _camera_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./camera.page */ "./src/app/page/camera/camera.page.ts");








var CameraPageModule = /** @class */ (function () {
    function CameraPageModule() {
    }
    CameraPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _camera_routing_module__WEBPACK_IMPORTED_MODULE_6__["CameraPageRoutingModule"],
                _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["IonicStorageModule"].forRoot()
            ],
            declarations: [_camera_page__WEBPACK_IMPORTED_MODULE_7__["CameraPage"]]
        })
    ], CameraPageModule);
    return CameraPageModule;
}());



/***/ }),

/***/ "./src/app/page/camera/camera.page.scss":
/*!**********************************************!*\
  !*** ./src/app/page/camera/camera.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background: url(\"/assets/image/background.png\") no-repeat;\n  background-size: 100% 100%;\n  display: block;\n  min-height: 100vh;\n}\n\n.logo {\n  max-width: 80px;\n  margin: 0 auto;\n  padding: 70px 0 40px;\n}\n\n.content {\n  text-align: center;\n  color: #2d2626f0;\n  padding: 0px 8px 0px 9px;\n  font-size: 16px;\n}\n\n.takepic {\n  margin: 0px 0px 0px 80px;\n  padding: 0px 2px 0px 25px;\n  --background: #3c6388fc;\n}\n\n.main_img {\n  margin: auto;\n  padding: 15px;\n  text-align: center;\n  max-width: 150px;\n  max-height: 200px;\n  height: 160px;\n}\n\n.camImg {\n  max-width: 100%;\n  height: 100px;\n}\n\n.log_content {\n  padding: 0px 60px 35px 38px;\n  background-color: transparent;\n}\n\n.scan {\n  margin: auto;\n}\n\n.btn1 {\n  --background: #1d4c77de !important;\n  --border-radius: 50px !important;\n  text-transform: capitalize !important;\n  margin-top: 80px;\n  height: 38px;\n  font-size: 14px;\n}\n\n.btn2 {\n  --background: #1d4c77de !important;\n  --border-radius: 50px !important;\n  text-transform: capitalize !important;\n  margin-top: 20px;\n  height: 38px;\n  font-size: 14px;\n}\n\n.bothbtn {\n  margin: auto;\n  max-width: 500px;\n  font-size: 10px !important;\n}\n\n.tpic {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ25pc2l0L0RvY3VtZW50cy9wcm9qZWN0cy92aXNpdG9yX2FwcC9zcmMvYXBwL3BhZ2UvY2FtZXJhL2NhbWVyYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2UvY2FtZXJhL2NhbWVyYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx5REFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDQ0Q7O0FERUE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FDQ0Q7O0FERUE7RUFDQyx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLGFBQUE7QUNDRDs7QURHQTtFQUNDLDJCQUFBO0VBQ0EsNkJBQUE7QUNBRDs7QURFQTtFQUVDLFlBQUE7QUNBRDs7QURFQTtFQUNDLGtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDRDs7QURDQTtFQUNDLGtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNFRDs7QURBQTtFQUNDLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDR0Q7O0FEQ0E7RUFDQyxrQkFBQTtBQ0VEIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9jYW1lcmEvY2FtZXJhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5ke1xuXHRiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2UvYmFja2dyb3VuZC5wbmcnKSBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuXHRkaXNwbGF5OiBibG9jaztcblx0bWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5sb2dve1xuXHRtYXgtd2lkdGg6IDgwcHg7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRwYWRkaW5nOiA3MHB4IDAgNDBweDtcblxufVxuLmNvbnRlbnR7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6ICMyZDI2MjZmMDtcblx0cGFkZGluZzogMHB4IDhweCAwcHggOXB4O1xuXHRmb250LXNpemU6IDE2cHg7XG59XG5cbi50YWtlcGlje1xuXHRtYXJnaW46IDBweCAwcHggMHB4IDgwcHg7XG5cdHBhZGRpbmc6IDBweCAycHggMHB4IDI1cHg7XG5cdC0tYmFja2dyb3VuZDogIzNjNjM4OGZjO1xufVxuXG4ubWFpbl9pbWd7XG5cdG1hcmdpbjogYXV0bztcblx0cGFkZGluZzogMTVweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXgtd2lkdGg6IDE1MHB4O1xuXHRtYXgtaGVpZ2h0OiAyMDBweDtcblx0aGVpZ2h0OiAxNjBweDtcblxufVxuLmNhbUltZ3tcblx0bWF4LXdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMHB4O1xuXG59XG5cbi5sb2dfY29udGVudHtcblx0cGFkZGluZzogMHB4IDYwcHggMzVweCAzOHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5zY2Fue1xuXG5cdG1hcmdpbjogYXV0bztcbn1cbi5idG4xe1xuXHQtLWJhY2tncm91bmQ6ICMxZDRjNzdkZSAhaW1wb3J0YW50O1xuXHQtLWJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcblx0bWFyZ2luLXRvcDogODBweDtcblx0aGVpZ2h0OiAzOHB4O1xuXHRmb250LXNpemU6IDE0cHg7XG59XG4uYnRuMntcblx0LS1iYWNrZ3JvdW5kOiAjMWQ0Yzc3ZGUgIWltcG9ydGFudDtcblx0LS1ib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG5cdG1hcmdpbi10b3A6IDIwcHg7XG5cdGhlaWdodDogMzhweDtcblx0Zm9udC1zaXplOiAxNHB4O1xufVxuLmJvdGhidG57XG5cdG1hcmdpbjogYXV0bztcblx0bWF4LXdpZHRoOiA1MDBweDtcblx0Zm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cblxuLnRwaWN7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIuYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2UvYmFja2dyb3VuZC5wbmdcIikgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4ubG9nbyB7XG4gIG1heC13aWR0aDogODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDcwcHggMCA0MHB4O1xufVxuXG4uY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyZDI2MjZmMDtcbiAgcGFkZGluZzogMHB4IDhweCAwcHggOXB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi50YWtlcGljIHtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA4MHB4O1xuICBwYWRkaW5nOiAwcHggMnB4IDBweCAyNXB4O1xuICAtLWJhY2tncm91bmQ6ICMzYzYzODhmYztcbn1cblxuLm1haW5faW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBoZWlnaHQ6IDE2MHB4O1xufVxuXG4uY2FtSW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubG9nX2NvbnRlbnQge1xuICBwYWRkaW5nOiAwcHggNjBweCAzNXB4IDM4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc2NhbiB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmJ0bjEge1xuICAtLWJhY2tncm91bmQ6ICMxZDRjNzdkZSAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5idG4yIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMWQ0Yzc3ZGUgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGhlaWdodDogMzhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYm90aGJ0biB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50cGljIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/camera/camera.page.ts":
/*!********************************************!*\
  !*** ./src/app/page/camera/camera.page.ts ***!
  \********************************************/
/*! exports provided: CameraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPage", function() { return CameraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");





var CameraPage = /** @class */ (function () {
    function CameraPage(camera, storage, common) {
        var _this = this;
        this.camera = camera;
        this.storage = storage;
        this.common = common;
        this.base64Image = '';
        this.TIME_IN_MS = 2000;
        var ref = this;
        this.common.presentLoading();
        //let hideFooterTimeout =
        setTimeout(function () {
            var options = {
                quality: 100,
                destinationType: _this.camera.DestinationType.DATA_URL,
                encodingType: _this.camera.EncodingType.JPEG,
                mediaType: _this.camera.MediaType.PICTURE
            };
            _this.camera.getPicture(options).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64 (DATA_URL):
                var base64Image = 'data:image/jpeg;base64,' + imageData;
                _this.imagefData = base64Image;
                _this.storage.set('userImage', _this.imagefData);
            }, function (err) {
                // Handle error
            });
        }, this.TIME_IN_MS);
    }
    CameraPage.prototype.ngOnInit = function () {
    };
    CameraPage.prototype.open = function () {
        var _this = this;
        debugger;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.imagefData = base64Image;
            _this.storage.set('userImage', _this.imagefData);
        }, function (err) {
            // Handle error
        });
    };
    CameraPage.ctorParameters = function () { return [
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
    ]; };
    CameraPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-camera',
            template: __webpack_require__(/*! raw-loader!./camera.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/camera/camera.page.html"),
            styles: [__webpack_require__(/*! ./camera.page.scss */ "./src/app/page/camera/camera.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], CameraPage);
    return CameraPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-camera-camera-module-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-e404-e404-module"],{

/***/ "+kgR":
/*!*******************************************!*\
  !*** ./src/app/pages/e404/e404.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlNDA0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "3GaQ":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e404/e404.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-title>Erro 404</ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <h2>OOOoooopss!!!</h2>\n  <p>Deu ruim amigo(a) . _ .</p>\n\n  <ion-button color=\"danger\" expand=\"block\" routerLink=\"/\"><ion-icon name=\"home\"></ion-icon> &nbsp; PÁGINA INICIAL</ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "D3fp":
/*!*****************************************!*\
  !*** ./src/app/pages/e404/e404.page.ts ***!
  \*****************************************/
/*! exports provided: E404Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E404Page", function() { return E404Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_e404_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./e404.page.html */ "3GaQ");
/* harmony import */ var _e404_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./e404.page.scss */ "+kgR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let E404Page = class E404Page {
    constructor() { }
    ngOnInit() {
    }
};
E404Page.ctorParameters = () => [];
E404Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-e404',
        template: _raw_loader_e404_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_e404_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], E404Page);



/***/ }),

/***/ "NGrQ":
/*!***************************************************!*\
  !*** ./src/app/pages/e404/e404-routing.module.ts ***!
  \***************************************************/
/*! exports provided: E404PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E404PageRoutingModule", function() { return E404PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _e404_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./e404.page */ "D3fp");




const routes = [
    {
        path: '',
        component: _e404_page__WEBPACK_IMPORTED_MODULE_3__["E404Page"]
    }
];
let E404PageRoutingModule = class E404PageRoutingModule {
};
E404PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], E404PageRoutingModule);



/***/ }),

/***/ "QPNz":
/*!*******************************************!*\
  !*** ./src/app/pages/e404/e404.module.ts ***!
  \*******************************************/
/*! exports provided: E404PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E404PageModule", function() { return E404PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _e404_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./e404-routing.module */ "NGrQ");
/* harmony import */ var _e404_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./e404.page */ "D3fp");







let E404PageModule = class E404PageModule {
};
E404PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _e404_routing_module__WEBPACK_IMPORTED_MODULE_5__["E404PageRoutingModule"]
        ],
        declarations: [_e404_page__WEBPACK_IMPORTED_MODULE_6__["E404Page"]]
    })
], E404PageModule);



/***/ })

}]);
//# sourceMappingURL=pages-e404-e404-module.js.map
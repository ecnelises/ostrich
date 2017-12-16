webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.1.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../../_@angular_router@5.1.0@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.1.0@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../../_@angular_platform-browser@5.1.0@@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../../_@angular_core@5.1.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../../_@angular_common@5.1.0@@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../../_@angular_forms@5.1.0@@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../../_@angular_platform-browser@5.1.0@@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_drag_drop__ = __webpack_require__("../../../../_ng2-drag-drop@3.0.2@ng2-drag-drop/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_drag_drop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_drag_drop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_drag_drop__["Ng2DragDropModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__home_home_service__["a" /* HomeService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\n.button-col{\r\n\r\n  display: -webkit-box;\r\n\r\n  display: -ms-flexbox;\r\n\r\n  display: flex;\r\n\r\n  -webkit-box-pack: center;\r\n\r\n      -ms-flex-pack: center;\r\n\r\n          justify-content: center;\r\n\r\n   color:#FFF5DB;\r\n    padding:.3em;\r\n    text-align: center;\r\n    width:auto;\r\n    height:35px;\r\n    font-weight:bold;\r\n\r\n\r\n}\r\ninput.txt {\r\n   background-color:#FFFDFB;\r\n    border: 0;\r\n    padding: 1em;\r\n    width: 10%;\r\n    margin-top: 10px;\r\n}\r\n\r\n .btn{\r\n\r\n    height: 50px;\r\n    border:#FFE1B6 solid 2px ;\r\n\r\n    width:200px;\r\n    padding:0em 2em;\r\n    background:#616161;\r\n    color:#FC6E5e;\r\n    cursor:pointer;\r\n    font-family: sans-serif;\r\n     font-size: 20px;\r\n}\r\n.task-column {\r\n  border-radius: 15px;\r\n  margin-top: 5%;\r\n   margin-left: 5%;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n-webkit-box-orient: vertical;\r\n-webkit-box-direction: normal;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n  box-sizing: border-box;\r\n  background-color: #FDE9DF;\r\n\r\n  width: 20%;\r\n  height: 600px;\r\n  max-height:600px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n\r\n}\r\n\r\n.task-column h1 {\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  font-family: fantasy;\r\n  text-align: center;\r\n  display: block;\r\n\r\n}\r\n\r\n.item {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n\r\n  margin: 8px 0;\r\n  font-family: serif;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  background-color:#FF9F68;\r\n\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n  font-size: 20pt;\r\n  line-height: 40pt;\r\n  width: 100%;\r\n  animation: 3s;\r\n-moz-animation:myfirst 3s; /* Firefox */\r\n-webkit-animation:myfirst 3s; /* Safari and Chrome */\r\n-o-animation:myfirst 3s; /* Opera */\r\n}\r\n\r\n@-webkit-keyframes remove\r\n{\r\nfrom {background:red;-webkit-transform: scale(1);transform: scale(1);}\r\nto {background:yellow;-webkit-transform: scale(0);transform: scale(0);}\r\n}\r\n\r\n@keyframes remove\r\n{\r\nfrom {background:red;-webkit-transform: scale(1);transform: scale(1);}\r\nto {background:yellow;-webkit-transform: scale(0);transform: scale(0);}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div droppable (onDrop)=\"onErrorMoveDrop($event)\" [dropScope]=\"'move'\" >\n\n  <div class=\"button-col\">\n    <input type=\"text\" class=\"txt\" placeholder=\"Life goal..\" [(ngModel)]=\"inputContent\">\n    <button *ngFor=\"let task of tasks; let i = index\" id=\"button{{i}}\" (click)=\"addItems($event)\">{{titles[i]}}</button>\n  </div>\n\n  <div *ngFor=\"let task of tasks; let i = index\" class=\"task-column\" id=\"{{i}}\" droppable (onDrop)=\"onMoveDrop($event)\" [dropScope]=\"'move'\">\n    <h1> {{titles[i]}} </h1>\n    <div *ngFor=\"let item of task; let j = index\" class=\"item\" (dblclick)=\"removeItems($event)\" draggable dragData=\"{{item}}\" (onDrag)=\"onMoveDrag($event)\" [dragScope]=\"'move'\">\n      {{item.content}}\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.1.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(homeService) {
        this.homeService = homeService;
        this.movedItemIndex = [];
        this.lock = false;
        this.inputContent = "";
        this.tasks = [[], [], [], []];
        this.titles = ["opened", "doing", "todo", "review"];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homeService.getData().then(function (res) {
            for (var i = 0; i < res['tasks'].length; i++) {
                _this.tasks[res['tasks'][i]['columnId']].push(res['tasks'][i]);
            }
        });
    };
    HomeComponent.prototype.addItems = function ($event) {
        var _this = this;
        var index = $event.target.id.replace("button", "");
        if (this.inputContent != "") {
            this.homeService.addItem(index, this.inputContent)
                .then(function (res) {
                _this.tasks[index].push(res);
                _this.inputContent = "";
            });
        }
    };
    HomeComponent.prototype.removeItems = function ($event) {
        var _this = this;
        var columnIndex = parseInt($event.target.parentNode.id);
        var childNodes = $event.target.parentNode.childNodes;
        var index = this.findIndexOfParentNode(childNodes, $event.target);
        this.homeService.removeItem(this.tasks[columnIndex][index]['id'])
            .then(function (res) {
            _this.tasks[columnIndex].splice(index, 1);
        });
    };
    HomeComponent.prototype.findIndexOfParentNode = function (childNodes, node) {
        var index = -1;
        for (var i = 0; i < childNodes.length; i++) {
            if (childNodes[i] == node) {
                return index;
            }
            if (childNodes[i].nodeType == 1) {
                index++;
            }
        }
    };
    HomeComponent.prototype.onMoveDrop = function (e) {
        var _this = this;
        console.log(e.nativeEvent.target);
        var columnIndex;
        if (e.nativeEvent.target.className.includes("task-column")) {
            columnIndex = e.nativeEvent.target.id;
            this.tasks[columnIndex].push(this.movedItem);
            var index = this.tasks[columnIndex].length - 1;
        }
        else if (e.nativeEvent.target.className.includes("item")) {
            columnIndex = e.nativeEvent.target.parentNode.id;
            var index = this.findIndexOfParentNode(e.nativeEvent.target.parentNode.childNodes, e.nativeEvent.target);
            this.tasks[columnIndex].splice(index, 0, this.movedItem);
        }
        this.lock = false;
        this.homeService.changeColumn(this.movedItem['id'], columnIndex)
            .then(function (res) {
            _this.movedItemIndex = [];
            _this.movedItem = null;
        });
    };
    HomeComponent.prototype.onErrorMoveDrop = function (e) {
        this.tasks[this.movedItemIndex[1]].splice(this.movedItemIndex[0], 0, this.movedItem);
        this.lock = false;
        this.movedItemIndex = [];
        this.movedItem = null;
    };
    HomeComponent.prototype.onMoveDrag = function (e) {
        if (!this.lock) {
            this.lock = true;
            var columnIndex = e.target.parentNode.id;
            var index = this.findIndexOfParentNode(e.target.parentNode.childNodes, e.target);
            this.movedItem = this.tasks[columnIndex][index];
            this.movedItemIndex.push(index, columnIndex);
            console.log(this.movedItemIndex, this.movedItem);
            this.tasks[columnIndex].splice(index, 1);
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.1.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../../_@angular_common@5.1.0@@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.getData = function () {
        var _this = this;
        return new Promise(function (resolve, rej) {
            _this.http.get("/tasks/index")
                .subscribe(function (res) {
                resolve(res);
            });
        });
    };
    HomeService.prototype.removeItem = function (id) {
        var _this = this;
        return new Promise(function (resolve, rej) {
            _this.http.get("/tasks/remove", {
                params: {
                    "id": id.toString()
                }
            }).subscribe(function (res) { return resolve(res); });
        });
    };
    HomeService.prototype.addItem = function (index, content) {
        var _this = this;
        return new Promise(function (resolve, rej) {
            _this.http.get("/tasks/save", {
                params: {
                    "columnId": index.toString(),
                    "content": content.toString()
                }
            }).subscribe(function (res) { return resolve(res); });
        });
    };
    HomeService.prototype.changeColumn = function (id, columnIndex) {
        var _this = this;
        return new Promise(function (resolve, rej) {
            _this.http.get("/tasks/changeColumn", {
                params: {
                    "id": id.toString(),
                    "columnId": columnIndex.toString()
                }
            }).subscribe(function (res) { return resolve(res); });
        });
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.1.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../../_@angular_platform-browser-dynamic@5.1.0@@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
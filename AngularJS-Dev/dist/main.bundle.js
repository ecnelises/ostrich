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

module.exports = "<div id=\"header\">\n  <a id=\"my-projects\">\n    <span class=\"icon icon-menu\">\n      个人项目\n    </span>\n  </a>\n  <div id=\"search-input\">\n    <span>Search</span>\n    <input type=\"text\" name=\"search\" placeholder=\"请输入搜索内容\">\n  </div>\n  <div id=\"aa\"></div>\n  <div id=\"medium\">\n    <a href=\"\">我的</a>\n    <a href=\"\">日历</a>\n  </div>\n  <div id=\"message\">\n    <a href=\"\"><span>提醒</span></a>\n    <a href=\"\"><span>消息</span></a>\n  </div>\n  <img id=\"user\" src=\"\" alt=\"个人头像\">\n</div>\n\n<div id=\"tool-bar\">\n  <div id=\"path\">\n    <a href=\"\">首页</a>\n    <span> ></span>\n    <a href=\"\">本项目名称</a>\n  </div>\n\n  <div id=\"main-tool\">\n    <a href=\"\">任务</a>\n    <a href=\"\">分享</a>\n    <a href=\"\">文件</a>\n    <a href=\"\">日程</a>\n    <a href=\"\">群聊</a>\n  </div>\n  <img src=\"\" alt=\"参与者人数\">\n  <a id=\"view\" href=\"\">视图</a>\n  <a id=\"menu\" href=\"\">菜单</a>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#header {\n  height: 7%;\n  width: 100%;\n  background-color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid rgba(155, 155, 155, 0.5); }\n\n#my-projects {\n  min-width: 150px;\n  max-width: 150px;\n  font-size: 16pt;\n  text-align: center; }\n\n.icon-menu:before {\n  content: \"\\EAC7\"; }\n\n#search-input {\n  height: 80%;\n  border-radius: 30px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  max-width: 400px;\n  min-width: 400px;\n  font-size: 14px;\n  margin-left: 15px;\n  background-color: rgba(230, 230, 230, 0.8);\n  border: solid rgba(150, 150, 150, 0.8) 0.5px;\n  opacity: 0.8;\n  padding-left: 30px;\n  padding-right: 30px; }\n\n#aa {\n  width: 25%; }\n\n#search-input input {\n  line-height: 80%;\n  height: 100%;\n  border: none;\n  background-color: transparent; }\n\n#search-input input:focus {\n  outline: none; }\n\n#medium {\n  text-align: right;\n  max-width: 100px;\n  min-width: 100px;\n  margin-left: auto;\n  margin-right: 0%; }\n\n#message {\n  max-width: 100px;\n  min-width: 100px;\n  margin-left: 3%; }\n\n#user {\n  width: 80px;\n  margin-left: auto;\n  margin-right: auto; }\n\n#tool-bar {\n  height: 9%;\n  width: 100%;\n  background-color: aqua;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n#main-tool {\n  width: 600px;\n  display: inherit;\n  margin: auto;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n#main-tool a {\n  margin-left: 5%; }\n\n#path {\n  width: 220px;\n  padding: 10px;\n  font-size: large; }\n", ""]);

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
exports.push([module.i, "\r\n.button-col{\r\n\r\n  display: -webkit-box;\r\n\r\n  display: -ms-flexbox;\r\n\r\n  display: flex;\r\n\r\n  -webkit-box-pack: center;\r\n\r\n      -ms-flex-pack: center;\r\n\r\n          justify-content: center;\r\n\r\n   color:#FFF5DB;\r\n    padding:.3em;\r\n    text-align: center;\r\n    width:auto;\r\n    height:35px;\r\n    font-weight:bold;\r\n\r\n\r\n}\r\ninput.txt {\r\n   background-color:#FFFDFB;\r\n    border: 0;\r\n    padding: 1em;\r\n    width: 10%;\r\n    margin-top: 10px;\r\n}\r\n\r\n .btn{\r\n\r\n    height: 50px;\r\n    border:#FFE1B6 solid 2px ;\r\n\r\n    width:200px;\r\n    padding:0em 2em;\r\n    background:#616161;\r\n    color:#FC6E5e;\r\n    cursor:pointer;\r\n    font-family: sans-serif;\r\n     font-size: 20px;\r\n}\r\n\r\n.task-column {\r\n  margin-top: 10px;\r\n  margin-left: 20px;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  box-sizing: border-box;\r\n  background-color: #FDE9DF;\r\n  width: 20%;\r\n  height: 600px;\r\n  max-height:600px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n\r\n}\r\n\r\n.task-column h1 {\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  font-family: fantasy;\r\n  text-align: center;\r\n  display: block;\r\n\r\n}\r\n\r\n.item {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  margin: 8px 0;\r\n  font-family: serif;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  background-color:#FF9F68;\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  font-size: 20pt;\r\n  width: 80%;\r\n  border-radius: 3px;\r\n}\r\n\r\n.item-priority {\r\n  width: 10px;\r\n  height: 100px;\r\n}\r\n\r\n.item-content {\r\n  margin: auto;\r\n}\r\n\r\n.form {\r\n  position: absolute;\r\n  z-index: 5;\r\n  background: rgba(230, 230, 230, 0.8);\r\n  width: 100%;\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.form div{\r\n  background-color: #00b3ee;\r\n  z-index: 10;\r\n  width: 40%;\r\n  height: 40%;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 30%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n.form div input{\r\n  text-align: center;\r\n  width: 80%;\r\n}\r\n\r\n.priority-1{\r\n  background-color: #00b3ee;\r\n}\r\n\r\n.priority-2{\r\n  background-color: #262626;\r\n}\r\n\r\n.priority-3{\r\n  background-color: #FC6E5e;\r\n}\r\n\r\n#title {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  font-weight: bold;\r\n}\r\n\r\n#title h3 {\r\n  padding-left: 10px;\r\n  max-width: 150px;\r\n  min-width: 150px;\r\n}\r\n\r\n#title a{\r\n  margin-left: auto;\r\n  width: 20px;\r\n}\r\n\r\n.add-btn {\r\n  margin-top: 20px;\r\n  color: green;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div droppable (onDrop)=\"onErrorMoveDrop($event)\" [dropScope]=\"'move'\" >\n\n  <div id=\"priority-form\" class=\"form\" style=\"display: none\" (click)=\"hideThisForm($event)\">\n    <div (click)=\"notHideThisForm($event)\">\n      <ul (click)=\"setPriority($event)\">\n        <li value=\"3\">非常紧急</li>\n        <li value=\"2\">紧急</li>\n        <li value=\"1\">一般</li>\n      </ul>\n    </div>\n  </div>\n\n  <div id=\"create-new-form\" class=\"form\" style=\"display: none\" (click)=\"hideThisForm($event)\">\n    <div (click)=\"notHideThisForm($event)\">\n      <input type=\"text\" class=\"txt\" placeholder=\"task content\" [(ngModel)]=\"inputContent\">\n      <a (click)=\"addItems($event)\">commit</a>\n    </div>\n  </div>\n\n  <div id=\"detail-form\" class=\"form\" style=\"display: none\" (click)=\"hideThisForm($event)\">\n    <div *ngIf=\"displayedItem!=null\" (click)=\"notHideThisForm($event)\">\n      <span>content: {{displayedItem['content']}}</span>\n      <br>\n      <span>updated: {{displayedItem['updated']}}</span>\n    </div>\n  </div>\n\n\n  <div *ngFor=\"let task of tasks; let i = index\" [@tasks]=\"task.length\" class=\"task-column\" id=\"{{i}}\" droppable (onDrop)=\"onMoveDrop($event)\" [dropScope]=\"'move'\">\n\n    <div id=\"title\">\n      <h3> {{titles[i]}} · {{task.length}} </h3>\n      <a> v </a>\n    </div>\n\n    <div *ngFor=\"let item of task; let j = index\" class=\"item\" (click)=\"displayItemDetail($event)\" (dblclick)=\"removeItems($event)\" draggable dragData=\"{{item}}\" (onDrag)=\"onMoveDrag($event)\" [dragScope]=\"'move'\">\n      <div class=\"item-priority priority-{{item.priority}}\" (click)=\"changePriority($event)\"></div>\n      <span class=\"is-done\" (click)=\"changeIsDoneState($event)\"> {{item.isDone}} </span>\n      <span class=\"item-content\">{{item.content}}</span>\n    </div>\n    <a class=\"add-btn\" (click)=\"addNewTask($event)\"> 添加任务 </a>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.1.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../../_@angular_animations@5.1.0@@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
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
        this.changedPriorityItem = [];
        this.lock = false;
        this.inputContent = "";
        this.tasks = [[], [], [], []];
        this.titles = ["opened", "doing", "todo", "review"];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homeService.getData()
            .then(function (res) {
            for (var i = 0; i < res['tasks'].length; i++) {
                _this.tasks[res['tasks'][i]['columnId']].push(res['tasks'][i]);
            }
        });
    };
    HomeComponent.prototype.addItems = function ($event) {
        var _this = this;
        if (this.inputContent != "") {
            this.homeService.addItem(this.addedItemColumn, this.inputContent)
                .then(function (res) {
                _this.tasks[_this.addedItemColumn].push(res);
                _this.inputContent = "";
                _this.addedItemColumn = null;
                document.getElementById('create-new-form').style.display = 'none';
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
    HomeComponent.prototype.addNewTask = function (e) {
        this.addedItemColumn = e.target.parentNode.id;
        document.getElementById('create-new-form').style.display = 'block';
    };
    HomeComponent.prototype.hideThisForm = function (e) {
        e.target.style.display = 'none';
    };
    HomeComponent.prototype.notHideThisForm = function (e) {
        e.stopPropagation();
    };
    HomeComponent.prototype.changeIsDoneState = function (e) {
        var _this = this;
        e.stopPropagation();
        var columnIndex = e.target.parentNode.parentNode.id;
        var index = this.findIndexOfParentNode(e.target.parentNode.parentNode.childNodes, e.target.parentNode);
        this.homeService.changeIsDoneState(this.tasks[columnIndex][index]['id'])
            .then(function (res) {
            _this.tasks[columnIndex][index]['isDone'] = res['isDone'];
        });
    };
    HomeComponent.prototype.displayItemDetail = function (e) {
        document.getElementById('detail-form').style.display = 'block';
        var columnIndex = e.target.parentNode.id;
        var index = this.findIndexOfParentNode(e.target.parentNode.childNodes, e.target);
        this.displayedItem = this.tasks[columnIndex][index];
    };
    HomeComponent.prototype.changePriority = function (e) {
        e.stopPropagation();
        var columnIndex = e.target.parentNode.parentNode.id;
        var index = this.findIndexOfParentNode(e.target.parentNode.parentNode.childNodes, e.target.parentNode);
        this.changedPriorityItem.push(columnIndex, index);
        document.getElementById('priority-form').style.display = 'block';
    };
    HomeComponent.prototype.setPriority = function (e) {
        var _this = this;
        if (e.target && e.target.nodeName == "LI") {
            var priority = e.target.value;
            var row_1 = this.changedPriorityItem[0];
            var col_1 = this.changedPriorityItem[1];
            this.homeService.changePriority(this.tasks[row_1][col_1]['id'], priority)
                .then(function (res) {
                document.getElementById('priority-form').style.display = 'none';
                _this.tasks[row_1][col_1]['priority'] = res['priority'];
            });
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__home_service__["a" /* HomeService */]],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* trigger */])('tasks', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('.6s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0, transform: 'translateX(-75%)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: .5, transform: 'translateX(35px)', offset: 0.3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
                            ]))
                        ]), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('.6s ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: .5, transform: 'translateX(-35px)', offset: 0.3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0, transform: 'translateX(75%)', offset: 1.0 }),
                            ]))
                        ]), { optional: true })
                    ])
                ]),
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__home_service__["a" /* HomeService */]])
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
        return this.http.get("/tasks/index")
            .toPromise();
    };
    HomeService.prototype.removeItem = function (id) {
        return this.http.get("/tasks/remove", {
            params: {
                "id": id.toString()
            }
        }).toPromise();
    };
    HomeService.prototype.addItem = function (index, content) {
        return this.http.get("/tasks/save", {
            params: {
                "columnId": index.toString(),
                "content": content.toString()
            }
        }).toPromise();
    };
    HomeService.prototype.changeColumn = function (id, columnIndex) {
        return this.http.get("/tasks/changeColumn", {
            params: {
                "id": id.toString(),
                "columnId": columnIndex.toString()
            }
        }).toPromise();
    };
    HomeService.prototype.changeIsDoneState = function (id) {
        return this.http.get("/tasks/isdone", {
            params: {
                "id": id.toString()
            }
        }).toPromise();
    };
    HomeService.prototype.changePriority = function (id, priority) {
        return this.http.get("/tasks/priority", {
            params: {
                "id": id.toString(),
                "priority": priority.toString()
            }
        }).toPromise();
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
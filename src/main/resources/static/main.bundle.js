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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendar_calendar_component__ = __webpack_require__("../../../../../src/app/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__file_file_component__ = __webpack_require__("../../../../../src/app/file/file.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'chat',
        component: __WEBPACK_IMPORTED_MODULE_3__chat_chat_component__["a" /* ChatComponent */]
    },
    {
        path: 'calendar',
        component: __WEBPACK_IMPORTED_MODULE_4__calendar_calendar_component__["a" /* CalendarComponent */]
    },
    {
        path: 'file',
        component: __WEBPACK_IMPORTED_MODULE_5__file_file_component__["a" /* FileComponent */]
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

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_drag_drop__ = __webpack_require__("../../../../ng2-drag-drop/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_drag_drop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_drag_drop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__task_group_task_group_component__ = __webpack_require__("../../../../../src/app/task-group/task-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__calendar_calendar_service__ = __webpack_require__("../../../../../src/app/calendar/calendar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__calendar_calendar_calendar__ = __webpack_require__("../../../../../src/app/calendar/calendar/calendar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__calendar_calendar_component__ = __webpack_require__("../../../../../src/app/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__file_file_component__ = __webpack_require__("../../../../../src/app/file/file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__file_file_service__ = __webpack_require__("../../../../../src/app/file/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_file_upload__);
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
                __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__task_group_task_group_component__["a" /* TaskGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_15__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_19__calendar_calendar_component__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_18__calendar_calendar_calendar__["a" /* CalendarPrototypeComponent */],
                __WEBPACK_IMPORTED_MODULE_20__file_file_component__["a" /* FileComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_drag_drop__["Ng2DragDropModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["i" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["h" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_22_ng2_file_upload__["FileUploadModule"],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__home_home_service__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_17__calendar_calendar_service__["a" /* CalendarService */], __WEBPACK_IMPORTED_MODULE_21__file_file_service__["a" /* FileService */], { provide: __WEBPACK_IMPORTED_MODULE_6__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_6__angular_common__["HashLocationStrategy"] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 5;\n  background: rgba(230, 230, 230, 0.8);\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.form div{\n  background-color: #00b3ee;\n  z-index: 10;\n  width: 40%;\n  height: 40%;\n  position: absolute;\n  left: 50%;\n  top: 30%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.form div input{\n  text-align: center;\n  width: 80%;\n}\n\nbody {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/pic/login-background.svg") + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<angular2-fullcalendar [options]=\"options\">\n</angular2-fullcalendar>\n\n<div id=\"event-form\" class=\"form\" style=\"display: none\" (click)=\"hideThisForm($event)\">\n  <div (click)=\"notHideThisForm($event)\">\n    <span>title</span>\n    <input type=\"text\" [(ngModel)]=\"eventTitle\">\n    <span>content</span>\n    <input type=\"text\" [(ngModel)]=\"eventContent\">\n    <span>starttime</span>\n    <input type=\"datetime-local\" value=\"2017-12-13T07:00\" [(ngModel)]=\"eventStartTime\">\n    <span>endtime</span>\n    <input type=\"datetime-local\" [(ngModel)]=\"eventEndTime\">\n    <span>remindtime</span>\n    <input type=\"datetime-local\" [(ngModel)]=\"eventRemindTime\">\n    <span (click)=\"addevent()\">submit</span>\n  </div>\n</div>\n\n<div id=\"event-detail-form\" class=\"form\" style=\"display: none\" (click)=\"hideThisForm($event)\">\n  <div (click)=\"notHideThisForm($event)\">\n    <span id=\"id\" style=\"display: none\"></span>\n    <span>title</span>\n    <span id=\"title\"></span>\n    <span>content</span>\n    <span id=\"content\"></span>\n    <span>starttime</span>\n    <span id=\"st\"></span>\n    <span>endtime</span>\n    <span id=\"et\"></span>\n    <span>remindtime</span>\n    <span id=\"rt\"></span>\n    <span (click)=\"close()\">close</span>\n    <span (click)=\"removeevent()\">delete</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullcalendar__ = __webpack_require__("../../../../fullcalendar/dist/fullcalendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullcalendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fullcalendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_service__ = __webpack_require__("../../../../../src/app/calendar/calendar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CalendarComponent = (function () {
    function CalendarComponent(element, cs) {
        this.element = element;
        this.cs = cs;
        this.events = [];
        this.options = {
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek,basicDay'
            },
            height: 'auto',
            eventContent: String,
            navLinks: true,
            dayClick: function (date, jsEvent, view) {
                // change the day's background color just for fun
                document.getElementById('event-form').style.display = 'block';
            },
            eventClick: function (calEvent, jsEvent, view) {
                // change the border color just for fun
                document.getElementById('event-detail-form').style.display = 'block';
                document.getElementById('id').textContent = calEvent.id;
                document.getElementById('title').textContent = calEvent.title;
                document.getElementById('content').textContent = calEvent.content;
                document.getElementById('st').textContent = calEvent.start;
                document.getElementById('et').textContent = calEvent.end;
                document.getElementById('rt').textContent = calEvent.remind;
            }
        };
    }
    CalendarComponent.prototype.clearInput = function () {
        this.eventId = null;
        this.eventTitle = "";
        this.eventContent = "";
        this.eventStartTime = null;
        this.eventEndTime = null;
        this.eventRemindTime = null;
    };
    CalendarComponent.prototype.addEventToArray = function (id, title, content, start, end, remind) {
        var tmp = {
            id: id,
            title: title,
            content: content,
            start: start,
            end: end,
            remind: remind
        };
        this.events.push(tmp);
        __WEBPACK_IMPORTED_MODULE_1_jquery__('angular2-fullcalendar').fullCalendar('addEventSource', [tmp]);
        // $('angular2-fullcalendar').fullCalendar('option', 'height', 500);
    };
    CalendarComponent.prototype.close = function () {
        this.clearInput();
        document.getElementById('event-detail-form').style.display = 'none';
    };
    CalendarComponent.prototype.removeevent = function () {
        var _this = this;
        var eventId = document.getElementById('id').textContent;
        this.cs.removeEvent(parseInt(eventId))
            .then(function (res) {
            __WEBPACK_IMPORTED_MODULE_1_jquery__('angular2-fullcalendar').fullCalendar('removeEvents', [eventId]);
            _this.close();
        });
    };
    CalendarComponent.prototype.addevent = function () {
        var _this = this;
        if (this.eventTitle == "" || this.eventContent == ""
            || this.eventStartTime == null || !this.eventEndTime == null
            || this.eventRemindTime == null) {
            alert("信息不完整！");
            return;
        }
        console.log(this.eventStartTime);
        this.cs.createEvent(this.eventTitle, this.eventContent, this.eventStartTime, this.eventEndTime, this.eventRemindTime)
            .then(function (res) {
            _this.addEventToArray(res["eventId"], _this.eventTitle, _this.eventContent, _this.eventStartTime, _this.eventEndTime, _this.eventRemindTime);
            document.getElementById('event-form').style.display = 'none';
        });
    };
    CalendarComponent.prototype.ngOnInit = function () {
    };
    CalendarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.cs.getData().then(function (res) {
            __WEBPACK_IMPORTED_MODULE_1_jquery__('angular2-fullcalendar').fullCalendar(_this.options);
            var events = res["events"];
            for (var i = 0; i < events.length; i++) {
                var o = events[i];
                _this.addEventToArray(o["id"], o["title"], o["content"], o["startTime"], o["endTime"], o["remindTime"]);
            }
        });
    };
    CalendarComponent.prototype.hideThisForm = function (e) {
        this.clearInput();
        e.target.style.display = 'none';
    };
    CalendarComponent.prototype.notHideThisForm = function (e) {
        e.stopPropagation();
    };
    CalendarComponent.prototype.fullCalendar = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!args) {
            return;
        }
        switch (args.length) {
            case 0:
                return;
            case 1:
                return __WEBPACK_IMPORTED_MODULE_1_jquery__(this.element.nativeElement).fullCalendar(args[0]);
            case 2:
                return __WEBPACK_IMPORTED_MODULE_1_jquery__(this.element.nativeElement).fullCalendar(args[0], args[1]);
            case 3:
                return __WEBPACK_IMPORTED_MODULE_1_jquery__(this.element.nativeElement).fullCalendar(args[0], args[1], args[2]);
        }
    };
    CalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__("../../../../../src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/calendar/calendar.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__calendar_service__["a" /* CalendarService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_3__calendar_service__["a" /* CalendarService */]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/calendar/calendar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarService = (function () {
    function CalendarService(http) {
        this.http = http;
    }
    CalendarService.prototype.getData = function () {
        return this.http.get("/api/events/index")
            .toPromise();
    };
    CalendarService.prototype.removeEvent = function (eventId) {
        return this.http.get("/api/events/remove", {
            params: {
                eventId: eventId.toString()
            }
        }).toPromise();
    };
    CalendarService.prototype.createEvent = function (title, content, startTime, endTime, remindTime) {
        console.log("AA" + startTime);
        return this.http.post("/api/events/create", {
            title: title.toString(),
            content: content.toString(),
            startTime: startTime.toString(),
            endTime: endTime.toString(),
            remindTime: remindTime.toString()
        }).toPromise();
    };
    CalendarService.prototype.editEvent = function (eventId, title, content, startTime, endTime, remindTime) {
        return this.http.post("/api/events/editone", {
            eventId: eventId.toString(),
            title: title.toString(),
            content: content.toString(),
            startTime: startTime.toString(),
            endTime: endTime.toString(),
            remindTime: remindTime.toString()
        }).toPromise();
    };
    CalendarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CalendarService);
    return CalendarService;
}());



/***/ }),

/***/ "../../../../../src/app/calendar/calendar/calendar.html":
/***/ (function(module, exports) {

module.exports = "<div></div>\n"

/***/ }),

/***/ "../../../../../src/app/calendar/calendar/calendar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPrototypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fullcalendar__ = __webpack_require__("../../../../fullcalendar/dist/fullcalendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fullcalendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fullcalendar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarPrototypeComponent = (function () {
    function CalendarPrototypeComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarPrototypeComponent.prototype, "options", void 0);
    CalendarPrototypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/calendar/calendar/calendar.html"),
            selector: 'angular2-fullcalendar'
        })
    ], CalendarPrototypeComponent);
    return CalendarPrototypeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box;\n}\n\nhtml,body {\n  height: 100%;\n  overflow: hidden;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-weight: 400;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 1rem;\n  line-height: 1.58;\n  color: #333;\n  height: 100%;\n}\n\nbody:before {\n  height: 50%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #128ff2;\n  content: \"\";\n  z-index: 0;\n}\n\n.clearfix:after {\n  display: block;\n  content: \"\";\n  clear: both;\n}\n\n.hidden {\n  display: none;\n}\n\n.form-control {\n  width: 100%;\n  min-height: 38px;\n  font-size: 15px;\n  border: 1px solid #c8c8c8;\n}\n\n.form-group {\n  margin-bottom: 15px;\n}\n\ninput {\n  padding-left: 10px;\n  outline: none;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\nh1 {\n  font-size: 1.7em;\n}\n\na {\n  color: #128ff2;\n}\n\nbutton {\n  box-shadow: none;\n  border: 1px solid transparent;\n  font-size: 14px;\n  outline: none;\n  line-height: 100%;\n  white-space: nowrap;\n  vertical-align: middle;\n  padding: 0.6rem 1rem;\n  border-radius: 2px;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  min-height: 38px;\n  background-color: #673ab7;\n}\n\nbutton.default {\n  background-color: #673ab7;\n  color: #333;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);\n}\n\nbutton.primary {\n  background-color: #673ab7;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);\n  color: #fff;\n}\n\nbutton.accent {\n  background-color: #ff4743;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);\n  color: #fff;\n}\n\n#username-page {\n  text-align: center;\n}\n\n.username-page-container {\n  background: #fff;\n  box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);\n  border-radius: 2px;\n  width: 100%;\n  max-width: 500px;\n  display: inline-block;\n  margin-top: 42px;\n  vertical-align: middle;\n  position: relative;\n  padding: 35px 55px 35px;\n  min-height: 250px;\n}\n\n.username-page-container .username-submit {\n  margin-top: 10px;\n}\n\n\n#chat-page {\n  position: relative;\n  height: 100%;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/pic/login-background.svg") + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.chat-container {\n  max-width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #DBDDE0;\n  box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);\n  margin-top: 30px;\n  height: calc(100% + 60px);\n  max-height: 600px;\n  position: relative;\n}\n\n#chat-page ul {\n  list-style-type: none;\n  background-color: #FFF;\n  margin-left: 10px;\n  margin-right: 10px;\n  overflow: auto;\n  overflow-y: scroll;\n  padding: 0 20px 0px 20px;\n  height: calc(80% - 30px);\n}\n\n#chat-page #messageForm {\n  padding: 20px;\n}\n\n#chat-page ul li {\n  line-height: 1.5rem;\n  padding: 10px 20px;\n  margin: 0;\n  border-bottom: 1px solid #f4f4f4;\n}\n\n.chat-message {\n  padding-left: 68px;\n  position: relative;\n}\n\n.chat-message i {\n  position: absolute;\n  width: 42px;\n  height: 42px;\n  overflow: hidden;\n  left: 10px;\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 18px;\n  line-height: 42px;\n  color: #fff;\n  text-align: center;\n  border-radius: 50%;\n  font-style: normal;\n  text-transform: uppercase;\n}\n\n.chat-message span {\n  color: #333;\n  font-weight: 600;\n}\n\n.chat-message p {\n  color: #43464b;\n}\n\n#messageForm .input-group input {\n  float: left;\n  width: calc(100% - 85px);\n}\n\n#messageForm .input-group button {\n  float: left;\n  width: 80px;\n  height: 38px;\n  margin-left: 5px;\n}\n\n.chat-header {\n  text-align: center;\n  padding: 15px;\n  border-bottom: 1px solid #ececec;\n}\n\n.chat-header h2 {\n  margin: 0;\n  font-weight: 800;\n}\n\n.connecting {\n  padding-top: 5px;\n  text-align: center;\n  color: #777;\n  position: absolute;\n  top: 65px;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n      <div id=\"chat-page\">\n        <div class=\"chat-container\">\n          <div class=\"chat-header\">\n            <h2>Ostrich Chat</h2>\n          </div>\n          <ul id=\"messageArea\">\n            <li *ngFor=\"let message of messages; let i = index\"></li>\n          </ul>\n          <form id=\"messageForm\" name=\"messageForm\" nameForm=\"messageForm\">\n            <div class=\"form-group\">\n              <div class=\"input-group clearfix\">\n                <input type=\"text\" [(ngModel)]=\"message\" [ngModelOptions]=\"{standalone: true}\" id=\"message\" placeholder=\"Type a message...\" class=\"form-control\"/>\n                <button type=\"submit\" class=\"primary\" (click)=\"sendMessage()\">Send</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stompjs__ = __webpack_require__("../../../../stompjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stompjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_stompjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sockjs_client__ = __webpack_require__("../../../../sockjs-client/lib/entry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sockjs_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sockjs_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatComponent = (function () {
    function ChatComponent() {
        this.serverUrl = 'http://127.0.0.1:8080/ws';
        this.title = 'WebSockets chat';
        this.initializeWebSocketConnection();
    }
    ChatComponent.prototype.initializeWebSocketConnection = function () {
        var ws = new __WEBPACK_IMPORTED_MODULE_2_sockjs_client___default.a(this.serverUrl);
        this.stompClient = __WEBPACK_IMPORTED_MODULE_1_stompjs___default.a.over(ws);
        var that = this;
        this.stompClient.connect({}, function (frame) {
            that.stompClient.subscribe('/topic/public', function (message) {
                message = JSON.parse(message.body);
                var messageElement = document.createElement('li');
                messageElement.classList.add('chat-message');
                var usernameElement = document.createElement('span');
                var usernameText = document.createTextNode(message.sender);
                usernameElement.appendChild(usernameText);
                messageElement.appendChild(usernameElement);
                var timeElement = document.createElement('span');
                var timeText = document.createTextNode(message.sendTime);
                timeElement.appendChild(timeText);
                messageElement.appendChild(timeElement);
                var textElement = document.createElement('p');
                var messageText = document.createTextNode(message.content);
                textElement.appendChild(messageText);
                messageElement.appendChild(textElement);
                __WEBPACK_IMPORTED_MODULE_3_jquery__('#messageArea').append(messageElement);
                __WEBPACK_IMPORTED_MODULE_3_jquery__('#messageArea').scrollTop = __WEBPACK_IMPORTED_MODULE_3_jquery__('#messageArea').scrollHeight;
            });
        });
    };
    ChatComponent.prototype.sendMessage = function () {
        // console.log($('#message').val());
        var chatMessage = {
            sender: 123456,
            content: __WEBPACK_IMPORTED_MODULE_3_jquery__('#message').val(),
            sendTime: new Date()
        };
        this.stompClient.send('/app/chat.sendMessage', {}, JSON.stringify(chatMessage));
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#message').val('');
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard-wrapper {\n  height: 100%;\n  width: 100%;\n  background-image: url('/assets/pic/login-background.svg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  /* flex-wrap: nowrap; */\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n\n.toolbar-wrapper {\n  height: auto;\n}\n\n.task-groups {\n  margin-top: 10px;\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  min-width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 300px;\n}\n\n.fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.dashboard-foot {\n  min-height: 16px;\n}\n\n.add-icon-wrapper {\n  width: 80%;\n  height: 80%;\n  position: fixed;\n  left: 92%;\n  top: 85%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-wrapper\">\n  <div class=\"toolbar-wrapper\">\n    <mat-toolbar color=\"primary\">\n      <span>Ostrich</span>\n      <span class=\"fill-remaining-space\"></span>\n      <span class=\"toolbar-right\">\n        <a href=\"/#/file\" mat-button>File</a>\n        <a href=\"/#/chat\" mat-button>Chat</a>\n        <a href=\"/#/calendar\" mat-button>Calendar</a>\n        <a mat-button>Me</a>\n      </span>\n    </mat-toolbar>\n  </div>\n  <div class=\"task-groups\">\n    <div class=\"task-wrapper\" *ngFor=\"let group of getTaskGroups()\">\n      <app-task-group></app-task-group>\n    </div>\n  </div>\n  <div class=\"add-icon-wrapper\">\n    <button mat-fab color=\"primary\">\n      <mat-icon svgIcon=\"plus\"></mat-icon>\n    </button>\n  </div>\n  <footer class=\"dashboard-foot\"></footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('plus', sanitizer.bypassSecurityTrustResourceUrl('assets/pic/plus-icon.svg'));
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.getTaskGroups = function () {
        return [1, 2, 3, 4, 5, 6, 7];
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatIconRegistry */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/file/file.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\n  height: 100%;\n  width: 100%;\n  padding: 0px;\n  margin: 0px;\n}\n\n.selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n\nbutton.delete {\n  float:right;\n  margin-top: 2px;\n  margin-right: .8em;\n  background-color: gray !important;\n  color:white;\n}\n\ntr:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n}\n\n.navigator{\n    background-color: #558B2F;\n}\n\n.upload-action{\n\n    display: -webkit-inline-box;\n\n    display: -ms-inline-flexbox;\n\n    display: inline-flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 25%;\n\n    }\n.upload-content{\n    background-color: #FFFDE7;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-align: center;\n    width:70%;\n    font-weight:bold;\n    border-bottom: 1px solid #A1887F;\n    border-left: 1px solid #A1887F;\n}\n\n.current-content{\n    background-color: #F1F8E9;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-align: center;\n    width: auto;\n    font-family: fantasy;\n    border-top: 1px solid #A1887F;\n\n}\n\n.multiple-action{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 30%;\n}\n\nbutton{\n    color: #212121;\n    background-color: #FAFAFA;\n\n}\n\n\n.upload-action input{\n        font-family:serif;\n        font-weight: bolder;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/file/file.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"navigator\" style=\"background-color: #558B2F;\">\n  <h1 >\n  文件管理\n</h1>\n</div>\n<h2>\n  当前文件\n</h2>\n<button (click)=\"goback()\">返回上一级</button>\n<button (click)=\"newfolder(foldername.value); foldername.value=''\">新建文件夹</button>\n<input #foldername />\n<div class=\"current-content\">\n<table width=\"80%\">\n\n<thead>\n  <tr>\n    <th width=\"30%\">名称</th>\n      <th width=\"20%\" >类型</th>\n      <th width=\"20%\">大小</th>\n      <th width=\"20%\">更新时间</th>\n      <th width=\"15%\">下载</th>\n\n  </tr>\n</thead>\n\n<tbody>\n\n    <tr *ngFor=\"let file of files\" (click)=\"onSelect(file)\" (dblclick)=\"jump(file)\" [class.selected]=\"file === selectedFile\">\n    <td>{{file.filename}}</td>\n    <td>{{file.kind}}</td>\n    <td>{{file.size}}</td>\n    <td>{{file.LastModified}}</td>\n    <a href={{file.Url}} download={{file.filename}}>\n      <td><button mat-icon-button  class=\"delete\" type=\"button\">下载</button></td>\n    </a>\n    <td><button mat-icon-button class=\"delete\" type=\"button\" (click)=\"delete(file); $event.stopPropagation()\">删除</button></td>\n  </tr>\n</tbody>\n</table>\n</div>\n\n  <div class=\"Up\" width=\"100%\">\n   <div class=\"upload-action\">\n  <h3>上传文件</h3>\n\n\n  单个上传\n  <input  mat-mini-fab color=\"primary\" type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n\n  多个上传\n  <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  ><br/>\n\n  <div class=\"multiple-action\">\n    <button mat-raised-button color=\"red\" type=\"button\" (click)=\"uploader.uploadAll()\" (click)=\"showfiles\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n        上传全部文件\n      </button>\n      <button mat-raised-button color=\"warn\" type=\"button\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n        全部取消\n      </button>\n            <button mat-raised-button color=\"warn\" type=\"button\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n        全部移除\n      </button>\n</div>\n\n\n\n  <h3>待上传队列</h3>\n  <p>未被上传的文件数 {{ uploader?.queue?.length }}</p>\n  <p> 执行进度： {{uploader.progress}}% </p>\n  </div>\n  <div class=\"upload-content\" >\n  <table class=\"table\" width=\"100%\" >\n    <thead>\n    <tr>\n     <th width=\"30%\">名称</th>\n      <th width=\"15%\">大小</th>\n      <th width=\"15%\">上传进度</th>\n      <th width=\"20%\">上传状态</th>\n      <th width=\"20%\">操作</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    <tr *ngFor=\"let item of uploader.queue\">\n      <td><strong>{{ item?.file?.name }}</strong></td>\n      <td>{{ item?.file?.size/1024/1024 | number:'.2' }} MB </td>\n\n      <td>\n       {{item.progress}} %  </td>\n\n      <td>\n        <span *ngIf=\"item.isSuccess\">OK</span>\n        <span *ngIf=\"item.isCancel\">Cancel</span>\n        <span *ngIf=\"item.isError\">Error</span>\n      </td>\n\n      <td>\n        <button mat-fab  type=\"button\"  (click)=\"item.upload()\" (click)=\"showfiles\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n          上传\n        </button>\n        <button mat-fab  type=\"button\" (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n          取消\n        </button>\n        <button mat-fab  type=\"button\"  (click)=\"item.remove()\">\n          删除\n        </button>\n      </td>\n    </tr>\n    </tbody>\n    </table>\n  </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/file/file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_service__ = __webpack_require__("../../../../../src/app/file/file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileComponent = (function () {
    function FileComponent(fileService) {
        this.fileService = fileService;
        this.title = 'File Uploader!';
        this.url = 'http://localhost:8080';
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: this.url });
        this.files = [];
    }
    FileComponent.prototype.ngOnInit = function () {
        this.showfiles();
    };
    FileComponent.prototype.showfiles = function () {
        var _this = this;
        this.fileService.getData().
            then(function (res) {
            _this.files = [];
            console.log(res);
            for (var i = 0; i < res['files'].length; i++) {
                _this.files.push(res['files'][i]);
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    FileComponent.prototype.onSelect = function (file) {
        this.selectedFile = file;
        //this.appService.download(file.filename.toString());
    };
    FileComponent.prototype.jump = function (file) {
        var _this = this;
        this.selectedFile = file;
        if (file.kind == "folder") {
            this.fileService.jump(file.filename.toString()).
                then(function (res) {
                _this.files = [];
                for (var i = 0; i < res['files'].length; i++) {
                    _this.files.push(res['files'][i]);
                }
            }).catch(function (err) {
                console.log(err);
            });
        }
    };
    FileComponent.prototype.newfolder = function (foldername) {
        var _this = this;
        this.fileService.newfolder(foldername.toString()).
            then(function (res) {
            _this.files = [];
            for (var i = 0; i < res['files'].length; i++) {
                _this.files.push(res['files'][i]);
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    FileComponent.prototype.goback = function () {
        var _this = this;
        this.fileService.goback().
            then(function (res) {
            _this.files = [];
            for (var i = 0; i < res['files'].length; i++) {
                _this.files.push(res['files'][i]);
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    FileComponent.prototype.delete = function (file) {
        var _this = this;
        this.fileService.deletefile(file.filename, file.kind).
            then(function (res) {
            _this.files = [];
            for (var i = 0; i < res['files'].length; i++) {
                _this.files.push(res['files'][i]);
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    FileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-file',
            template: __webpack_require__("../../../../../src/app/file/file.component.html"),
            styles: [__webpack_require__("../../../../../src/app/file/file.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__file_service__["a" /* FileService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__file_service__["a" /* FileService */]])
    ], FileComponent);
    return FileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/file/file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileService = (function () {
    function FileService(http) {
        this.http = http;
    }
    FileService.prototype.getData = function () {
        return this.http.get("/files/index")
            .toPromise();
    };
    FileService.prototype.jump = function (file) {
        return this.http.get("/files/jump", {
            params: {
                "filename": file.toString()
            }
        }).toPromise();
    };
    FileService.prototype.newfolder = function (foldername) {
        return this.http.get("/files/newfolder", {
            params: {
                "foldername": foldername.toString()
            }
        }).toPromise();
    };
    FileService.prototype.goback = function () {
        return this.http.get("/files/goback").toPromise();
    };
    FileService.prototype.deletefile = function (file, kind) {
        return this.http.get("/files/delete", {
            params: {
                "filename": file.toString(),
                "kind": kind.toString()
            }
        }).toPromise();
    };
    FileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.button-col{\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n\n  -webkit-box-pack: center;\n\n      -ms-flex-pack: center;\n\n          justify-content: center;\n\n   color:#FFF5DB;\n    padding:.3em;\n    text-align: center;\n    width:auto;\n    height:35px;\n    font-weight:bold;\n\n\n}\ninput.txt {\n   background-color:#FFFDFB;\n    border: 0;\n    padding: 1em;\n    width: 10%;\n    margin-top: 10px;\n}\n\n .btn{\n\n    height: 50px;\n    border:#FFE1B6 solid 2px ;\n\n    width:200px;\n    padding:0em 2em;\n    background:#616161;\n    color:#FC6E5e;\n    cursor:pointer;\n    font-family: sans-serif;\n     font-size: 20px;\n}\n\n.task-column {\n  margin-top: 10px;\n  margin-left: 20px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  box-sizing: border-box;\n  background-color: #FDE9DF;\n  width: 20%;\n  height: 600px;\n  max-height:600px;\n  overflow-x: hidden;\n  overflow-y: auto;\n\n}\n\n.task-column h1 {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-family: fantasy;\n  text-align: center;\n  display: block;\n\n}\n\n.item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 8px 0;\n  font-family: serif;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  background-color:#FF9F68;\n  box-sizing: border-box;\n  text-align: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 20pt;\n  width: 80%;\n  border-radius: 3px;\n}\n\n.item-priority {\n  width: 10px;\n  height: 100px;\n}\n\n.item-content {\n  margin: auto;\n}\n\n.form {\n  position: absolute;\n  z-index: 5;\n  background: rgba(230, 230, 230, 0.8);\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.form div{\n  background-color: #00b3ee;\n  z-index: 10;\n  width: 40%;\n  height: 40%;\n  position: absolute;\n  left: 50%;\n  top: 30%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.form div input{\n  text-align: center;\n  width: 80%;\n}\n\n.priority-1{\n  background-color: #00b3ee;\n}\n\n.priority-2{\n  background-color: #262626;\n}\n\n.priority-3{\n  background-color: #FC6E5e;\n}\n\n#title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-weight: bold;\n}\n\n#title h3 {\n  padding-left: 10px;\n  max-width: 150px;\n  min-width: 150px;\n}\n\n#title a{\n  margin-left: auto;\n  width: 20px;\n}\n\n.add-btn {\n  margin-top: 20px;\n  color: green;\n}\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
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
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* trigger */])('tasks', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('.6s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 0, transform: 'translateX(-75%)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: .5, transform: 'translateX(35px)', offset: 0.3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
                            ]))
                        ]), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('.6s ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: .5, transform: 'translateX(-35px)', offset: 0.3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 0, transform: 'translateX(75%)', offset: 1.0 }),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
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

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-container {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  height: 100%;\n  background-image: url('/assets/pic/login-background.svg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.card-wrapper {\n  -ms-flex-item-align: center;\n      align-self: center;\n  max-width: 400px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.login-form > * {\n  width: 100%;\n}\n\n.login-form input {\n  font-size: 16px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\n  <div class=\"card-wrapper\">\n    <mat-card>\n      <mat-card-title>登录</mat-card-title>\n      <mat-card-subtitle>输入您的账户信息以使用 Ostrich</mat-card-subtitle>\n      <mat-card-content>\n        <form class=\"login-form\">\n          <mat-form-field>\n            <input matInput type=\"email\" placeholder=\"电子邮箱地址\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput type=\"password\" placeholder=\"密码\">\n          </mat-form-field>\n          <button mat-raised-button type=\"submit\" color=\"primary\">提交</button>\n        </form>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/task-group/task-group.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-group-wrapper {\n  width: 300px;\n  margin: 10px 10px;\n  padding-bottom: 20px;\n  border-radius: 2px;\n  background-color: #DBDDE0;\n  display: inline-block;\n  height: 100%;\n}\n\n.card-list-wrapper {\n  overflow-y: scroll;\n  height: 95%;\n}\n\n.card-group-title {\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px;\n  margin-bottom: -2px;\n  font-weight: bold;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.card-wrapper {\n  margin: 8px 10px;\n}\n\n.card-finished {\n  padding: 16px 24px 2px 24px;\n  /* background-color: lightgray; */\n  background-color: white;\n  opacity: 0.6;\n  margin: 4px 2px;\n  box-shadow: 0px 0px 2px #AAAAAA;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/task-group/task-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-group-wrapper\">\n  <h3 class=\"card-group-title\">Card Group 1</h3>\n  <div class=\"card-list-wrapper\">\n    <mat-selection-list>\n      <div class=\"card-wrapper\" draggable\n        *ngFor=\"let task of getUnfinishedTasks()\"\n        (dragstart)=\"cardDragStart($event)\"\n        (dragend)=\"cardDragEnd($event)\"\n        [@toggleCompletionAnimation]=\"task.finished ? 'done' : 'undone'\">\n        <mat-card>\n          <mat-card-content><mat-checkbox color=\"primary\" (click)=\"toggleTask(task)\" [ngModel]=\"task.finished\">{{task.title}}</mat-checkbox></mat-card-content>\n        </mat-card>\n      </div>\n    </mat-selection-list>\n    <mat-selection-list>\n      <div class=\"card-wrapper\"\n        *ngFor=\"let task of getFinishedTasks()\">\n        <div class=\"card-finished\">\n          <mat-card-content><mat-checkbox color=\"primary\" (click)=\"toggleTask(task)\" [ngModel]=\"task.finished\">{{task.title}}</mat-checkbox></mat-card-content>\n        </div>\n      </div>\n    </mat-selection-list>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/task-group/task-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_group_service__ = __webpack_require__("../../../../../src/app/task-group/task-group.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskGroupComponent = (function () {
    function TaskGroupComponent(tasksService) {
        this.tasksStore = tasksService;
    }
    TaskGroupComponent.prototype.ngOnInit = function () {
    };
    TaskGroupComponent.prototype.getFinishedTasks = function () {
        return this.tasksStore.getFinishedTasks();
    };
    TaskGroupComponent.prototype.getUnfinishedTasks = function () {
        return this.tasksStore.getUnfinishedTasks();
    };
    TaskGroupComponent.prototype.toggleTask = function (task) {
        if (task.finished) {
            this.tasksStore.undoFinishTask(task);
        }
        else {
            this.tasksStore.finishTask(task);
        }
    };
    TaskGroupComponent.prototype.cardDragStart = function (event) {
        console.log('Drag started', event);
    };
    TaskGroupComponent.prototype.cardDragEnd = function (event) {
        console.log('Drag ended', event);
    };
    TaskGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-group',
            template: __webpack_require__("../../../../../src/app/task-group/task-group.component.html"),
            styles: [__webpack_require__("../../../../../src/app/task-group/task-group.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__task_group_service__["a" /* TaskGroupService */]],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('toggleCompletionAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('undone', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('undone => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(200, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, display: 'none', height: 0 }))
                    ])
                ])
            ]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__task_group_service__["a" /* TaskGroupService */]])
    ], TaskGroupComponent);
    return TaskGroupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/task-group/task-group.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TaskModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskGroupModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_node_uuid__ = __webpack_require__("../../../../node-uuid/uuid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_node_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_node_uuid__);

var TaskModel = (function () {
    function TaskModel(title, content) {
        if (content === void 0) { content = ''; }
        this.uuid = __WEBPACK_IMPORTED_MODULE_0_node_uuid___default.a.v4();
        this.finished = false;
        this.title = title;
        this.content = content;
    }
    return TaskModel;
}());

var TaskGroupModel = (function () {
    function TaskGroupModel(name) {
        this.finishedTasks = [];
        this.unfinishedTasks = [];
        this.name = name;
    }
    TaskGroupModel.prototype.addTask = function (title) {
        this.unfinishedTasks.push(new TaskModel(title));
    };
    return TaskGroupModel;
}());



/***/ }),

/***/ "../../../../../src/app/task-group/task-group.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskGroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__task_group_model__ = __webpack_require__("../../../../../src/app/task-group/task-group.model.ts");

var TaskGroupService = (function () {
    function TaskGroupService() {
        this.taskGroup = new __WEBPACK_IMPORTED_MODULE_0__task_group_model__["a" /* TaskGroupModel */]('untitled');
        this.taskGroup.addTask('Task1');
        this.taskGroup.addTask('Task3');
        this.taskGroup.addTask('Task5');
        this.taskGroup.addTask('Task3');
        this.taskGroup.addTask('Task2');
        this.taskGroup.addTask('Task3');
        this.taskGroup.addTask('Task3');
        this.taskGroup.addTask('Task4');
    }
    TaskGroupService.prototype.getFinishedTasks = function () {
        return this.taskGroup.finishedTasks;
    };
    TaskGroupService.prototype.getUnfinishedTasks = function () {
        return this.taskGroup.unfinishedTasks;
    };
    TaskGroupService.prototype.finishTask = function (task) {
        var index = this.taskGroup.unfinishedTasks.indexOf(task);
        if (index > -1) {
            task.finished = true;
            this.taskGroup.finishedTasks.unshift(task);
            this.taskGroup.unfinishedTasks.splice(index, 1);
        }
    };
    TaskGroupService.prototype.undoFinishTask = function (task) {
        var index = this.taskGroup.finishedTasks.indexOf(task);
        if (index > -1) {
            task.finished = false;
            this.taskGroup.unfinishedTasks.unshift(task);
            this.taskGroup.finishedTasks.splice(index, 1);
        }
    };
    return TaskGroupService;
}());



/***/ }),

/***/ "../../../../../src/assets/pic/login-background.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "login-background.e534d1e44213a579a977.svg";

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
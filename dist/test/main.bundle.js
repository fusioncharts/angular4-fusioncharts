webpackJsonp(["main"],{

/***/ "../../../../../index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_fusioncharts_fusioncharts_module__ = __webpack_require__("../../../../../src/fusioncharts/fusioncharts.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_fusioncharts_fusioncharts_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_fusioncharts_fusioncharts_component__ = __webpack_require__("../../../../../src/fusioncharts/fusioncharts.component.ts");
/* unused harmony reexport FusionChartsComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_fusioncharts_fusioncharts_service__ = __webpack_require__("../../../../../src/fusioncharts/fusioncharts.service.ts");
/* unused harmony reexport FusionChartsService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_fusioncharts_fusioncharts_core_service__ = __webpack_require__("../../../../../src/fusioncharts/fusioncharts.core.service.ts");
/* unused harmony reexport FusionChartsCoreService */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/fusioncharts/fusioncharts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FusionChartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fusioncharts_service__ = __webpack_require__("../../../../../src/fusioncharts/fusioncharts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fusioncharts_options__ = __webpack_require__("../../../../../src/fusioncharts/fusioncharts.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils__ = __webpack_require__("../../../../../src/utils/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FusionChartsComponent = (function () {
    function FusionChartsComponent(fusionChartsService, ngZone) {
        this.fusionChartsService = fusionChartsService;
        this.ngZone = ngZone;
    }
    FusionChartsComponent.prototype.ngOnInit = function () {
        this.oldOptions = this.getCurrentOptions();
    };
    FusionChartsComponent.prototype.ngDoCheck = function () {
        this.detectChanges();
    };
    FusionChartsComponent.prototype.ngAfterViewInit = function () {
        this.renderChart();
    };
    FusionChartsComponent.prototype.ngOnDestroy = function () {
        this.chartObj.dispose();
    };
    FusionChartsComponent.prototype.detectChanges = function () {
        var currentOptions = this.getCurrentOptions();
        var oldOptions = this.oldOptions;
        var optionsUpdatedNatively = [
            'width',
            'height',
            'type',
            'dataFormat',
            'dataSource',
            'events'
        ];
        this.checkAndUpdateChartDimensions(currentOptions, oldOptions);
        this.checkAndUpdateChartType(currentOptions, oldOptions);
        this.checkAndUpdateChartData(currentOptions, oldOptions);
        this.checkAndUpdateEvents(currentOptions, oldOptions);
        this.checkAndUpdateRestOptions(__WEBPACK_IMPORTED_MODULE_2__fusioncharts_options__["a" /* fusonChartsOptions */].filter(function (option) { return optionsUpdatedNatively.indexOf(option) === -1; }), currentOptions, oldOptions);
        this.oldOptions = currentOptions;
    };
    FusionChartsComponent.prototype.checkAndUpdateChartDimensions = function (currentOptions, oldOptions) {
        var _this = this;
        var currWidth = currentOptions.width;
        var currHeight = currentOptions.height;
        var oldWidth = oldOptions.width;
        var oldHeight = oldOptions.height;
        if (String(currWidth) !== String(oldWidth) || String(currHeight) !== String(oldHeight)) {
            if (!__WEBPACK_IMPORTED_MODULE_3__utils_utils__["d" /* isUndefined */](currWidth) && !__WEBPACK_IMPORTED_MODULE_3__utils_utils__["d" /* isUndefined */](currHeight)) {
                this.runOutsideAngular(function () {
                    _this.chartObj.resizeTo(currWidth, currHeight);
                });
            }
            else {
                if (!__WEBPACK_IMPORTED_MODULE_3__utils_utils__["d" /* isUndefined */](currWidth)) {
                    this.runOutsideAngular(function () {
                        _this.chartObj.resizeTo({
                            w: currWidth
                        });
                    });
                }
                if (!__WEBPACK_IMPORTED_MODULE_3__utils_utils__["d" /* isUndefined */](currHeight)) {
                    this.runOutsideAngular(function () {
                        _this.chartObj.resizeTo({
                            h: currHeight
                        });
                    });
                }
            }
        }
    };
    FusionChartsComponent.prototype.checkAndUpdateChartType = function (currentOptions, oldOptions) {
        var _this = this;
        var currType = currentOptions.type;
        var oldType = oldOptions.type;
        if (String(currType).toLowerCase() !== String(oldType).toLowerCase()) {
            if (!__WEBPACK_IMPORTED_MODULE_3__utils_utils__["d" /* isUndefined */](currType)) {
                this.runOutsideAngular(function () {
                    _this.chartObj.chartType(String(currType).toLowerCase());
                });
            }
        }
    };
    FusionChartsComponent.prototype.checkAndUpdateChartData = function (currentOptions, oldOptions) {
        var _this = this;
        var currDataFormat = currentOptions.dataFormat;
        var currData = currentOptions.dataSource;
        var oldDataFormat = oldOptions.dataFormat;
        var oldData = oldOptions.dataSource;
        if (String(currDataFormat).toLowerCase() !== String(oldDataFormat).toLowerCase()) {
            if (!__WEBPACK_IMPORTED_MODULE_3__utils_utils__["d" /* isUndefined */](currDataFormat) && !__WEBPACK_IMPORTED_MODULE_3__utils_utils__["d" /* isUndefined */](currData)) {
                this.runOutsideAngular(function () {
                    _this.chartObj.setChartData(currData, String(currDataFormat).toLowerCase());
                    // If the chart dataFormat is changed then
                    // animate the chart to show the changes
                    _this.chartObj.render();
                });
            }
        }
        else if (!this.isSameChartData(currData, oldData)) {
            if (!__WEBPACK_IMPORTED_MODULE_3__utils_utils__["d" /* isUndefined */](currData)) {
                this.runOutsideAngular(function () {
                    _this.chartObj.setChartData(currData, 
                    // When dataFormat is not given, but data is changed,
                    // then use 'json' as default dataFormat
                    currDataFormat ? String(currDataFormat).toLowerCase() : 'json');
                });
            }
        }
    };
    FusionChartsComponent.prototype.isSameChartData = function (currData, oldData) {
        if (__WEBPACK_IMPORTED_MODULE_3__utils_utils__["b" /* isObject */](currData) && __WEBPACK_IMPORTED_MODULE_3__utils_utils__["b" /* isObject */](oldData)) {
            return __WEBPACK_IMPORTED_MODULE_3__utils_utils__["c" /* isSameObjectContent */](currData, oldData);
        }
        else {
            return currData === oldData;
        }
    };
    FusionChartsComponent.prototype.checkAndUpdateEvents = function (currentOptions, oldOptions) {
        var _this = this;
        var currEvents = currentOptions.events;
        var oldEvents = oldOptions.events;
        var temp1, temp2;
        if (this.detectChartEventsChange(currEvents, oldEvents)) {
            if (!__WEBPACK_IMPORTED_MODULE_3__utils_utils__["d" /* isUndefined */](currEvents)) {
                temp1 = Object.assign({}, currEvents);
                temp2 = __WEBPACK_IMPORTED_MODULE_3__utils_utils__["d" /* isUndefined */](oldEvents) ? {} : Object.assign({}, oldEvents);
                Object.keys(temp2).forEach(function (eventName) {
                    if (temp2[eventName] === temp1[eventName]) {
                        temp1[eventName] = undefined;
                    }
                    else {
                        _this.runOutsideAngular(function () {
                            _this.chartObj.removeEventListener(eventName, temp2[eventName]);
                        });
                    }
                });
                Object.keys(temp1).forEach(function (eventName) {
                    if (temp1[eventName]) {
                        _this.runOutsideAngular(function () {
                            _this.chartObj.addEventListener(eventName, temp1[eventName]);
                        });
                    }
                });
            }
        }
    };
    FusionChartsComponent.prototype.detectChartEventsChange = function (currEvents, oldEvents) {
        if (__WEBPACK_IMPORTED_MODULE_3__utils_utils__["b" /* isObject */](currEvents) && __WEBPACK_IMPORTED_MODULE_3__utils_utils__["b" /* isObject */](oldEvents)) {
            return !(this.isSameChartEvents(currEvents, oldEvents));
        }
        else {
            return !(currEvents === oldEvents);
        }
    };
    FusionChartsComponent.prototype.isSameChartEvents = function (currEvents, oldEvents) {
        if (Object.keys(currEvents).length !== Object.keys(oldEvents).length) {
            return false;
        }
        var currEventNames = Object.keys(currEvents);
        for (var i = 0; i < currEventNames.length; ++i) {
            var evName = currEventNames[i];
            if (currEvents[evName] !== oldEvents[evName]) {
                return false;
            }
        }
        return true;
    };
    FusionChartsComponent.prototype.checkAndUpdateRestOptions = function (restOptions, currentOptions, oldOptions) {
        var _this = this;
        var optionsUpdated = false;
        restOptions.forEach(function (optionName) {
            var currValue = currentOptions[optionName];
            var oldValue = oldOptions[optionName];
            if (!_this.isSameOptionValue(currValue, oldValue)) {
                if (!__WEBPACK_IMPORTED_MODULE_3__utils_utils__["d" /* isUndefined */](currValue)) {
                    if (_this.chartObj.options && _this.chartObj.options.hasOwnProperty(optionName)) {
                        _this.chartObj.options[optionName] = currValue;
                        optionsUpdated = true;
                    }
                }
            }
        });
        if (optionsUpdated) {
            this.runOutsideAngular(function () {
                _this.chartObj.render(); // re-render the chart to reflect the changes
            });
        }
    };
    FusionChartsComponent.prototype.isSameOptionValue = function (currValue, oldValue) {
        if (__WEBPACK_IMPORTED_MODULE_3__utils_utils__["b" /* isObject */](currValue) && __WEBPACK_IMPORTED_MODULE_3__utils_utils__["b" /* isObject */](oldValue)) {
            return __WEBPACK_IMPORTED_MODULE_3__utils_utils__["c" /* isSameObjectContent */](currValue, oldValue);
        }
        else {
            return String(currValue) === String(oldValue);
        }
    };
    FusionChartsComponent.prototype.renderChart = function () {
        var _this = this;
        var currentOptions = this.getCurrentOptions();
        var chartObj = this.chartObj;
        currentOptions.renderAt = this.chartContainer.nativeElement;
        if (chartObj && chartObj.dispose) {
            chartObj.dispose();
        }
        this.chartObj = this.fusionChartsService.newFusionChartsInstance(currentOptions);
        this.runOutsideAngular(function () {
            _this.chartObj.render();
        });
    };
    FusionChartsComponent.prototype.getCurrentOptions = function () {
        var _this = this;
        var chartConfig = this.chartConfig ? this.chartConfig : {};
        var inlineOptions = __WEBPACK_IMPORTED_MODULE_2__fusioncharts_options__["a" /* fusonChartsOptions */].reduce(function (options, optionName) {
            options[optionName] = _this[optionName];
            return options;
        }, {});
        Object.assign(inlineOptions, chartConfig);
        if (__WEBPACK_IMPORTED_MODULE_3__utils_utils__["b" /* isObject */](inlineOptions['dataSource'])) {
            inlineOptions['dataSource'] = __WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* deepCopyOf */](inlineOptions['dataSource']);
        }
        if (__WEBPACK_IMPORTED_MODULE_3__utils_utils__["b" /* isObject */](inlineOptions['link'])) {
            inlineOptions['link'] = __WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* deepCopyOf */](inlineOptions['link']);
        }
        if (__WEBPACK_IMPORTED_MODULE_3__utils_utils__["b" /* isObject */](inlineOptions['events'])) {
            var actEvents_1 = inlineOptions['events'];
            var wrapperEvents_1 = {};
            var hiddenProp_1 = '__wrapper_for_angular_zone__';
            var currentFCComp_1 = this;
            Object.keys(actEvents_1).forEach(function (eventName) {
                var wrapperEventListner;
                if (actEvents_1[eventName][hiddenProp_1]) {
                    wrapperEventListner = actEvents_1[eventName][hiddenProp_1];
                }
                else {
                    wrapperEventListner = (function (actEventListener) {
                        return function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            var callingContext = this;
                            currentFCComp_1.ngZone.run(function () {
                                actEventListener.call.apply(actEventListener, [callingContext].concat(args));
                            });
                        };
                    })(actEvents_1[eventName]);
                    actEvents_1[eventName][hiddenProp_1] = wrapperEventListner;
                }
                wrapperEvents_1[eventName] = wrapperEventListner;
            });
            inlineOptions['events'] = wrapperEvents_1;
        }
        return inlineOptions;
    };
    FusionChartsComponent.prototype.runOutsideAngular = function (fn) {
        this.ngZone.runOutsideAngular(function () {
            setTimeout(fn);
        });
    };
    return FusionChartsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('chartContainer'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], FusionChartsComponent.prototype, "chartContainer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FusionChartsComponent.prototype, "chartConfig", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FusionChartsComponent.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FusionChartsComponent.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataFormat", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FusionChartsComponent.prototype, "dataSource", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FusionChartsComponent.prototype, "events", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FusionChartsComponent.prototype, "link", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], FusionChartsComponent.prototype, "showDataLoadingMessage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], FusionChartsComponent.prototype, "showChartLoadingMessage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "baseChartMessageFont", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "baseChartMessageFontSize", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "baseChartMessageColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataLoadStartMessage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataLoadErrorMessage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataInvalidMessage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataEmptyMessage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "typeNotSupportedMessage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "loadMessage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "renderErrorMessage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "containerBackgroundColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FusionChartsComponent.prototype, "containerBackgroundOpacity", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "containerClassName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "baseChartMessageImageHAlign", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "baseChartMessageImageVAlign", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FusionChartsComponent.prototype, "baseChartMessageImageAlpha", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FusionChartsComponent.prototype, "baseChartMessageImageScale", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "typeNotSupportedMessageImageHAlign", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "typeNotSupportedMessageImageVAlign", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FusionChartsComponent.prototype, "typeNotSupportedMessageImageAlpha", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FusionChartsComponent.prototype, "typeNotSupportedMessageImageScale", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataLoadErrorMessageImageHAlign", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataLoadErrorMessageImageVAlign", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FusionChartsComponent.prototype, "dataLoadErrorMessageImageAlpha", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FusionChartsComponent.prototype, "dataLoadErrorMessageImageScale", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataLoadStartMessageImageHAlign", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataLoadStartMessageImageVAlign", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FusionChartsComponent.prototype, "dataLoadStartMessageImageAlpha", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FusionChartsComponent.prototype, "dataLoadStartMessageImageScale", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataInvalidMessageImageHAlign", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataInvalidMessageImageVAlign", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FusionChartsComponent.prototype, "dataInvalidMessageImageAlpha", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FusionChartsComponent.prototype, "dataInvalidMessageImageScale", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataEmptyMessageImageHAlign", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataEmptyMessageImageVAlign", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FusionChartsComponent.prototype, "dataEmptyMessageImageAlpha", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FusionChartsComponent.prototype, "dataEmptyMessageImageScale", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "renderErrorMessageImageHAlign", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "renderErrorMessageImageVAlign", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FusionChartsComponent.prototype, "renderErrorMessageImageAlpha", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FusionChartsComponent.prototype, "renderErrorMessageImageScale", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "loadMessageImageHAlign", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "loadMessageImageVAlign", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FusionChartsComponent.prototype, "loadMessageImageAlpha", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FusionChartsComponent.prototype, "loadMessageImageScale", void 0);
FusionChartsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'fusioncharts',
        template: '<div #chartContainer></div>'
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__fusioncharts_service__["a" /* FusionChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fusioncharts_service__["a" /* FusionChartsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]) === "function" && _c || Object])
], FusionChartsComponent);

var _a, _b, _c;
//# sourceMappingURL=fusioncharts.component.js.map

/***/ }),

/***/ "../../../../../src/fusioncharts/fusioncharts.core.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FusionChartsCoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FusionChartsCoreService = (function () {
    function FusionChartsCoreService() {
    }
    return FusionChartsCoreService;
}());
FusionChartsCoreService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], FusionChartsCoreService);

//# sourceMappingURL=fusioncharts.core.service.js.map

/***/ }),

/***/ "../../../../../src/fusioncharts/fusioncharts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideFusionChartsCoreService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FusionChartsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fusioncharts_component__ = __webpack_require__("../../../../../src/fusioncharts/fusioncharts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fusioncharts_service__ = __webpack_require__("../../../../../src/fusioncharts/fusioncharts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fusioncharts_core_service__ = __webpack_require__("../../../../../src/fusioncharts/fusioncharts.core.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




function provideFusionChartsCoreService(fusionChartsCore, fusionChartsModules) {
    return [
        {
            provide: __WEBPACK_IMPORTED_MODULE_3__fusioncharts_core_service__["a" /* FusionChartsCoreService */],
            multi: false,
            useValue: {
                core: fusionChartsCore,
                modules: fusionChartsModules
            }
        }
    ];
}
var FusionChartsModule = FusionChartsModule_1 = (function () {
    function FusionChartsModule() {
    }
    FusionChartsModule.forRoot = function (fusionChartsCore) {
        var fusionChartsModules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fusionChartsModules[_i - 1] = arguments[_i];
        }
        return {
            ngModule: FusionChartsModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__fusioncharts_service__["a" /* FusionChartsService */],
                provideFusionChartsCoreService(fusionChartsCore, fusionChartsModules)
            ]
        };
    };
    return FusionChartsModule;
}());
FusionChartsModule = FusionChartsModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__fusioncharts_component__["a" /* FusionChartsComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__fusioncharts_component__["a" /* FusionChartsComponent */]
        ]
    })
], FusionChartsModule);

var FusionChartsModule_1;
//# sourceMappingURL=fusioncharts.module.js.map

/***/ }),

/***/ "../../../../../src/fusioncharts/fusioncharts.options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fusonChartsOptions; });
var fusonChartsOptions = [
    'type',
    'id',
    'width',
    'height',
    'dataFormat',
    'dataSource',
    'events',
    'link',
    'showDataLoadingMessage',
    'showChartLoadingMessage',
    'baseChartMessageFont',
    'baseChartMessageFontSize',
    'baseChartMessageColor',
    'dataLoadStartMessage',
    'dataLoadErrorMessage',
    'dataInvalidMessage',
    'dataEmptyMessage',
    'typeNotSupportedMessage',
    'loadMessage',
    'renderErrorMessage',
    'containerBackgroundColor',
    'containerBackgroundOpacity',
    'containerClassName',
    'baseChartMessageImageHAlign',
    'baseChartMessageImageVAlign',
    'baseChartMessageImageAlpha',
    'baseChartMessageImageScale',
    'typeNotSupportedMessageImageHAalign',
    'typeNotSupportedMessageImageVAlign',
    'typeNotSupportedMessageImageAlpha',
    'typeNotSupportedMessageImageScale',
    'dataLoadErrorMessageImageHAlign',
    'dataLoadErrorMessageImageVAlign',
    'dataLoadErrorMessageImageAlpha',
    'dataLoadErrorMessageImageScale',
    'dataLoadStartMessageImageHAlign',
    'dataLoadStartMessageImageVAlign',
    'dataLoadStartMessageImageAlpha',
    'dataLoadStartMessageImageScale',
    'dataInvalidMessageImageHAlign',
    'dataInvalidMessageImageVAlign',
    'dataInvalidMessageImageAlpha',
    'dataInvalidMessageImageScale',
    'dataEmptyMessageImageHAlign',
    'dataEmptyMessageImageVAlign',
    'dataEmptyMessageImageAlpha',
    'dataEmptyMessageImageScale',
    'renderErrorMessageImageHAlign',
    'renderErrorMessageImageVAlign',
    'renderErrorMessageImageAlpha',
    'renderErrorMessageImageScale',
    'loadMessageImageHAlign',
    'loadMessageImageVAlign',
    'loadMessageImageAlpha',
    'loadMessageImageScale'
];
//# sourceMappingURL=fusioncharts.options.js.map

/***/ }),

/***/ "../../../../../src/fusioncharts/fusioncharts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FusionChartsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fusioncharts_core_service__ = __webpack_require__("../../../../../src/fusioncharts/fusioncharts.core.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FusionChartsService = (function () {
    function FusionChartsService(fusionChartsCoreService) {
        this.fusionChartsCoreService = fusionChartsCoreService;
        this._resolveFusionChartsCore();
    }
    FusionChartsService.prototype._resolveFusionChartsCore = function () {
        var _this = this;
        if (this.resolvedFusionChartsCore) {
            return;
        }
        var core = this.fusionChartsCoreService.core;
        var modules = this.fusionChartsCoreService.modules;
        if (core.getCurrentRenderer && core.getCurrentRenderer() === 'javascript') {
            this.resolvedFusionChartsCore = core;
        }
        else {
            // Otherwise the core should be a factory that provides the fc core.
            this.resolvedFusionChartsCore = core();
        }
        modules.forEach(function (module) {
            module(_this.resolvedFusionChartsCore);
        });
    };
    FusionChartsService.prototype.getResolvedFusionChartsCore = function () {
        return this.resolvedFusionChartsCore;
    };
    FusionChartsService.prototype.newFusionChartsInstance = function (chartConfig) {
        return new this.resolvedFusionChartsCore(chartConfig);
    };
    return FusionChartsService;
}());
FusionChartsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__fusioncharts_core_service__["a" /* FusionChartsCoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fusioncharts_core_service__["a" /* FusionChartsCoreService */]) === "function" && _a || Object])
], FusionChartsService);

var _a;
//# sourceMappingURL=fusioncharts.service.js.map

/***/ }),

/***/ "../../../../../src/utils/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isObject;
/* unused harmony export isCallable */
/* harmony export (immutable) */ __webpack_exports__["c"] = isSameObjectContent;
/* harmony export (immutable) */ __webpack_exports__["d"] = isUndefined;
/* harmony export (immutable) */ __webpack_exports__["a"] = deepCopyOf;
function isObject(value) {
    return value !== null && typeof value === 'object';
}
function isCallable(value) {
    return typeof value === 'function';
}
function isSameObjectContent(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    var keys = Object.keys(obj1);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        if (isObject(obj1[key]) && isObject(obj2[key])) {
            if (!isSameObjectContent(obj1[key], obj2[key])) {
                return false;
            }
        }
        else if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
function isUndefined(value) {
    var UNDEFINED = void (0);
    return value === UNDEFINED;
}
function deepCopyOf(obj) {
    return JSON.parse(JSON.stringify(obj));
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "../../../../../test/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../test/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../test/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../test/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <h1>Angular4-FusionCharts Wrapper</h1>\n\n    <fusioncharts\n        [id]=\"id\"\n        [width]=\"width\"\n        [height]=\"height\"\n        [type]=\"type\"\n        [dataFormat]=\"dataFormat\"\n        [dataSource]=\"dataSource\"\n        [events]=\"events\"\n        [chartConfig]=\"chartConfig\">\n    </fusioncharts>\n\n    <p>Actual Value: {{ actualValue }}</p>\n\n    <button (click)=\"onClick($event)\">Change Chart Data</button>\n\n</div>"

/***/ }),

/***/ "../../../../../test/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.id = 'chart1';
        this.width = 600;
        this.height = 400;
        this.type = 'column2d';
        this.actualValue = '';
        this.chartConfig = {
            'containerBackgroundColor': '#ffffff'
        };
        this.dataFormat = 'jsonurl';
        this.dataSource = 'assets/data.json';
        this.events = {
            dataplotRollOver: function (eventObj, dataObj) {
                _this.actualValue = dataObj.value;
            }
        };
    }
    AppComponent.prototype.onClick = function () {
        this.dataFormat = 'xml';
        this.dataSource = "<chart caption=\"Top 10 Most Popular Sports in the World\"\n        subcaption=\"Based on number of viewers\" yaxisname=\"Number of Viewers\" plotgradientcolor=\"\"\n        bgcolor=\"FFFFFF\" showplotborder=\"0\" divlinecolor=\"CCCCCC\" showvalues=\"1\" showcanvasborder=\"0\"\n        canvasbordercolor=\"CCCCCC\" canvasborderthickness=\"1\" showyaxisvalues=\"0\" showlegend=\"1\"\n        showshadow=\"0\" labelsepchar=\": \" basefontcolor=\"000000\" labeldisplay=\"AUTO\"\n        numberscalevalue=\"1000,1000,1000\" numberscaleunit=\"K,M,B\"\n        palettecolors=\"#008ee4,#9b59b6,#6baa01,#e44a00,#f8bd19,#d35400,#bdc3c7,#95a5a6,#34495e,#1abc9c\"\n        showborder=\"0\"  rotateValues=\"0\" placevaluesInside=\"0\" valueFontColor=\"#909090\" theme=\"fint\">\n        <set label=\"Football\" value=\"3500000000\" tooltext=\"Popular in: {br}Europe{br}Africa{br}Asia{br}Americas\" />\n        <set label=\"Cricket\" value=\"4400000000\" tooltext=\"Popular in: {br}India{br}UK{br}Pakistan{br}Australia\" />\n        <set label=\"Field Hockey\" value=\"2200000000\" tooltext=\"Popular in: {br}Asia{br}Europe{br}Africa{br}Australia\" />\n        <set label=\"Tennis\" value=\"1000000000\" color=\"e44a00\" tooltext=\"Popular in: {br}Europe{br}Americas{br}Asia\" />\n        <set label=\"Volleyball\" value=\"900000000\" tooltext=\"Popular in: {br}Asia{br}Europe{br}Americas{br}Australia\" />\n        <set label=\"Table Tennis\" value=\"900000000\" tooltext=\"Popular in: {br}Asia{br}Europe{br}Africa{br}Americas\" />\n        <set label=\"Baseball\" value=\"500000000\" tooltext=\"Popular in: {br}US{br}Japan{br}Cuba{br}Dominican Republic\" />\n        <set label=\"Golf\" value=\"400000000\" tooltext=\"Popular in: {br}US{br}Canada{br}Europe\" />\n        <set label=\"Basketball\" value=\"400000000\" tooltext=\"Popular in: {br}US{br}Canada\" />\n        <set label=\"American football\" value=\"390000000\" tooltext=\"Popular in:{br}US\" />\n    </chart>";
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../test/app/app.component.html"),
        styles: [__webpack_require__("../../../../../test/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../test/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fusioncharts__ = __webpack_require__("../../../../fusioncharts/fusioncharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fusioncharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fusioncharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fusioncharts_fusioncharts_charts__ = __webpack_require__("../../../../fusioncharts/fusioncharts.charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fusioncharts_fusioncharts_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fusioncharts_fusioncharts_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fusioncharts_themes_fusioncharts_theme_fint__ = __webpack_require__("../../../../fusioncharts/themes/fusioncharts.theme.fint.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fusioncharts_themes_fusioncharts_theme_fint___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fusioncharts_themes_fusioncharts_theme_fint__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../test/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index__ = __webpack_require__("../../../../../index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__index__["a" /* FusionChartsModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2_fusioncharts__, __WEBPACK_IMPORTED_MODULE_3_fusioncharts_fusioncharts_charts__, __WEBPACK_IMPORTED_MODULE_4_fusioncharts_themes_fusioncharts_theme_fint__)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../test/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../test/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../test/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../test/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../test/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
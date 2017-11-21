(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.fusioncharts = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

var FusionChartsCoreService = (function () {
    function FusionChartsCoreService() {
    }
    return FusionChartsCoreService;
}());
FusionChartsCoreService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
FusionChartsCoreService.ctorParameters = function () { return []; };

var FusionChartsService = (function () {
    function FusionChartsService(fusionChartsCoreService) {
        this.fusionChartsCoreService = fusionChartsCoreService;
        if (!FusionChartsService.isFusionChartsCoreResolved()) {
            FusionChartsService.resolveFusionChartsCore(fusionChartsCoreService.core, fusionChartsCoreService.modules);
        }
    }
    FusionChartsService.getResolvedFusionChartsCore = function () {
        return FusionChartsService.resolvedFusionChartsCore;
    };
    FusionChartsService.isFusionChartsCoreResolved = function () {
        return !!FusionChartsService.resolvedFusionChartsCore;
    };
    FusionChartsService.resolveFusionChartsCore = function (core$$1, modules) {
        var resolvedCore;
        if (core$$1 && core$$1.getCurrentRenderer && core$$1.getCurrentRenderer() === 'javascript') {
            resolvedCore = core$$1;
        }
        else {
            // Otherwise the core should be a factory that provides the fc core.
            resolvedCore = core$$1();
        }
        modules.forEach(function (module) {
            module(resolvedCore);
        });
        // Fix the black pie-chart rendering in Safari browser.
        if (resolvedCore.options) {
            resolvedCore.options.SVGDefinitionURL = 'absolute';
        }
        FusionChartsService.resolvedFusionChartsCore = resolvedCore;
    };
    FusionChartsService.prototype.newFusionChartsInstance = function (chartConfig) {
        var resolvedFCCore = FusionChartsService.resolvedFusionChartsCore;
        return new resolvedFCCore(chartConfig);
    };
    return FusionChartsService;
}());
FusionChartsService.resolvedFusionChartsCore = null;
FusionChartsService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
FusionChartsService.ctorParameters = function () { return [
    { type: FusionChartsCoreService, },
]; };

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

function isObject(value) {
    return value !== null && typeof value === 'object';
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
        this.checkAndUpdateRestOptions(fusonChartsOptions.filter(function (option) { return optionsUpdatedNatively.indexOf(option) === -1; }), currentOptions, oldOptions);
        this.oldOptions = currentOptions;
    };
    FusionChartsComponent.prototype.checkAndUpdateChartDimensions = function (currentOptions, oldOptions) {
        var _this = this;
        var currWidth = currentOptions.width;
        var currHeight = currentOptions.height;
        var oldWidth = oldOptions.width;
        var oldHeight = oldOptions.height;
        if (String(currWidth) !== String(oldWidth) || String(currHeight) !== String(oldHeight)) {
            if (!isUndefined(currWidth) && !isUndefined(currHeight)) {
                this.runOutsideAngular(function () {
                    _this.chartObj.resizeTo(currWidth, currHeight);
                });
            }
            else {
                if (!isUndefined(currWidth)) {
                    this.runOutsideAngular(function () {
                        _this.chartObj.resizeTo({
                            w: currWidth
                        });
                    });
                }
                if (!isUndefined(currHeight)) {
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
            if (!isUndefined(currType)) {
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
            if (!isUndefined(currDataFormat) && !isUndefined(currData)) {
                this.runOutsideAngular(function () {
                    _this.chartObj.setChartData(currData, String(currDataFormat).toLowerCase());
                    // If the chart dataFormat is changed then
                    // animate the chart to show the changes
                    _this.chartObj.render();
                });
            }
        }
        else if (!this.isSameChartData(currData, oldData)) {
            if (!isUndefined(currData)) {
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
        if (isObject(currData) && isObject(oldData)) {
            return isSameObjectContent(currData, oldData);
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
            if (!isUndefined(currEvents)) {
                temp1 = Object.assign({}, currEvents);
                temp2 = isUndefined(oldEvents) ? {} : Object.assign({}, oldEvents);
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
        if (isObject(currEvents) && isObject(oldEvents)) {
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
                if (!isUndefined(currValue)) {
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
        if (isObject(currValue) && isObject(oldValue)) {
            return isSameObjectContent(currValue, oldValue);
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
        var inlineOptions = fusonChartsOptions.reduce(function (options, optionName) {
            options[optionName] = _this[optionName];
            return options;
        }, {});
        Object.assign(inlineOptions, chartConfig);
        if (isObject(inlineOptions['dataSource'])) {
            inlineOptions['dataSource'] = deepCopyOf(inlineOptions['dataSource']);
        }
        if (isObject(inlineOptions['link'])) {
            inlineOptions['link'] = deepCopyOf(inlineOptions['link']);
        }
        if (isObject(inlineOptions['events'])) {
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
FusionChartsComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'fusioncharts',
                template: '<div #chartContainer></div>'
            },] },
];
/** @nocollapse */
FusionChartsComponent.ctorParameters = function () { return [
    { type: FusionChartsService, },
    { type: core.NgZone, },
]; };
FusionChartsComponent.propDecorators = {
    'chartContainer': [{ type: core.ViewChild, args: ['chartContainer',] },],
    'chartConfig': [{ type: core.Input },],
    'type': [{ type: core.Input },],
    'id': [{ type: core.Input },],
    'width': [{ type: core.Input },],
    'height': [{ type: core.Input },],
    'dataFormat': [{ type: core.Input },],
    'dataSource': [{ type: core.Input },],
    'events': [{ type: core.Input },],
    'link': [{ type: core.Input },],
    'showDataLoadingMessage': [{ type: core.Input },],
    'showChartLoadingMessage': [{ type: core.Input },],
    'baseChartMessageFont': [{ type: core.Input },],
    'baseChartMessageFontSize': [{ type: core.Input },],
    'baseChartMessageColor': [{ type: core.Input },],
    'dataLoadStartMessage': [{ type: core.Input },],
    'dataLoadErrorMessage': [{ type: core.Input },],
    'dataInvalidMessage': [{ type: core.Input },],
    'dataEmptyMessage': [{ type: core.Input },],
    'typeNotSupportedMessage': [{ type: core.Input },],
    'loadMessage': [{ type: core.Input },],
    'renderErrorMessage': [{ type: core.Input },],
    'containerBackgroundColor': [{ type: core.Input },],
    'containerBackgroundOpacity': [{ type: core.Input },],
    'containerClassName': [{ type: core.Input },],
    'baseChartMessageImageHAlign': [{ type: core.Input },],
    'baseChartMessageImageVAlign': [{ type: core.Input },],
    'baseChartMessageImageAlpha': [{ type: core.Input },],
    'baseChartMessageImageScale': [{ type: core.Input },],
    'typeNotSupportedMessageImageHAlign': [{ type: core.Input },],
    'typeNotSupportedMessageImageVAlign': [{ type: core.Input },],
    'typeNotSupportedMessageImageAlpha': [{ type: core.Input },],
    'typeNotSupportedMessageImageScale': [{ type: core.Input },],
    'dataLoadErrorMessageImageHAlign': [{ type: core.Input },],
    'dataLoadErrorMessageImageVAlign': [{ type: core.Input },],
    'dataLoadErrorMessageImageAlpha': [{ type: core.Input },],
    'dataLoadErrorMessageImageScale': [{ type: core.Input },],
    'dataLoadStartMessageImageHAlign': [{ type: core.Input },],
    'dataLoadStartMessageImageVAlign': [{ type: core.Input },],
    'dataLoadStartMessageImageAlpha': [{ type: core.Input },],
    'dataLoadStartMessageImageScale': [{ type: core.Input },],
    'dataInvalidMessageImageHAlign': [{ type: core.Input },],
    'dataInvalidMessageImageVAlign': [{ type: core.Input },],
    'dataInvalidMessageImageAlpha': [{ type: core.Input },],
    'dataInvalidMessageImageScale': [{ type: core.Input },],
    'dataEmptyMessageImageHAlign': [{ type: core.Input },],
    'dataEmptyMessageImageVAlign': [{ type: core.Input },],
    'dataEmptyMessageImageAlpha': [{ type: core.Input },],
    'dataEmptyMessageImageScale': [{ type: core.Input },],
    'renderErrorMessageImageHAlign': [{ type: core.Input },],
    'renderErrorMessageImageVAlign': [{ type: core.Input },],
    'renderErrorMessageImageAlpha': [{ type: core.Input },],
    'renderErrorMessageImageScale': [{ type: core.Input },],
    'loadMessageImageHAlign': [{ type: core.Input },],
    'loadMessageImageVAlign': [{ type: core.Input },],
    'loadMessageImageAlpha': [{ type: core.Input },],
    'loadMessageImageScale': [{ type: core.Input },],
};

var FusionChartsModule = (function () {
    function FusionChartsModule() {
    }
    // Keep this method unchanged for backward compatible
    FusionChartsModule.forRoot = function (fusionChartsCore) {
        var fusionChartsModules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fusionChartsModules[_i - 1] = arguments[_i];
        }
        return {
            ngModule: FusionChartsModule,
            providers: [
                FusionChartsService,
                {
                    provide: FusionChartsCoreService,
                    useValue: {
                        core: fusionChartsCore,
                        modules: fusionChartsModules
                    }
                }
            ]
        };
    };
    FusionChartsModule.fcRoot = function (fusionChartsCore) {
        var fusionChartsModules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fusionChartsModules[_i - 1] = arguments[_i];
        }
        FusionChartsService.resolveFusionChartsCore(fusionChartsCore, fusionChartsModules);
    };
    return FusionChartsModule;
}());
FusionChartsModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [
                    FusionChartsComponent
                ],
                exports: [
                    FusionChartsComponent
                ],
                providers: [
                    FusionChartsService,
                    FusionChartsCoreService
                ]
            },] },
];
/** @nocollapse */
FusionChartsModule.ctorParameters = function () { return []; };

exports.FusionChartsModule = FusionChartsModule;
exports.FusionChartsComponent = FusionChartsComponent;
exports.FusionChartsService = FusionChartsService;
exports.FusionChartsCoreService = FusionChartsCoreService;

Object.defineProperty(exports, '__esModule', { value: true });

})));

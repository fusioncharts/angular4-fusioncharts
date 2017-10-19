import { Component, Input, ViewChild, NgZone } from '@angular/core';
import { FusionChartsService } from './fusioncharts.service';
import { fusonChartsOptions } from './fusioncharts.options';
import * as utils from '../utils/utils';
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
            if (!utils.isUndefined(currWidth) && !utils.isUndefined(currHeight)) {
                this.runOutsideAngular(function () {
                    _this.chartObj.resizeTo(currWidth, currHeight);
                });
            }
            else {
                if (!utils.isUndefined(currWidth)) {
                    this.runOutsideAngular(function () {
                        _this.chartObj.resizeTo({
                            w: currWidth
                        });
                    });
                }
                if (!utils.isUndefined(currHeight)) {
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
            if (!utils.isUndefined(currType)) {
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
            if (!utils.isUndefined(currDataFormat) && !utils.isUndefined(currData)) {
                this.runOutsideAngular(function () {
                    _this.chartObj.setChartData(currData, String(currDataFormat).toLowerCase());
                    // If the chart dataFormat is changed then
                    // animate the chart to show the changes
                    _this.chartObj.render();
                });
            }
        }
        else if (!this.isSameChartData(currData, oldData)) {
            if (!utils.isUndefined(currData)) {
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
        if (utils.isObject(currData) && utils.isObject(oldData)) {
            return utils.isSameObjectContent(currData, oldData);
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
            if (!utils.isUndefined(currEvents)) {
                temp1 = Object.assign({}, currEvents);
                temp2 = utils.isUndefined(oldEvents) ? {} : Object.assign({}, oldEvents);
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
        if (utils.isObject(currEvents) && utils.isObject(oldEvents)) {
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
                if (!utils.isUndefined(currValue)) {
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
        if (utils.isObject(currValue) && utils.isObject(oldValue)) {
            return utils.isSameObjectContent(currValue, oldValue);
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
        if (utils.isObject(inlineOptions['dataSource'])) {
            inlineOptions['dataSource'] = utils.deepCopyOf(inlineOptions['dataSource']);
        }
        if (utils.isObject(inlineOptions['link'])) {
            inlineOptions['link'] = utils.deepCopyOf(inlineOptions['link']);
        }
        if (utils.isObject(inlineOptions['events'])) {
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
export { FusionChartsComponent };
FusionChartsComponent.decorators = [
    { type: Component, args: [{
                selector: 'fusioncharts',
                template: '<div #chartContainer></div>'
            },] },
];
/** @nocollapse */
FusionChartsComponent.ctorParameters = function () { return [
    { type: FusionChartsService, },
    { type: NgZone, },
]; };
FusionChartsComponent.propDecorators = {
    'chartContainer': [{ type: ViewChild, args: ['chartContainer',] },],
    'chartConfig': [{ type: Input },],
    'type': [{ type: Input },],
    'id': [{ type: Input },],
    'width': [{ type: Input },],
    'height': [{ type: Input },],
    'dataFormat': [{ type: Input },],
    'dataSource': [{ type: Input },],
    'events': [{ type: Input },],
    'link': [{ type: Input },],
    'showDataLoadingMessage': [{ type: Input },],
    'showChartLoadingMessage': [{ type: Input },],
    'baseChartMessageFont': [{ type: Input },],
    'baseChartMessageFontSize': [{ type: Input },],
    'baseChartMessageColor': [{ type: Input },],
    'dataLoadStartMessage': [{ type: Input },],
    'dataLoadErrorMessage': [{ type: Input },],
    'dataInvalidMessage': [{ type: Input },],
    'dataEmptyMessage': [{ type: Input },],
    'typeNotSupportedMessage': [{ type: Input },],
    'loadMessage': [{ type: Input },],
    'renderErrorMessage': [{ type: Input },],
    'containerBackgroundColor': [{ type: Input },],
    'containerBackgroundOpacity': [{ type: Input },],
    'containerClassName': [{ type: Input },],
    'baseChartMessageImageHAlign': [{ type: Input },],
    'baseChartMessageImageVAlign': [{ type: Input },],
    'baseChartMessageImageAlpha': [{ type: Input },],
    'baseChartMessageImageScale': [{ type: Input },],
    'typeNotSupportedMessageImageHAlign': [{ type: Input },],
    'typeNotSupportedMessageImageVAlign': [{ type: Input },],
    'typeNotSupportedMessageImageAlpha': [{ type: Input },],
    'typeNotSupportedMessageImageScale': [{ type: Input },],
    'dataLoadErrorMessageImageHAlign': [{ type: Input },],
    'dataLoadErrorMessageImageVAlign': [{ type: Input },],
    'dataLoadErrorMessageImageAlpha': [{ type: Input },],
    'dataLoadErrorMessageImageScale': [{ type: Input },],
    'dataLoadStartMessageImageHAlign': [{ type: Input },],
    'dataLoadStartMessageImageVAlign': [{ type: Input },],
    'dataLoadStartMessageImageAlpha': [{ type: Input },],
    'dataLoadStartMessageImageScale': [{ type: Input },],
    'dataInvalidMessageImageHAlign': [{ type: Input },],
    'dataInvalidMessageImageVAlign': [{ type: Input },],
    'dataInvalidMessageImageAlpha': [{ type: Input },],
    'dataInvalidMessageImageScale': [{ type: Input },],
    'dataEmptyMessageImageHAlign': [{ type: Input },],
    'dataEmptyMessageImageVAlign': [{ type: Input },],
    'dataEmptyMessageImageAlpha': [{ type: Input },],
    'dataEmptyMessageImageScale': [{ type: Input },],
    'renderErrorMessageImageHAlign': [{ type: Input },],
    'renderErrorMessageImageVAlign': [{ type: Input },],
    'renderErrorMessageImageAlpha': [{ type: Input },],
    'renderErrorMessageImageScale': [{ type: Input },],
    'loadMessageImageHAlign': [{ type: Input },],
    'loadMessageImageVAlign': [{ type: Input },],
    'loadMessageImageAlpha': [{ type: Input },],
    'loadMessageImageScale': [{ type: Input },],
};
//# sourceMappingURL=fusioncharts.component.js.map
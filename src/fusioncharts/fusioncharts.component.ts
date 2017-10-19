
import {
    Component,
    Input,
    ElementRef,
    OnInit,
    DoCheck,
    AfterViewInit,
    OnDestroy,
    ViewChild,
    NgZone
} from '@angular/core';

import { FusionChartsService } from './fusioncharts.service';
import { fusonChartsOptions } from './fusioncharts.options';
import * as utils from '../utils/utils';


@Component({
    selector: 'fusioncharts',
    template: '<div #chartContainer></div>'
})
export class FusionChartsComponent implements OnInit, DoCheck, AfterViewInit, OnDestroy {
    chartObj: any;
    oldOptions: any;
    @ViewChild('chartContainer') chartContainer: ElementRef;
    @Input() chartConfig: Object;
    @Input() type: string;
    @Input() id: string;
    @Input() width: string | number;
    @Input() height: string | number;
    @Input() dataFormat: string;
    @Input() dataSource: Object | String;
    @Input() events: Object;
    @Input() link: Object;
    @Input() showDataLoadingMessage: boolean;
    @Input() showChartLoadingMessage: boolean;
    @Input() baseChartMessageFont: string;
    @Input() baseChartMessageFontSize: string;
    @Input() baseChartMessageColor: string;
    @Input() dataLoadStartMessage: string;
    @Input() dataLoadErrorMessage: string;
    @Input() dataInvalidMessage: string;
    @Input() dataEmptyMessage: string;
    @Input() typeNotSupportedMessage: string;
    @Input() loadMessage: string;
    @Input() renderErrorMessage: string;
    @Input() containerBackgroundColor: string;
    @Input() containerBackgroundOpacity: string | number;
    @Input() containerClassName: string;
    @Input() baseChartMessageImageHAlign: string;
    @Input() baseChartMessageImageVAlign: string;
    @Input() baseChartMessageImageAlpha: string | number;
    @Input() baseChartMessageImageScale: string | number;
    @Input() typeNotSupportedMessageImageHAlign: string;
    @Input() typeNotSupportedMessageImageVAlign: string;
    @Input() typeNotSupportedMessageImageAlpha: string | number;
    @Input() typeNotSupportedMessageImageScale: string | number;
    @Input() dataLoadErrorMessageImageHAlign: string;
    @Input() dataLoadErrorMessageImageVAlign: string;
    @Input() dataLoadErrorMessageImageAlpha: string | number;
    @Input() dataLoadErrorMessageImageScale: string | number;
    @Input() dataLoadStartMessageImageHAlign: string;
    @Input() dataLoadStartMessageImageVAlign: string;
    @Input() dataLoadStartMessageImageAlpha: string | number;
    @Input() dataLoadStartMessageImageScale: string | number;
    @Input() dataInvalidMessageImageHAlign: string;
    @Input() dataInvalidMessageImageVAlign: string;
    @Input() dataInvalidMessageImageAlpha: string | number;
    @Input() dataInvalidMessageImageScale: string | number;
    @Input() dataEmptyMessageImageHAlign: string;
    @Input() dataEmptyMessageImageVAlign: string;
    @Input() dataEmptyMessageImageAlpha: string | number;
    @Input() dataEmptyMessageImageScale: string | number;
    @Input() renderErrorMessageImageHAlign: string;
    @Input() renderErrorMessageImageVAlign: string;
    @Input() renderErrorMessageImageAlpha: string | number;
    @Input() renderErrorMessageImageScale: string | number;
    @Input() loadMessageImageHAlign: string;
    @Input() loadMessageImageVAlign: string;
    @Input() loadMessageImageAlpha: string | number;
    @Input() loadMessageImageScale: string | number;

    constructor(private fusionChartsService: FusionChartsService, private ngZone: NgZone) { }

    ngOnInit() {
        this.oldOptions = this.getCurrentOptions();
    }

    ngDoCheck() {
        this.detectChanges();
    }

    ngAfterViewInit() {
        this.renderChart();
    }

    ngOnDestroy() {
        this.chartObj.dispose();
    }

    detectChanges() {
        const currentOptions = this.getCurrentOptions();
        const oldOptions = this.oldOptions;
        const optionsUpdatedNatively = [
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
        this.checkAndUpdateRestOptions(
            fusonChartsOptions.filter(option => optionsUpdatedNatively.indexOf(option) === -1),
            currentOptions,
            oldOptions
        );

        this.oldOptions = currentOptions;
    }

    checkAndUpdateChartDimensions(currentOptions, oldOptions) {
        const currWidth = currentOptions.width;
        const currHeight = currentOptions.height;
        const oldWidth = oldOptions.width;
        const oldHeight = oldOptions.height;

        if (String(currWidth) !== String(oldWidth) || String(currHeight) !== String(oldHeight)) {
            if (!utils.isUndefined(currWidth) && !utils.isUndefined(currHeight)) {
                this.runOutsideAngular(() => {
                    this.chartObj.resizeTo(currWidth, currHeight);
                });
            } else {
                if (!utils.isUndefined(currWidth)) {
                    this.runOutsideAngular(() => {
                        this.chartObj.resizeTo({
                            w: currWidth
                        });
                    });
                }
                if (!utils.isUndefined(currHeight)) {
                    this.runOutsideAngular(() => {
                        this.chartObj.resizeTo({
                            h: currHeight
                        });
                    });
                }
            }
        }
    }

    checkAndUpdateChartType(currentOptions, oldOptions) {
        const currType = currentOptions.type;
        const oldType = oldOptions.type;

        if (String(currType).toLowerCase() !== String(oldType).toLowerCase()) {
            if (!utils.isUndefined(currType)) {
                this.runOutsideAngular(() => {
                    this.chartObj.chartType(String(currType).toLowerCase());
                });
            }
        }
    }

    checkAndUpdateChartData(currentOptions, oldOptions) {
        const currDataFormat = currentOptions.dataFormat;
        const currData = currentOptions.dataSource;
        const oldDataFormat = oldOptions.dataFormat;
        const oldData = oldOptions.dataSource;

        if (String(currDataFormat).toLowerCase() !== String(oldDataFormat).toLowerCase()) {
            if (!utils.isUndefined(currDataFormat) && !utils.isUndefined(currData)) {
                this.runOutsideAngular(() => {
                    this.chartObj.setChartData(currData, String(currDataFormat).toLowerCase());
                    // If the chart dataFormat is changed then
                    // animate the chart to show the changes
                    this.chartObj.render();
                });
            }
        } else if (!this.isSameChartData(currData, oldData)) {
            if (!utils.isUndefined(currData)) {
                this.runOutsideAngular(() => {
                    this.chartObj.setChartData(
                        currData,
                        // When dataFormat is not given, but data is changed,
                        // then use 'json' as default dataFormat
                        currDataFormat ? String(currDataFormat).toLowerCase() : 'json'
                    );
                });
            }
        }
    }

    isSameChartData(currData, oldData) {
        if (utils.isObject(currData) && utils.isObject(oldData)) {
            return utils.isSameObjectContent(currData, oldData);
        } else {
            return currData === oldData;
        }
    }

    checkAndUpdateEvents(currentOptions, oldOptions) {
        const currEvents = currentOptions.events;
        const oldEvents = oldOptions.events;
        let temp1, temp2;

        if (this.detectChartEventsChange(currEvents, oldEvents)) {
            if (!utils.isUndefined(currEvents)) {
                temp1 = Object.assign({}, currEvents);
                temp2 = utils.isUndefined(oldEvents) ? {} : Object.assign({}, oldEvents);
                Object.keys(temp2).forEach((eventName) => {
                    if (temp2[eventName] === temp1[eventName]) {
                        temp1[eventName] = undefined;
                    } else {
                        this.runOutsideAngular(() => {
                            this.chartObj.removeEventListener(eventName, temp2[eventName]);
                        });
                    }
                });
                Object.keys(temp1).forEach((eventName) => {
                    if (temp1[eventName]) {
                        this.runOutsideAngular(() => {
                            this.chartObj.addEventListener(eventName, temp1[eventName]);
                        });
                    }
                });
            }
        }
    }

    detectChartEventsChange(currEvents, oldEvents) {
        if (utils.isObject(currEvents) && utils.isObject(oldEvents)) {
            return !(this.isSameChartEvents(currEvents, oldEvents));
        } else {
            return !(currEvents === oldEvents);
        }
    }

    isSameChartEvents(currEvents, oldEvents) {
        if (Object.keys(currEvents).length !== Object.keys(oldEvents).length) { return false; }
        const currEventNames = Object.keys(currEvents);
        for (let i = 0; i < currEventNames.length; ++i) {
            const evName = currEventNames[i];
            if (currEvents[evName] !== oldEvents[evName]) {
                return false;
            }
        }
        return true;
    }

    checkAndUpdateRestOptions(restOptions, currentOptions, oldOptions) {
        let optionsUpdated = false;
        restOptions.forEach((optionName) => {
            const currValue = currentOptions[optionName];
            const oldValue = oldOptions[optionName];
            if (!this.isSameOptionValue(currValue, oldValue)) {
                if (!utils.isUndefined(currValue)) {
                    if (this.chartObj.options && this.chartObj.options.hasOwnProperty(optionName)) {
                        this.chartObj.options[optionName] = currValue;
                        optionsUpdated = true;
                    }
                }
            }
        });
        if (optionsUpdated) {
            this.runOutsideAngular(() => {
                this.chartObj.render(); // re-render the chart to reflect the changes
            });
        }
    }

    isSameOptionValue(currValue, oldValue) {
        if (utils.isObject(currValue) && utils.isObject(oldValue)) {
            return utils.isSameObjectContent(currValue, oldValue);
        } else {
            return String(currValue) === String(oldValue);
        }
    }

    renderChart() {
        const currentOptions = this.getCurrentOptions();
        const chartObj = this.chartObj;

        currentOptions.renderAt = this.chartContainer.nativeElement;

        if (chartObj && chartObj.dispose) { chartObj.dispose(); }
        this.chartObj = this.fusionChartsService.newFusionChartsInstance(currentOptions);
        this.runOutsideAngular(() => {
            this.chartObj.render();
        });
    }

    getCurrentOptions(): any {
        const chartConfig = this.chartConfig ? this.chartConfig : {};
        const inlineOptions = fusonChartsOptions.reduce((options, optionName) => {
            options[optionName] = this[optionName];
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
            const actEvents = inlineOptions['events'];
            const wrapperEvents: any = {};
            const hiddenProp = '__wrapper_for_angular_zone__';
            const currentFCComp = this;

            Object.keys(actEvents).forEach((eventName) => {
                let wrapperEventListner;
                if (actEvents[eventName][hiddenProp]) {
                    wrapperEventListner = actEvents[eventName][hiddenProp];
                } else {
                    wrapperEventListner = ((actEventListener) => {
                        return function (...args) {
                            const callingContext = this;
                            currentFCComp.ngZone.run(() => {
                                actEventListener.call(callingContext, ...args);
                            });
                        };
                    })(actEvents[eventName]);
                    actEvents[eventName][hiddenProp] = wrapperEventListner;
                }
                wrapperEvents[eventName] = wrapperEventListner;
            });
            inlineOptions['events'] = wrapperEvents;
        }
        return inlineOptions;
    }

    runOutsideAngular(fn) {
        this.ngZone.runOutsideAngular(() => {
            setTimeout(fn);
        });
    }
}


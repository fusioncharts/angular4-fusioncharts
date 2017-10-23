import { Injectable } from '@angular/core';
import { FusionChartsCoreService } from './fusioncharts.core.service';
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
        // Fix the black pie-chart rendering in Safari browser.
        if (this.resolvedFusionChartsCore.options) {
            this.resolvedFusionChartsCore.options.SVGDefinitionURL = 'absolute';
        }
    };
    FusionChartsService.prototype.getResolvedFusionChartsCore = function () {
        return this.resolvedFusionChartsCore;
    };
    FusionChartsService.prototype.newFusionChartsInstance = function (chartConfig) {
        return new this.resolvedFusionChartsCore(chartConfig);
    };
    return FusionChartsService;
}());
export { FusionChartsService };
FusionChartsService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FusionChartsService.ctorParameters = function () { return [
    { type: FusionChartsCoreService, },
]; };
//# sourceMappingURL=fusioncharts.service.js.map
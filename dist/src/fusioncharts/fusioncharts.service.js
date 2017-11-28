import { Injectable } from '@angular/core';
import { FusionChartsCoreService } from './fusioncharts.core.service';
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
    FusionChartsService.resolveFusionChartsCore = function (core, modules) {
        var resolvedCore;
        if (core && core.getCurrentRenderer && core.getCurrentRenderer() === 'javascript') {
            resolvedCore = core;
        }
        else {
            // Otherwise the core should be a factory that provides the fc core.
            resolvedCore = core();
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
export { FusionChartsService };
FusionChartsService.resolvedFusionChartsCore = null;
FusionChartsService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FusionChartsService.ctorParameters = function () { return [
    { type: FusionChartsCoreService, },
]; };
//# sourceMappingURL=fusioncharts.service.js.map
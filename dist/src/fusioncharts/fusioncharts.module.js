import { NgModule } from '@angular/core';
import { FusionChartsComponent } from './fusioncharts.component';
import { FusionChartsService } from './fusioncharts.service';
import { FusionChartsCoreService } from './fusioncharts.core.service';
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
export { FusionChartsModule };
FusionChartsModule.decorators = [
    { type: NgModule, args: [{
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
//# sourceMappingURL=fusioncharts.module.js.map
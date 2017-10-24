import { NgModule } from '@angular/core';
import { FusionChartsComponent } from './fusioncharts.component';
import { FusionChartsService } from './fusioncharts.service';
import { FusionChartsCoreService } from './fusioncharts.core.service';
export function provideFusionChartsCoreService(fusionChartsCore, fusionChartsModules) {
    return [
        {
            provide: FusionChartsCoreService,
            multi: false,
            useValue: {
                core: fusionChartsCore,
                modules: fusionChartsModules
            }
        }
    ];
}
var FusionChartsModule = (function () {
    function FusionChartsModule() {
    }
    FusionChartsModule.forRoot = function (fusionChartsCore) {
        var fusionChartsModules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fusionChartsModules[_i - 1] = arguments[_i];
        }
        return {
            ngModule: FusionChartsModule,
            providers: [
                FusionChartsService,
                provideFusionChartsCoreService(fusionChartsCore, fusionChartsModules)
            ]
        };
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
                ]
            },] },
];
/** @nocollapse */
FusionChartsModule.ctorParameters = function () { return []; };
//# sourceMappingURL=fusioncharts.module.js.map

import { NgModule, ModuleWithProviders } from '@angular/core';
import { FusionChartsComponent } from './fusioncharts.component';
import { FusionChartsService } from './fusioncharts.service';
import { FusionChartsCoreService } from './fusioncharts.core.service';

@NgModule({
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
})
export class FusionChartsModule {
    // Keep this method unchanged for backward compatible
    static forRoot(fusionChartsCore: any, ...fusionChartsModules: Function[]): ModuleWithProviders {
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
    }

    static fcRoot(fusionChartsCore: any, ...fusionChartsModules: Function[]) {
        FusionChartsService.resolveFusionChartsCore(fusionChartsCore, fusionChartsModules);
    }
}


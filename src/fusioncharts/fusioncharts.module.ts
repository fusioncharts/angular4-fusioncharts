
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FusionChartsComponent } from './fusioncharts.component';
import { FusionChartsService } from './fusioncharts.service';
import { FusionChartsCoreService } from './fusioncharts.core.service';

export function provideFusionChartsCoreService(fusionChartsCore: any, fusionChartsModules: Function[]): any {
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

@NgModule({
    declarations: [
        FusionChartsComponent
    ],
    exports: [
        FusionChartsComponent
    ]
})
export class FusionChartsModule {
    static forRoot(fusionChartsCore: any, ...fusionChartsModules: Function[]): ModuleWithProviders {
        return {
            ngModule: FusionChartsModule,
            providers: [
                FusionChartsService,
                provideFusionChartsCoreService(fusionChartsCore, fusionChartsModules)
            ]
        };
    }
}


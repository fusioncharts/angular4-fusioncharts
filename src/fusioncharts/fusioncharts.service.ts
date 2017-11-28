
import { Injectable } from '@angular/core';
import { FusionChartsCoreService } from './fusioncharts.core.service';

@Injectable()
export class FusionChartsService {
    private static resolvedFusionChartsCore: any = null;

    public static getResolvedFusionChartsCore() {
        return FusionChartsService.resolvedFusionChartsCore;
    }

    public static isFusionChartsCoreResolved() {
        return !!FusionChartsService.resolvedFusionChartsCore;
    }

    public static resolveFusionChartsCore(core: any, modules: any[]) {
        let resolvedCore: any;
        if (core && core.getCurrentRenderer && core.getCurrentRenderer() === 'javascript') {
            resolvedCore = core;
        } else {
            // Otherwise the core should be a factory that provides the fc core.
            resolvedCore = core();
        }

        modules.forEach((module) => {
            module(resolvedCore);
        });

        // Fix the black pie-chart rendering in Safari browser.
        if (resolvedCore.options) {
            resolvedCore.options.SVGDefinitionURL = 'absolute';
        }

        FusionChartsService.resolvedFusionChartsCore = resolvedCore;
    }

    constructor(private fusionChartsCoreService: FusionChartsCoreService) {
        if (!FusionChartsService.isFusionChartsCoreResolved()) {
            FusionChartsService.resolveFusionChartsCore(fusionChartsCoreService.core, fusionChartsCoreService.modules);
        }
    }

    newFusionChartsInstance(chartConfig: any) {
        const resolvedFCCore = FusionChartsService.resolvedFusionChartsCore;
        return new resolvedFCCore(chartConfig);
    }
}

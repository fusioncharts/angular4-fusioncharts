
import { Injectable } from '@angular/core';
import { FusionChartsCoreService } from './fusioncharts.core.service';

@Injectable()
export class FusionChartsService {
    private resolvedFusionChartsCore: any;

    constructor(private fusionChartsCoreService: FusionChartsCoreService) {
        this._resolveFusionChartsCore();
    }

    _resolveFusionChartsCore() {
        if (this.resolvedFusionChartsCore) { return; }
        const core = this.fusionChartsCoreService.core;
        const modules = this.fusionChartsCoreService.modules;

        if (core.getCurrentRenderer && core.getCurrentRenderer() === 'javascript') {
            this.resolvedFusionChartsCore = core;
        } else {
            // Otherwise the core should be a factory that provides the fc core.
            this.resolvedFusionChartsCore = core();
        }

        modules.forEach((module) => {
            module(this.resolvedFusionChartsCore);
        });

        // Fix the black pie-chart rendering in Safari browser.
        if (this.resolvedFusionChartsCore.options) {
            this.resolvedFusionChartsCore.options.SVGDefinitionURL = 'absolute';
        }
    }

    getResolvedFusionChartsCore() {
        return this.resolvedFusionChartsCore;
    }

    newFusionChartsInstance(chartConfig: any) {
        return new this.resolvedFusionChartsCore(chartConfig);
    }

}

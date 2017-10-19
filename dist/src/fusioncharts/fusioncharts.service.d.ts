import { FusionChartsCoreService } from './fusioncharts.core.service';
export declare class FusionChartsService {
    private fusionChartsCoreService;
    private resolvedFusionChartsCore;
    constructor(fusionChartsCoreService: FusionChartsCoreService);
    _resolveFusionChartsCore(): void;
    getResolvedFusionChartsCore(): any;
    newFusionChartsInstance(chartConfig: any): any;
}

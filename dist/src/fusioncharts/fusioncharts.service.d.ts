import { FusionChartsCoreService } from './fusioncharts.core.service';
export declare class FusionChartsService {
    private fusionChartsCoreService;
    private static resolvedFusionChartsCore;
    static getResolvedFusionChartsCore(): any;
    static isFusionChartsCoreResolved(): boolean;
    static resolveFusionChartsCore(core: any, modules: any[]): void;
    constructor(fusionChartsCoreService: FusionChartsCoreService);
    newFusionChartsInstance(chartConfig: any): any;
}

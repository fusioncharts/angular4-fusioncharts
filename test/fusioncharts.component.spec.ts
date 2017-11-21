import { TestBed, async } from '@angular/core/testing';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule, FusionChartsComponent, FusionChartsService } from '../dist';
import sampleData from './data';

describe('FusionChartsComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme)]
        }).compileComponents();
    }));

    it(`should render in a div element`, async(() => {
        const fixture = TestBed.createComponent(FusionChartsComponent);
        const fcCom = fixture.debugElement.componentInstance;
        feedFCComponent(fcCom);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('div').tagName).toContain('DIV');
    }));

    it(`should have chart container in 'chartContainer' prop`, async(() => {
        const fixture = TestBed.createComponent(FusionChartsComponent);
        const fcCom = fixture.debugElement.componentInstance;
        feedFCComponent(fcCom);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('div') === fcCom.chartContainer.nativeElement).toBeTruthy();
    }));

    it(`should have chart id 'chart1'`, async(() => {
        const fixture = TestBed.createComponent(FusionChartsComponent);
        const fcCom = fixture.debugElement.componentInstance;
        feedFCComponent(fcCom);
        fixture.detectChanges();
        expect(FusionCharts.items['chart1']).toBeTruthy();
    }));

    it(`should have chart object in 'chartObj' prop`, async(() => {
        const fixture = TestBed.createComponent(FusionChartsComponent);
        const fcCom = fixture.debugElement.componentInstance;
        feedFCComponent(fcCom);
        fixture.detectChanges();
        expect(FusionCharts.items['chart1'] === fcCom.chartObj).toBeTruthy();
    }));

    it(`should resolve FusionCharts core module`, async(() => {
        expect(FusionCharts === FusionChartsService.getResolvedFusionChartsCore()).toBeTruthy();
    }));
});

function feedFCComponent(fcCom) {
    fcCom.width = 600;
    fcCom.height = 400;
    fcCom.type = 'column2d';
    fcCom.dataFormat = 'json';
    fcCom.dataSource = sampleData;
    fcCom.id = 'chart1';
}

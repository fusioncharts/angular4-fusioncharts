import { TestBed, async } from '@angular/core/testing';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule, FusionChartsComponent } from '../../index';
import testData from './test-data';

describe('FusionChartsComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({

            imports: [FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme)]
        }).compileComponents();
    }));

    it('chart should render in a div element', async(() => {
        const fixture = TestBed.createComponent(FusionChartsComponent);
        const fcCom = fixture.debugElement.componentInstance;
        fcCom.width = 600;
        fcCom.height = 400;
        fcCom.type = 'column2d';
        fcCom.dataFormat = 'json';
        fcCom.dataSource = testData;
        fcCom.id = 'chart1';
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('div').tagName).toContain('DIV');
    }));
    /*
    it(`should have as title 'Angular4-FusionCharts Wrapper'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Angular4-FusionCharts Wrapper');
    }));
    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Angular4-FusionCharts Wrapper');
    }));
    */
});

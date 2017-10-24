import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionMaps from 'fusioncharts/fusioncharts.maps';
import * as USAMap from 'fusioncharts/maps/fusioncharts.usa';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import * as OceanTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';

import {
    FusionChartsComponent,
    FusionChartsCoreService,
    FusionChartsModule,
    FusionChartsService
} from 'angular4-fusioncharts';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FusionChartsModule.forRoot(FusionCharts, Charts, FusionMaps, USAMap, FintTheme, OceanTheme)
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

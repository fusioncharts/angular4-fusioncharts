import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
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
        FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme, OceanTheme)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

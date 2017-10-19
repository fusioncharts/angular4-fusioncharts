import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { AppComponent } from './app.component';
import {
    FusionChartsModule,
    FusionChartsComponent,
    FusionChartsService,
    FusionChartsCoreService
} from '../../index';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

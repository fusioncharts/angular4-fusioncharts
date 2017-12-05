import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FusionChartsModule } from 'angular4-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import * as OceanTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';
import { AppComponent } from './app.component';

FusionChartsModule.fcRoot(FusionCharts, Charts, PowerCharts, FintTheme, OceanTheme);

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FusionChartsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from '../../dist';
import { AppComponent } from './app.component';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

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

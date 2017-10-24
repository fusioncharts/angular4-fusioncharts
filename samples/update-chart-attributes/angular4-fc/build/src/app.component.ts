import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <fusioncharts
            [width]="width"
            [height]="height"
            [type]="type"
            [dataFormat]="dataFormat"
            [dataSource]="dataSource">
        </fusioncharts>
        <br/>
        <br/>
        <button (click)="changeBackgroundColor()">Change Background</button>
        <button (click)="changeCaptionTextAlignment()">Change Caption Alignment</button>
`
})
export class AppComponent {
    width = '100%';
    height = '85%';
    type = 'column2d';
    dataFormat = 'json';
    dataSource = window.data;

    changeBackgroundColor() {
        this.dataSource.chart.bgColor = '#efefef';
    }

    changeCaptionTextAlignment() {
        this.dataSource.chart.captionAlignment = 'left';
    }
}

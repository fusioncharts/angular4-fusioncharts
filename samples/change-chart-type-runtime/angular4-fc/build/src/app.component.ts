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
    <select [(ngModel)]="type">
        <option value="bar2d">Bar 2D Chart</option>
        <option value="line">Line 2D Chart</option>
        <option value="column2d">Column 2D Chart</option>
    </select>
`
})
export class AppComponent {
    width = '100%';
    height = '85%';
    type = 'column2d';
    dataFormat = 'json';
    dataSource = window.data;
}

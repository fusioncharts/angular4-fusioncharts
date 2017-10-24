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
`
})
export class AppComponent {
    width = '100%';
    height = '100%';
    type = 'mscombi2d';
    dataFormat = 'json';
    dataSource = window.data;
}

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
        <button (click)="updateData()">Change Chart Data</button>
`
})
export class AppComponent {
    width = '100%';
    height = '85%';
    type = 'column2d';
    dataFormat = 'json';
    dataSource = window.data;

    updateData() {
        this.dataSource.data[2].label = 'Art Supply Store';
        this.dataSource.data[2].value = '420000';
        this.dataSource.data[3].label = 'P.C. Richard & Son';
        this.dataSource.data[3].value = '210000';
    }
}

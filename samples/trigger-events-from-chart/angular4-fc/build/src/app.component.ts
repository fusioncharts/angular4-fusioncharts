import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <fusioncharts
            [width]="width"
            [height]="height"
            [type]="type"
            [dataFormat]="dataFormat"
            [dataSource]="dataSource"
            [events]="events">
        </fusioncharts>
        <br/>
        <p>Actual Value: {{ actualValue }}</p>
`
})
export class AppComponent {
    width = '100%';
    height = '85%';
    type = 'column2d';
    dataFormat = 'json';
    dataSource = window.data;
    events = {
        dataplotRollOver: (eventObj, dataObj) => {
            this.actualValue = dataObj.dataValue;
        }
    };
    actualValue = '';
}

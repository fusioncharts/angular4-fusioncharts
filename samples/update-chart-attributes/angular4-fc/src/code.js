import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `` /* see HTML tab */
})
export class AppComponent {
    width = 600;
    height = 400;
    type = 'column2d';
    dataFormat = 'json';
    dataSource = {/* see data tab */};

    changeBackgroundColor() {
        this.dataSource.chart.bgColor = '#efefef';
    }

    changeCaptionTextAlignment() {
        this.dataSource.chart.captionAlignment = 'left';
    }

}
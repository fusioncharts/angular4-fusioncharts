import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `` /* see HTML tab */
})
export class AppComponent {
    width = 600;
    height = 400;
    type = 'column2d';
    dataFormat = 'jsonurl';
    dataSource = 'data.json'; /* see data tab */
}
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    width = '100%';
    height = '100%';
    type = 'column2d';
    dataFormat = 'json';
    dataSource = window.data;
}

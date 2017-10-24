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

    updateData() {
        this.dataSource.data[2].label = 'Art Supply Store';
        this.dataSource.data[2].value = '420000';
        this.dataSource.data[3].label = 'P.C. Richard & Son';
        this.dataSource.data[3].value = '210000';
    }
}
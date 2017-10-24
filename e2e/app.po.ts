import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get('/');
    }

    getSampleChartHeading() {
        return element(by.css('app-root h1')).getText();
    }

    getChartElement() {
        return element(by.css('app-root fusioncharts'));
    }
}

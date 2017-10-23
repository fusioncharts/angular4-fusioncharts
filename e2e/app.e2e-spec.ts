import { AppPage } from './app.po';

describe('angular4-fusioncharts App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display wrapper title', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Angular4-FusionCharts Wrapper');
    });
});

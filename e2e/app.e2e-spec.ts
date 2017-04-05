import { Ng2SepModulesPage } from './app.po';

describe('ng2-sep-modules App', function() {
  let page: Ng2SepModulesPage;

  beforeEach(() => {
    page = new Ng2SepModulesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

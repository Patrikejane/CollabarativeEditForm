import { DeepAppPage } from './app.po';

describe('deep-app App', function() {
  let page: DeepAppPage;

  beforeEach(() => {
    page = new DeepAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

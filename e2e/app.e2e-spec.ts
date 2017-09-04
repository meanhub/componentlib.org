import { ComponentLibPage } from './app.po';

describe('component-lib App', () => {
  let page: ComponentLibPage;

  beforeEach(() => {
    page = new ComponentLibPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

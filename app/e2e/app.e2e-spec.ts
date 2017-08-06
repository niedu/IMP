import { IMPPage } from './app.po';

describe('imp App', () => {
  let page: IMPPage;

  beforeEach(() => {
    page = new IMPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

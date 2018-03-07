import { Ng2ImagesPage } from './app.po';

describe('ng2-images App', () => {
  let page: Ng2ImagesPage;

  beforeEach(() => {
    page = new Ng2ImagesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

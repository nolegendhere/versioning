import { VersioningPage } from './app.po';

describe('versioning App', () => {
  let page: VersioningPage;

  beforeEach(() => {
    page = new VersioningPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

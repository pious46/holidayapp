import { HolidayappPage } from './app.po';

describe('holidayapp App', () => {
  let page: HolidayappPage;

  beforeEach(() => {
    page = new HolidayappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

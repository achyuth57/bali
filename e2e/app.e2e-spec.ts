import { DdbremedyGskGamificationPage } from './app.po';

describe('ddbremedy-gsk-gamification App', () => {
  let page: DdbremedyGskGamificationPage;

  beforeEach(() => {
    page = new DdbremedyGskGamificationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

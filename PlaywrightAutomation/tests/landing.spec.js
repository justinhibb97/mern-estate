require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { LandingPage } = require('../pages/landingPage');
const { SearchPage } = require('../pages/searchPage');
const { AboutPage } = require('../pages/aboutPage');

//setup
let landingPage, searchPage, aboutPage;
test.beforeEach(async ({ page }) => {
  landingPage = new LandingPage(page);
  searchPage = new SearchPage(page);
  aboutPage = new AboutPage(page);
});

//landing page tests
test('LA_01_NavigateToLandingPage', async () => {
    await landingPage.gotoLandingPage();
    await landingPage.isPageOpen();
});

test('LA_02_NavigateToSearchPageFromLandingPage', async () => {
    await landingPage.gotoLandingPage();
    await landingPage.isPageOpen();
    await landingPage.gotoSearchPage();

    await searchPage.isPageOpen();
});

test('LA_03_NavigateToAboutPageFromLandingPage', async () => {
    await landingPage.gotoLandingPage();
    await landingPage.isPageOpen();
    await landingPage.gotoAboutPage();

    await aboutPage.isPageOpen();
});

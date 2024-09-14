require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { AboutPage } = require('../pages/aboutPage');

//setup
let aboutPage;
test.beforeEach(async ({ page }) => {
  aboutPage = new AboutPage(page);
});

//about page tests
test('AB_01_NavigateToAboutPage', async () => {
    await aboutPage.gotoAboutPage();
    await aboutPage.isPageOpen();
});

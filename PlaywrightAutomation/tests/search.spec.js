require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../pages/searchPage');

//setup
let searchPage;
test.beforeEach(async ({ page }) => {
  searchPage = new SearchPage(page);
});

//search page tests
test('SE_01_NavigateToSearchPage', async () => {
    await searchPage.gotoSearchPage();
    await searchPage.isPageOpen();
});

test('SE_02_CheckSearchFunctionality', async () => {
    await searchPage.gotoSearchPage();
    await searchPage.isPageOpen();
    await searchPage.searchForListing();
    await searchPage.isListingPresent();
});

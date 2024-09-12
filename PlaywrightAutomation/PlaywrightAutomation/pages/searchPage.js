const { expect } = require('@playwright/test');
const { URLS } = require('./moduleUrls');

exports.SearchPage = class SearchPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.lblPageHeader = page.locator('div > h1');
    this.inptSearchTerm = page.locator('input[id="searchTerm"]');
    this.btnSearch = page.locator('button:has-text("Search")');
    this.lblListingResult = page.locator('p:has-text("Test House Example")');
  }

  async gotoSearchPage() {
    console.log("Navigating to Search Page.");
    await this.page.goto(URLS.SEARCH_PAGE);
  }

  async isPageOpen() {
    console.log("Checking if Search page is open.");
    await expect(this.page).toHaveURL(new RegExp(`^${URLS.LANDING_PAGE}`));
    await expect(this.lblPageHeader).toHaveText("Listing results:");
  }

  async searchForListing() {
    console.log("Entering text to search.");
    await this.inptSearchTerm.fill('Test');
    await this.btnSearch.click();
  }

  async isListingPresent() {
    console.log("Checking for listing.");
    await expect(this.lblListingResult).toBeVisible();
  }
};

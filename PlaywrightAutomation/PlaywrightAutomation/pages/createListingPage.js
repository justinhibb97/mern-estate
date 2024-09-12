const { expect } = require('@playwright/test');
const { URLS } = require('./moduleUrls');

exports.CreateListingPage = class CreateListingPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.lblPageHeader = page.locator('main > h1');
    this.imgProfile = page.locator('img[alt="profile"]');
  }

  async isPageOpen() {
    console.log("Checking if Create Listing page is open.");
    await expect(this.page).toHaveURL(URLS.CREATELISTING_PAGE);
    await expect(this.lblPageHeader).toHaveText("Create a Listing");
  }

  async gotoProfilePage() {
    console.log("Navigating to Profile Page from Create Listing Page.")
    await this.imgProfile.click();
  }
};

const { expect } = require('@playwright/test');
const { URLS } = require('./moduleUrls');

exports.ProfilePage = class ProfilePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.lblPageHeader = page.locator('div > h1');
    this.lnkSignOut = page.locator('span:has-text("Sign Out")');
    this.btnCreateListing = page.locator('a[href="/create-listing"]');
  }

  async isPageOpen() {
    console.log("Checking if Profile page is open.");
    await expect(this.page).toHaveURL(URLS.PROFILE_PAGE);
    await expect(this.lblPageHeader).toHaveText("Profile");
  }

  async logOutOfUser() {
    console.log("Logging out of user account.");
    await this.lnkSignOut.click();
  }

  async gotoCreateListingPage() {
    console.log("Navigating to Create Listing Page from Profile Page");
    await this.btnCreateListing.click();
  }
};

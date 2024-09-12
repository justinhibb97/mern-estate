const { expect } = require('@playwright/test');
const { URLS } = require('./moduleUrls');

exports.AboutPage = class AboutPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.lblPageHeader = page.locator('div > h1');
  }

  async gotoAboutPage() {
    console.log("Navigating to About Page.");
    await this.page.goto(URLS.ABOUT_PAGE);
  }

  async isPageOpen() {
    console.log("Checking if About page is open.");
    await expect(this.page).toHaveURL(URLS.ABOUT_PAGE);
    await expect(this.lblPageHeader).toHaveText("About Real Estate");
  }
};

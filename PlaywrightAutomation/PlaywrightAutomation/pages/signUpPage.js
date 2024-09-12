const { expect } = require('@playwright/test');
const { URLS } = require('./moduleUrls');

exports.SignUpPage = class SignUpPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.lblPageHeader = page.locator('div > h1');
  }

  async gotoSignUpPage() {
    console.log("Navigating to Sign Up Page.");
    await this.page.goto(URLS.SIGNUP_PAGE);
  }

  async isPageOpen() {
    console.log("Checking if Sign Up page is open.");
    await expect(this.page).toHaveURL(URLS.SIGNUP_PAGE);
    await expect(this.lblPageHeader).toHaveText("Sign Up");
  }
};

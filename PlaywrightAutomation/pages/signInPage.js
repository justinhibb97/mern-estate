require('dotenv').config();  // Ensure dotenv is loaded at the beginning

const { expect } = require('@playwright/test');
const { URLS } = require('./moduleUrls');

class SignInPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.lblPageHeader = page.locator('div > h1');
    this.lnkSignUp = page.locator('a[href="/sign-up"]');
    this.inptEmail = page.locator('input[type="email"]');
    this.inptPassword = page.locator('input[type="password"]');
    this.btnSearch = page.locator('button:has-text("Sign In")');
  }

  async gotoSignInPage() {
    console.log("Navigating to Sign In Page.");
    await this.page.goto(URLS.SIGNIN_PAGE);
  }

  async isPageOpen() {
    console.log("Checking if Sign In page is open.");
    await expect(this.page).toHaveURL(URLS.SIGNIN_PAGE);
    await expect(this.lblPageHeader).toHaveText("Sign In");
  }

  async gotoSignUpPage() {
    console.log("Navigating to Sign Up Page from Sign In Page.");
    await this.lnkSignUp.click();
  }

  async logInWithUser() {
    console.log("Logging in with automation user");
    console.log('USER_EMAIL:', process.env.USER_EMAIL);
    console.log('USER_PASSWORD:', process.env.USER_PASSWORD);
    await this.inptEmail.fill(process.env.USER_EMAIL);  // Environment variables should be defined
    await this.inptPassword.fill(process.env.USER_PASSWORD);
    await this.btnSearch.click();
  }
}

module.exports = SignInPage;

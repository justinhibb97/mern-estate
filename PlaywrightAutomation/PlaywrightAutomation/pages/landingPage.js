const { expect } = require('@playwright/test');
const { URLS } = require('./moduleUrls');

exports.LandingPage = class LandingPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.lblPageHeader = page.locator('div > h1 > span');
    this.lnkLetsGetStarted = page.locator('div > div > a');
    this.lnkAbout = page.locator('a[href="/about"]');
    this.lnkSignIn = page.locator('a[href="/profile"]');
    this.imgProfile = page.locator('img[alt="profile"]');
    this.inptSearch = page.locator('input');
  }

  async gotoLandingPage() {
    console.log("Navigating to Landing Page.");
    await this.page.goto(URLS.LANDING_PAGE);
  }

  async isPageOpen() {
    console.log("Checking if Landing page is open.");
    await expect(this.page).toHaveURL(URLS.LANDING_PAGE);
    await expect(this.lblPageHeader).toHaveText("perfect");
  }

  async gotoSearchPage() {
    console.log("Navigating to Search Page from Landing Page.");
    await this.lnkLetsGetStarted.first().click();
  }

  async gotoAboutPage() {
    console.log("Navigating to About Page from Landing Page.");
    await this.lnkAbout.first().click();
  }

  async gotoSignInPage() {
    console.log("Navigating to SignIn Page from Landing Page.");
    await this.lnkSignIn.first().click();
  }

  async searchFromHeader() {
    console.log("Entering text to search.");
    await this.inptSearch.fill('Test');
    await this.inptSearch.press('Enter');
  }

  async isUserLoggedIn() {
    console.log("Checking if user is logged in.");
    await expect(this.imgProfile).toBeVisible();
  }

  async gotoProfilePage() {
    console.log("Navigating to Profile Page from Landing Page.")
    await this.imgProfile.click();
  }
};

require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { LandingPage } = require('../pages/landingPage');
const { AboutPage } = require('../pages/aboutPage');
const SignInPage = require('../pages/signInPage');
const { ProfilePage } = require('../pages/profilePage');
const { CreateListingPage } = require('../pages/createListingPage');

//setup
let landingPage, aboutPage, signInPage, profilePage, createListingPage;
test.beforeEach(async ({ page }) => {
  landingPage = new LandingPage(page);
  aboutPage = new AboutPage(page);
  signInPage = new SignInPage(page);
  profilePage = new ProfilePage(page);
  createListingPage = new CreateListingPage(page)
});

//create listing tests
test('CL_01_LogInAndCreateListing', async () => {
    await signInPage.gotoSignInPage();
    await signInPage.isPageOpen();
    await signInPage.logInWithUser();

    await landingPage.isPageOpen();
    await landingPage.isUserLoggedIn();
    await landingPage.gotoProfilePage();

    await profilePage.isPageOpen();
    await profilePage.gotoCreateListingPage();

    await createListingPage.isPageOpen();
    await createListingPage.gotoProfilePage();

    await profilePage.isPageOpen();
    await profilePage.logOutOfUser();

    await signInPage.isPageOpen();
});

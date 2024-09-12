require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { LandingPage } = require('../pages/landingPage');
const { SearchPage } = require('../pages/searchPage');
const { AboutPage } = require('../pages/aboutPage');
const SignInPage = require('../pages/signInPage');
const { SignUpPage } = require('../pages/signUpPage');
const { ProfilePage } = require('../pages/profilePage');
const { CreateListingPage } = require('../pages/createListingPage');

//setup
let landingPage, searchPage, aboutPage, signInPage, signUpPage, profilePage, createListingPage;
test.beforeEach(async ({ page }) => {
  landingPage = new LandingPage(page);
  searchPage = new SearchPage(page);
  aboutPage = new AboutPage(page);
  signInPage = new SignInPage(page);
  signUpPage = new SignUpPage(page);
  profilePage = new ProfilePage(page);
  createListingPage = new CreateListingPage(page)
});

//landing page tests
test('LA_01_NavigateToLandingPage', async () => {
    await landingPage.gotoLandingPage();
    await landingPage.isPageOpen();
});

test('LA_02_NavigateToSearchPageFromLandingPage', async () => {
    await landingPage.gotoLandingPage();
    await landingPage.isPageOpen();
    await landingPage.gotoSearchPage();

    await searchPage.isPageOpen();
});

test('LA_03_NavigateToAboutPageFromLandingPage', async () => {
    await landingPage.gotoLandingPage();
    await landingPage.isPageOpen();
    await landingPage.gotoAboutPage();

    await aboutPage.isPageOpen();
});

test('LA_04_NavigateToSignInPageFromLandingPage', async () => {
    await landingPage.gotoLandingPage();
    await landingPage.isPageOpen();
    await landingPage.gotoSignInPage();

    await signInPage.isPageOpen();
});

test('LA_05_SearchFromLandingPage', async () => {
    await landingPage.gotoLandingPage();
    await landingPage.isPageOpen();
    await landingPage.searchFromHeader();

    await searchPage.isPageOpen();
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

//about page tests
test('AB_01_NavigateToAboutPage', async () => {
    await aboutPage.gotoAboutPage();
    await aboutPage.isPageOpen();
});

//sign in tests
test('SI_01_NavigateToSignInPage', async () => {
    await signInPage.gotoSignInPage();
    await signInPage.isPageOpen();
});

test('SI_02_NavigateToSignUpPageFromSignInPage', async () => {
    await signInPage.gotoSignInPage();
    await signInPage.isPageOpen();
    await signInPage.gotoSignUpPage();
    await signUpPage.isPageOpen();
});

test('SI_03_LogInAndLogOut', async () => {
    await signInPage.gotoSignInPage();
    await signInPage.isPageOpen();
    await signInPage.logInWithUser();

    await landingPage.isPageOpen();
    await landingPage.isUserLoggedIn();
    await landingPage.gotoProfilePage();

    await profilePage.isPageOpen();
    await profilePage.logOutOfUser();

    await signInPage.isPageOpen();
});

//sign up tests
test('SU_01_NavigateToSignUpPage', async () => {
    await signUpPage.gotoSignUpPage();
    await signUpPage.isPageOpen();
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

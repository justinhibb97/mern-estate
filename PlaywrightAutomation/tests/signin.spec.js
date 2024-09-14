require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { LandingPage } = require('../pages/landingPage');
const SignInPage = require('../pages/signInPage');
const { SignUpPage } = require('../pages/signUpPage');
const { ProfilePage } = require('../pages/profilePage');

//setup
let landingPage, signInPage, signUpPage, profilePage;
test.beforeEach(async ({ page }) => {
  landingPage = new LandingPage(page);
  signInPage = new SignInPage(page);
  signUpPage = new SignUpPage(page);
  profilePage = new ProfilePage(page);
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

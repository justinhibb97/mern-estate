require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { SignUpPage } = require('../pages/signUpPage');

//setup
let signUpPage;
test.beforeEach(async ({ page }) => {
  signUpPage = new SignUpPage(page);
});

//sign up tests
test('SU_01_NavigateToSignUpPage', async () => {
    await signUpPage.gotoSignUpPage();
    await signUpPage.isPageOpen();
});

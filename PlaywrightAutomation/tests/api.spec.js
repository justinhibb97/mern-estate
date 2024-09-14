require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { APIS } = require('../pages/moduleUrls');

//api tests
test('API_01_SignIn', async ({ request }) => {
  const response = await request.post(APIS.SIGNIN_ROUTE, {
    data: {
      email: process.env.USER_EMAIL,
      password: process.env.USER_PASSWORD
    }
  });

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);
});

test('API_02_SignInInvalidCredentials', async ({ request }) => {
  const response = await request.post(APIS.SIGNIN_ROUTE, {
    data: {
      email: "test",
      password: "test"
    }
  });

  expect(response.status()).toBe(404);

  const body = await response.json();
  console.log(body);
});

test('API_03_SignOut', async ({ request }) => {
  const response = await request.get(APIS.SIGNOUT_ROUTE, {
    data: {
      email: process.env.USER_EMAIL,
      password: process.env.USER_PASSWORD
    }
  });

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);
});

test('API_04_GetAllListings', async ({ request }) => {
  const response = await request.get(APIS.LISTINGALL_ROUTE, {
  });

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);
});

test('API_05_GetSpecificListings', async ({ request }) => {
  const response = await request.get(APIS.LISTINGSPECIFIC_ROUTE, {
  });

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);
});

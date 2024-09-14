require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { APIS } = require('../pages/moduleUrls');

//api tests
test('API_01_SignIn', async ({ request }) => {
  console.log("POST request to sign in.");
  const response = await request.post(APIS.SIGNIN_ROUTE, {
    data: {
      email: process.env.USER_EMAIL,
      password: process.env.USER_PASSWORD
    }
  });

  expect(response.status()).toBe(200);
  console.log("Successful Sign In.");

  const body = await response.json();
  console.log(body);
});

test('API_02_SignInInvalidCredentials', async ({ request }) => {
  console.log("POST request to sign in with invalid credentials.");
  const response = await request.post(APIS.SIGNIN_ROUTE, {
    data: {
      email: "test",
      password: "test"
    }
  });

  expect(response.status()).toBe(404);
  console.log("Invalid credentials response.");

  const body = await response.json();
  console.log(body);
});

test('API_03_SignOut', async ({ request }) => {
  console.log("GET request to sign out.");
  const response = await request.get(APIS.SIGNOUT_ROUTE, {
    data: {
      email: process.env.USER_EMAIL,
      password: process.env.USER_PASSWORD
    }
  });

  expect(response.status()).toBe(200);
  console.log("Successful Sign Out.");

  const body = await response.json();
  console.log(body);
});

test('API_04_GetAllListings', async ({ request }) => {
  console.log("GET request to get all listings.");
  const response = await request.get(APIS.LISTINGALL_ROUTE, {
  });

  expect(response.status()).toBe(200);
  console.log("Successful response for all listings.");

  const body = await response.json();
  console.log(body);
});

test('API_05_GetSpecificListings', async ({ request }) => {
  console.log("GET request to get specific listings.");
  const response = await request.get(APIS.LISTINGSPECIFIC_ROUTE, {
  });

  expect(response.status()).toBe(200);
  console.log("Successful response for specific listings.");

  const body = await response.json();
  console.log(body);
});

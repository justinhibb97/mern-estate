require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { getCollection, closeConnection } = require('../pages/mongoDbUtils');

//mongodb tests
test('MDB_01_AddListingAndRemove', async ({ page }) => {
  const collection = await getCollection(process.env.MONGODB_COLLECTION1);

  console.log("Inserting Listing in Database.");
  await collection.insertOne({ name: process.env.MONGODB_LISTINGNAME, value: process.env.MONGODB_LISTINGVALUE });

  console.log("Searching for Listing in Database.");
  const result = await collection.findOne({ name: process.env.MONGODB_LISTINGNAME });
  expect(result).toBeDefined();
  expect(result.value).toBe(process.env.MONGODB_LISTINGVALUE);

  console.log("Deleting Listing in Database.");
  await collection.deleteOne({ name: process.env.MONGODB_LISTINGNAME });
  await closeConnection();
});

test('MDB_02_AddUserAndRemove', async ({ page }) => {
  const collection = await getCollection(process.env.MONGODB_COLLECTION2);

  console.log("Inserting User in Database.");
  await collection.insertOne({ username: process.env.MONGODB_USERNAME, email: process.env.MONGODB_EMAIL, password: process.env.MONGODB_PASSWORD });

  console.log("Searching for User in Database.");
  const result = await collection.findOne({ username: process.env.MONGODB_USERNAME });
  expect(result).toBeDefined();
  expect(result.email).toBe(process.env.MONGODB_EMAIL)
  expect(result.password).toBe(process.env.MONGODB_PASSWORD);

  console.log("Deleting User in Database.");
  await collection.deleteOne({ username: process.env.MONGODB_USERNAME });
  await closeConnection();
});

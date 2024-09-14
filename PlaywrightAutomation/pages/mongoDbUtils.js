require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGO;

let client;
let db;

async function connectToDb() {
    if (db) return db;
    client = new MongoClient(uri, { });
    await client.connect();
    db = client.db(process.env.MONGODB_NAME);
    console.log("Connection to database.");
    return db;
}

async function getCollection(collectionName) {
    console.log("Searching for Collection.");
    const database = await connectToDb();
    return database.collection(collectionName);
}

async function closeConnection() {
    console.log("Closing Connection.");
    if (client) await client.close();
}

module.exports = { getCollection, closeConnection };

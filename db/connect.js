const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGODB_URI);

let db;

const initDb = (callback) => {
    client.connect().then(() => {
        db = client.db('recipe-box');
        callback(null, db);
    }).catch(err => callback(err));
};

const getDb = () => db;

module.exports = {initDb, getDb};
const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGODB_URI);

let _db;

const initDb = (callback) => {
    if (_db) {
        console.log('Db is already initialized!');
        return callback(null, _db);
    }

    console.log('Connecting to MongoDB...');
    MongoClient.connect(process.env.MONGODB_URI)
        .then((client) => {
            _db = client.db('recipe-box');
            console.log('Successfully connected to MongoDB.');
            callback(null, _db);
        })
        .catch((err) => {
            console.error('Database connection error:', err);
            callback(err);
        });
};

const getDb = () => {
    if (!_db) {
        throw Error('Db not initialized');
    }
    return _db;
};

module.exports = { initDb, getDb };
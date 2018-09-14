// import express from 'express';
// import bodyParser from 'body-parser';
// import logger from 'morgan';
// import mongoose from 'mongoose';

// const app = express();
// const router = express.Router();

var MongoClient = require('mongodb').MongoClient, assert = require('assert');

var url = 'mongodb://localhost:27017/backend';
MongoClient.connect(url, function(err, db) {
    assert.equal(null,err);
    console.log("yip");
    db.close;
});
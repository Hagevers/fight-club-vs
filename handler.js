"use strict";
require("dotenv").config();
const express = require('express');
const helmet = require("helmet");
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://vercel-admin-user:A9b-hCcprdDBfGQ@cluster0.mqyicqe.mongodb.net/?retryWrites=true&w=majority");
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connection Successful!");
})
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
console.log('pass handler');
module.exports = app;
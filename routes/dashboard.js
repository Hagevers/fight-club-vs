const dashboard = require("express").Router();
const auth = require('../middleware/authToken');
const jwt = require('jsonwebtoken');

dashboard.get('/dashboard', auth, function (request, response) {
    console.log('connected!');
    response.status(200).send('WORKS');
})

module.exports = dashboard
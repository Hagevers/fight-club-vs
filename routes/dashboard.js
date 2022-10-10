const dashboard = require("express").Router();
const auth = require('../middleware/authToken');
const resources = require('../src/Backend/ResourcesModel');
const User = require('../src/Backend/SignupModel');
const jwt = require('jsonwebtoken');

dashboard.get('/dashboard', auth, async function (request, response) {
    resources.find({})
        .select('Food Marble Solfour Gold')
        .populate('UserId', 'NickName')
        .then(data => response.status(200).send(data))
        .catch(error => response.status(500).send(error));
});

module.exports = dashboard
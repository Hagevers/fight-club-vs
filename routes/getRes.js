const getRes = require("express").Router();
const auth = require('../middleware/authToken');
const resources = require('../src/Backend/ResourcesModel');

getRes.get('/getRes', auth, function (request, response) {
    const token = request.token;
    const decode = JSON.parse(Buffer.from(token.split('.')[1], 'base64'));
    resources.find({UserId:decode.user_id})
        .select('Food Marble Solfour Gold')
        .then(data => response.status(200).send(data))
        .catch(error => console.log(error));
});

module.exports = getRes
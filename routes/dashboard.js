const dashboard = require("express").Router();
const auth = require('../middleware/authToken');
const resources = require('../src/Backend/ResourcesModel')
const jwt = require('jsonwebtoken');

dashboard.get('/dashboard', auth, async function (request, response) {
    // users.find({},'NickName' , function (err, res){
    //     if (err){
    //         response.status(500).send('somthing happend');
    //     }else {
    //         response.status(200).send(res);
    //     }
    // })
    resources.find({})
        .populate("UserId")
        .then(data => response.status(200).send(data))
        .catch(error => console.log(error));
})

module.exports = dashboard
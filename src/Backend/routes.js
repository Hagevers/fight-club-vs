const express = require('express')
const router = express.Router()
const signUpTemplate = require('./SignupModel')
const bcrypt = require('bcrypt')

router.post('/signUp', async (request,response) => {
    const saltPass = await bcrypt.genSalt(10)
    const securePass = await bcrypt.hash(request.body.password, saltPass)
    const signUpUser = new signUpTemplate ({
        NickName:request.body.NickName,
        Email:request.body.Email,
        password:securePass
    })
    signUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

module.exports = router
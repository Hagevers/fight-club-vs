const express = require('express')
const router = express.Router()
const signUpTemplate = require('./SignupModel')
const bcrypt = require('bcrypt')

router.post('/signUp', async (request, response) => {
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

router.get('/dashboard', (request, response) => {
    if (!loggedIn){
        return response.status(401).send();
    }
})
router.post('/signIn', (request, response) => {
    const Email = request.body.Email
    const password = request.body.password
    signUpTemplate.findOne({Email:Email, password:password}, function(err, user){
        if (err){
            console.log(err)
            return response.status(500).send();
        }
        if (!user){
            return response.status(404).send();
        }
        return response.status(200).send();
    })
})

module.exports = router
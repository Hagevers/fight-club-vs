const login = require("express").Router();
const signUpTemplate = require('../src/Backend/SignupModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
login.post("/login", async function (request, response) {
    try{
        const {Email,password} = request.body
        console.log({Email,password});
        console.log('before finding');
        signUpTemplate.findOne({Email:Email}).then(async (user) => {
            if(!user){
                console.log('found user');
                console.log('username/password is not exist');
                response.status(400).send({msg:"username/password is not exist"})
            }
            else{
                if(await bcrypt.compare(password, user.password)){
                    const token = jwt.sign(
                        { user_id: user.id, Email },
                        process.env.TOKEN_KEY,
                        {
                          expiresIn: "2h",
                        }
                    );
                    user.token = token;
                    response.status(200).json(user);
                }
                else{
                    console.log('username/password is not exist');
                    response.status(400).send({msg:"username/password is not exist"})
                }
            }
        })
    }
    catch(e){
        console.error(e);
    }
});
module.exports = login;
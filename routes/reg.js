const reg = require("express").Router();
const signUpTemplate = require('../src/Backend/SignupModel');
const resourcesTemple = require('../src/Backend/ResourcesModel');
const bcrypt = require('bcrypt');
reg.post("/reg", async function (request, response) {
    const {NickName,Email,password} = request.body;
    console.log({NickName,Email,password});
    try{
        console.log('before finding');
        signUpTemplate.findOne({Email:Email}).then(async (user) => {
            if ( user ) {
                console.log('user exist');
                response.status(400).send({msg:"User already exist!"})
            }
            else {
                console.log('starts to create user');
                const securePass = await bcrypt.hash(password, 10);
                console.log('enc pass');
                const newUser = new signUpTemplate({
                    NickName: NickName,
                    Email: Email,
                    password: securePass,
                });
                const resources = new resourcesTemple({
                    UserId: "",
                    Gold: 750,
                    Solfour: 750,
                    Marble: 750,
                    Food: 750
                });
                resources.UserId = newUser._id;
                await resources.save();
                newUser.save()
                .then(data => {
                    
                    resources.save()
                    response.status(200).send(data);
                    console.log('saved');
                })
                .catch(error => {
                    response.status(500).send(error);
                    console.log('not saved');
                })
                console.log('finished user');
            }
        });
    }catch{
        console.log('was an error with creating user');
    }
    console.log('pass reg post');
});
module.exports = reg;
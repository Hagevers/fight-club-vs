import { connectedToDatabase } from "../lib/connectedToDatabase";

export default async function handler(request, response){
    const bcrypt = require('bcrypt')
    try{
        const { mongoClient } = await connectedToDatabase();
        const jwt = require('jsonwebtoken');
        const db = mongoClient.db("pmmbrp");
        const table = db.collection("pmmbrps");
        const {Email,password} = request.body
        const user = await table.findOne({Email})
        const result = await table
            .find({Email})
            .limit(1)
            .toArray();
        console.log(user);
        if (result[0] !== undefined){
            if(await bcrypt.compare(password,result[0]['password'])){
                console.log('True welcome!');
                const token = jwt.sign(
                    { user_id: result[0]['_id'], Email },
                    process.env.TOKEN_KEY,
                    {
                      expiresIn: "2h",
                    }
                );
                user.token = token;
                response.status(200).json(user);
            }
            else{
                console.log('User/Pass not exist!.');
                response.status(400).json({ msg: "Email or Password are not exist!" });
            }
        }
        else{
            console.log('User/Pass not exist!.');
            response.status(400).json({ msg: "Email or Password are not exist!" });
        }
    }
    catch(e){
        console.error(e);
    }
} 
import { connectedToDatabase } from "../lib/connectedToDatabase";
export default async function handlero (request, response){
    try{
        const { mongoClient } = await connectedToDatabase();
        const db = mongoClient.db("pmmbrp");
        const table = db.collection("pmmbrps");
        const bcrypt = require('bcrypt')
        const {NickName,Email,password} = request.body;
        const date = Date.now;
        const exUser = await table
            .find({Email})
            .limit(1)
            .toArray();
        if(exUser[0] !== undefined){response.status(409).send('User already exist')}
        const securePass = await bcrypt.hash(password, 10);
        table.insertOne({
            "NickName":NickName,
            "Email":Email,
            "password":securePass,
            "isVerified":false,
            "date_created": date
        })
        .then(result => response.status(200).json(result))
        .catch(err => console.log(`Somthing went off ${err}`))
    }catch(e){
        console.log(e);
        response.status(500).json(e);
        console.log('somthing went off');
    }
}
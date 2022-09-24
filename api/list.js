import { connectedToDatabase } from "../lib/connectedToDatabase";

export default async function handler(request, response){
    try{
        const { mongoClient } = await connectedToDatabase();
        const db = mongoClient.db("pmmbrp");
        const table = db.collection("pmmbrps");
        const {email,password} = request.body
        const result = await table
            .find({email})
            .limit(1)
            .toArray();
        if (result[0].password == password){
            console.log('pass correct')
        }
        else{
            console.log('false');
        }
        response.status(200).json(result);
    }
    catch(e){
        console.error(e);
    }
} 
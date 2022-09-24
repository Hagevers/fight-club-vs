import {MongoClient} from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri){
    throw new Error ("Problem accured");
}

export default async function handlers (request, response){
    try{
        const mongo_client = await new MongoClient(uri,options).connect();
        console.log('connected');
        const db = mongo_client.db("pmmbrp");
        const table = db.collection("pmmbrps");
        const result = await table
            .find({"NickName":"Hagever"})
            .limit(4)
            .toArray();
        response.status(200).json(result);
    } catch(e){
        console.log(e);
        response.status(500).json(e);
    }
}
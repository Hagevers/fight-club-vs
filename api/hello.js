import {MongoClient} from 'mongodb';

const uri = process.env.MONGODB_URI
const options = {}

if (!uri){
    throw new Error ("Problem accured")
}

export default async function handler (request, response){
    try{
        const mongo_client = await new MongoClient(uri,options).connect();
        console.log('connected');
        const db = mongo_client.db("pmmbrp");
        const table = mongo_client.collection("pmmbrps");
        const result = await table
            .find({})
            .project({
                NickName: 0,
                Password: 0,
                Email: 0

            })
            .limit(4)
            .toArray();
        response.status(200).json(result);
    } catch(e){
        console.log(e)
        response.status(500).json(e);
    }
}
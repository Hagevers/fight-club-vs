import { connectedToDatabase } from "../lib/connectedToDatabase";

export default async function handler(request, response){
    try{
        const mongoClient = await connectedToDatabase()
        const db = mongoClient.db("pmmbrp");
        const collection = db.collection("pmmbrps")
        const result = await collection
        .find({})
        .limit(10)
        .toArray()
        response.status(200).json(result)
    }
    catch(e){
        console.log(e)
    }
}
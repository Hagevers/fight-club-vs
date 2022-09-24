import {MongoClient} from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};
let mongoClient;

if (!process.env.MONGODB_URI){
    throw new Error ("Problem accured");
}

export async function connectedToDatabase (){
    try{
        if (mongoClient){
            return {mongoClient};
        }
        mongoClient = await (new MongoClient(uri,options)).connect();
        console.log("Just connected");
        return {mongoClient};
    } catch(e){
        console.error(e);
    }
}
import { MongoClient } from "mongodb";

// /api/new-meetup
//POST /api/new-meetup

async function handler(req,res){

    const userName = 'varunk2801'
    const password = 'Wertz@56625'

    if(req.method === 'POST'){
        const data = req.body;
        const client = await MongoClient.connect(`mongodb+srv://${userName}:${encodeURIComponent(password)}@cluster0.pkamdrt.mongodb.net/meetups?retryWrites=true&w=majority`);
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);
        console.log(result);

        client.close();

        res.status(201).json({ message: "meetup inserted" });
    }
}   

export default handler;
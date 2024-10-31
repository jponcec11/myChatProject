const mongodb = require('mongodb');
const URL = process.env.URL;
const client = new mongodb.MongoClient(URL);
const dbName = 'chats';

//Create a function to connect to db

async function init(){
    try {
        //Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('myChats');
    } catch (error) {
        console.log(`Found an error while connecting. Erro is: ${error}`);
    }
}

module.exports ={
    init
}
const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;


const createUser = async (req, res)=>{
    const user = {
        email : req.body
    }
    let emailDb = await mongodb.getDatabase().db().collection('myChats').findOne({user});

    if(emailDb){
        return res.status(400).json(`Email: ${email} already exists. Please try a different email address.`)
    }
    const response = await mongodb.getDatabase().db().collection('myChats').insertOne(user);
    if(response.acknowledged){
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'Some error occurred while creating the user.');
    }
}

module.exports = {
    createUser
}
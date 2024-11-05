const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;


const createUser = async (req, res)=>{
    /*const {email} = req.body;
    let emailDb = await mongodb.getDatabase().db().collection('myChats').findOne({email});

    if(emailDb){
        return res.status(400).json(`Email: ${email} already exists. Please try a different email address.`)
    }*/
   res.send('Entered function')
}

module.exports = createUser;
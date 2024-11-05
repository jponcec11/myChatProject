const router = require('express').Router();

router.get('/', (req, res)=>{
    res.send("Welcome to our chats APIs")
});

/*router.get('/register', (req, res)=>{
    res.send("You are about to register");
});*/

router.get('/login', (req, res)=>{
    res.send("You are about to login");
});

router.use('/users', require('./users'));


module.exports = router;
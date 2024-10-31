const express = require('express');
const cors = require('cors');
require('dotenv').config();
const database = require('../backend/data/database');
const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.json());
app.use(cors());
database.init();
app.listen(PORT,(req, res)=>{
    console.log(`Server is running on port ${PORT}`)
})
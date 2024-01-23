const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
const dotenv = require('dotenv');
const app = express();
const authrouter = require('./routes/auth.js')
app.use(express.json());
dotenv.config();

app.get('/', (req,res) => {res.send('This is homepage')});

app.use('/nihal', authrouter);

const port = process.env.PORT || 4000;
const dbURI = config.get('dbURI');




mongoose.connect(dbURI)
.then( (result) => app.listen(port, (req, res) => {
    console.log(`Server is running on port localhost:${port}`)
}))
.catch((err) => {console.log(err)})
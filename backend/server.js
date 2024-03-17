const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');


dotenv.config();

app.use(cors({
    origin: 'http://localhost:5173', // Specify your frontend domain here
    credentials: true, // Enable credentials
    
  }));

const authRouter = require('./routes/auth.js')
const itemRouter = require('./routes/item.js')
const cartRouter = require('./routes/cart.js')
const orderRouter = require('./routes/order.js')
const wishlistRouter = require('./routes/wishlist.js')

const webhookRouter = require('./routes/webhookRoute.js')
app.use(express.raw())
app.use('/webhook', express.raw({ type: '*/*' }), webhookRouter);


app.use(express.json());
app.use('/api', authRouter)
app.use('/api', itemRouter)
app.use('/api', cartRouter)
app.use('/api', orderRouter)
app.use('/api', wishlistRouter)



app.get('/', (req,res) => {res.send('This is homepage')});



const port = process.env.PORT || 4000 || 4001;
const dbURI = config.get('dbURI');




mongoose.connect(dbURI)
.then( (result) => app.listen(port, (req, res) => {
    console.log(`Server is running on port localhost:${port}`)
}))
.catch((err) => {console.log(err)})
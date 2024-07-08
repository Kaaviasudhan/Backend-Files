const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/connectDatabase');
dotenv.config({path: path.join(__dirname, 'config', 'config.env')})

// #Routes
const products = require('./routes/product');
const orders = require('./routes/order');

// #use.
app.use(express.json())
app.use('/api/v1/',products);
app.use('/api/v1/',orders);

connectDatabase();

// connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`Server is running under ${process.env.PORT} PORT ID in ${process.env.NODE_ENV}`)
});
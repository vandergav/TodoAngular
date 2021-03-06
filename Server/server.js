const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({ path: './config/config.env' });

const transactions = require('./routes/transactions')

const app = express();

// app.get('/', (req, res) => res.send('Hello'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, UPDATE, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json())

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
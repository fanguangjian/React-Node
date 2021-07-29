/*
 * @Author: your name
 * @Date: 2021-07-24 17:08:46
 * @LastEditTime: 2021-07-29 23:50:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /React-Node/server.js
 */
const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session');
const app = express();

let dbConnection = require('./db/mongo');
let productRoute = require('./routes/productsRoute');
let userRoute = require('./routes/userRoute');
let orderRoute = require('./routes/orderRoute');

app.use(bodyParser.json());

app.use('/api/products/', productRoute);
app.use('/api/user/', userRoute);
app.use('/api/orders/', orderRoute);



app.get("/",(req, res) => {
    res.send("This is from back end");
});

// const port = 8000;
// app.listen(port, ()=> console.log('Node Js server started'))
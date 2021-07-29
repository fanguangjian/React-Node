/*
 * @Author: your name
 * @Date: 2021-07-24 17:08:46
 * @LastEditTime: 2021-07-30 09:43:37
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /React-Node/server.js
 */
const express = require("express");
const bodyParser = require("body-parser");
const  app = express();

let dbConnection = require('./db');
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

const port = 8000;
app.listen(port, ()=> console.log('Node Js server started'))
//test
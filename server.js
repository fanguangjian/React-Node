/*
 * @Author: your name
 * @Date: 2021-07-24 17:08:46
 * @LastEditTime: 2021-07-29 00:24:15
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /React-Node/server.js
 */
const express = require("express");
let path = require('path');
let fs = require("fs");
let logger = require('morgan');
let FileStreamRotator = require('file-stream-rotator');//日志分割
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

var logDirectory = __dirname + '/log'; 
// ensure log directory exists 
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// create a rotating write stream 
var accessLogStream = FileStreamRotator.getStream({
    date_format: 'YYYYMMDD',// file name formate
    filename: logDirectory + '/%DATE%.log',
    frequency: 'daily',
    verbose: false
});

const ENV = process.env.NODE_ENV
if (ENV !== 'production') {
  // Dev ENV
  app.use(logger('dev',{
    stream:process.stdout   // default param
  }));
} else {
  //Pro ENV
  const logFileName = path.join(__dirname,'logs','access.log')
  const writeStream = fs.createWriteStream(logFileName, {
    flags:'a'
  })
  app.use(logger('combined',{
//   app.use(logger('joke',{
    // stream: writeStream   // wite in single file
    stream: accessLogStream     // wite in single file with date
  }));
}


app.get("/",(req, res) => {
    res.send("This is from back end");
});

const port = 8000;
app.listen(port, ()=> console.log('Node Js server started'))
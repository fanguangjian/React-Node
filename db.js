const mongoose = require("mongoose");

var mongoDBURL = 'mongodb+srv://cloudmel:fan1225@cluster0.yzvin.mongodb.net/Mern-cloudmel'

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose
/*
 * @Author: your name
 * @Date: 2021-07-26 21:12:31
 * @LastEditTime: 2021-07-26 21:14:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mern-cloudmel/models/userModel.js
 */
const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name : {
        type:String,
        require
    },
    email : {
        type:String,
        require
    } , 
    password : {
        type:String,
        require
    } , 
    // isAdmin : {
    //     type:Boolean,
    //     default:false
    // }
})

const User = mongoose.model('users' , userSchema)
module.exports=User
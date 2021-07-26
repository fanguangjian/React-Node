/*
 * @Author: your name
 * @Date: 2021-07-26 21:14:45
 * @LastEditTime: 2021-07-26 22:28:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mern-cloudmel/routes/userRoute.js
 */
const express = require("express");
const router = express.Router();
const User = require('../models/userModel');
const { SuccessModel, ErrorModel} = require('../models/resModel');

router.post("/register", (req, res) => {
    const newUser = new User({
        name : req.body.name , 
        email : req.body.email,
        password : req.body.password
    });

    User.find({email : req.body.email} , (err , docs)=>{
        // console.log(docs);
        if(docs.length >0){
            res.send('Email already registered!')
        }else{
            newUser.save(err=>{
                if(!err){
                    // res.send('User Registered successfully!')
                    return res.json({data: docs});
                }else {
                    res.send('Something went wrong!')
                }
            })
        }
        if(err){
            res.send('Something went wrong!')
        }
    })  
});

router.post("/login", (req, res)=>{
    User.find({email: req.body.email, password: req.body.password}, (err, docs)=>{
        // console.log(docs);
        if(docs.length > 0){
            // res.send('Login Successfully!')
            const user = {
                name : docs[0].name , 
                _id : docs[0]._id ,
                email : docs[0].email,
            }
            res.send(user)
        }else{
            return res.status(400).json({message:'INvalid Credentilas'})
        }
    })
})



module.exports =router
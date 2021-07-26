/*
 * @Author: your name
 * @Date: 2021-07-24 20:37:58
 * @LastEditTime: 2021-07-25 18:34:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mern-cloudmel/routes/productsRoute.js
 */
const express = require("express");
const router = express.Router();
const Product = require('../models/productModel');
const { SuccessModel, ErrorModel} = require('../models/resModel');

router.get("/getAllProducts", (req, res) => {
    Product.find({}, (err, docs) => {
        if(!err){
            // return res.json({data: docs});
            return res.json(
                new SuccessModel({data: docs})        
            );           
        } else {
            // return res.status(400).json({message : 'Something went wrong!'});
            return res.status(400).json(
                new ErrorModel({message : 'Something went wrong!'})                
            );
        }
    })
});

router.post("/getProductbyId", (req, res) => {
    Product.find({_id : req.body.productId} , (err , docs)=>{
        if(!err)
        {
            res.send(docs[0])
        }
        else{
            return res.status(400).json({ message: 'something went wrong' });
        }

    })
  
});



module.exports =router
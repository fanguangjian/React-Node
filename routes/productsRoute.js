/*
 * @Author: your name
 * @Date: 2021-07-24 20:37:58
 * @LastEditTime: 2021-08-04 22:56:09
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /React-Node/routes/productsRoute.js
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

router.post("/addReview", async(req, res) => {

    const {review , productid , currentUser} = req.body
    const product = await Product.findById({_id :productid})
    const reviewmodel = {
        name : currentUser.name,
        userid : currentUser._id ,
        rating : review.rating,
        comment : review.comment 
    }   
    product.reviews.push(reviewmodel)
    var rating = product.reviews.reduce((acc , x)=> acc + x.rating , 0) / product.reviews.length
    product.rating = rating
    product.save(err=>{
        if(err){
            return res.status(400).json({ message: 'Something went wrong' + err});
        }else{
            res.send('Review Submitted successfully'+err)
            
        }
    })
  
});



module.exports =router
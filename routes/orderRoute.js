/*
 * @Author: G.F
 * @Date: 2021-07-27 23:34:45
 * @LastEditTime: 2021-07-28 00:36:23
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /React-Node/routes/orderRoute.js
 */
const {v4 : uuidv4} = require('uuid');
const express = require("express");
const router = express.Router();
const stripe = require("stripe")("sk_test_51JHp25J2lXQ2I7SnpQt0gIdyLOhuOv7A8SHsuXkz6fLw7jR8Xps43dyKw59MUxn71jXytcgvX9jdehYELP0hXZ2000mm6hNYSw");
const Order = require('../models/orderModel');
const { SuccessModel, ErrorModel} = require('../models/resModel');


// router.post('/placeorder', async(req, res)=>{
//     const {token, cartItems, currentUser, subtotal} = req.body;
//     console.log(token, 'tt');
//     const customer = await stripe.customers.create({
//         email : token.email , 
//         source : token.id
//     });

//     const payment = await stripe.charges.create({
//           amount : subtotal , 
//           currency : 'inr', 
//           customer : customer.id , 
//           receipt_email : token.email
//     },{
//         idempotencykey: uuidv4()
//     });

//     if(payment){
//         res.send("Pay");
//     }else{
//         res.send("Failed");
//     }
// })

router.post("/placeorder", async(req, res) => {

    const {token , cartItems , currentUser , subtotal} = req.body

    const customer = await stripe.customers.create({
        email : token.email , 
        source : token.id
    })

    const payment = await stripe.charges.create({
          amount : subtotal*100 , 
          currency : 'inr' , 
          customer : customer.id , 
          receipt_email : token.email
    } , {
        idempotencyKey: uuidv4()
    })


    if(payment)
    {
        res.send("Pay");
       
    }
    else{
        return res.status(400).json({ message: 'Payment failed' });
    }
  
});


module.exports =router
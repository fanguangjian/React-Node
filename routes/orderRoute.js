/*
 * @Author: G.F
 * @Date: 2021-07-27 23:34:45
 * @LastEditTime: 2021-07-28 23:33:28
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


router.post('/placeorder', async(req, res)=>{
    const {token, cartItems, currentUser, subtotal} = req.body;
    // console.log(token, 'tt');
    const customer = await stripe.customers.create({
        email : token.email , 
        source : token.id
    });
    // console.log(subtotal, 'subtotal');

    const payment = await stripe.charges.create({
          amount : subtotal*100, 
        //   amount : 1000, 
          currency : 'aud', 
          customer : customer.id , 
          receipt_email : token.email
    },{
        idempotencyKey: uuidv4()
    });

    if(payment){      
        const order = new Order({
            userid : currentUser._id ,
            name : currentUser.name,
            email : currentUser.email ,
            orderItems : cartItems ,
            shippingAddress : {
                address : token.card.address_line1 ,
                city : token.card.address_city,
                country : token.card.address_country,
                postalCode : token.card.addres_zip
            },
            orderAmount : subtotal,
            transactionId : payment.source.id ,
            isDelivered : false
        })
        order.save(err=>{
            if(err){
                return res.status(400).json({ message: 'Something went wrong' });
            }else{
                res.send('Order Placed Successfully')
            }

        })

    }else{
        return res.status(400).json({ message: 'Payment failed' });
    }
})

router.post("/getOrdersByUserId", (req, res) => {
    const userid = req.body.userid
    Order.find({userid : userid} , (err , docs)=>{
        if(err){
            return res.status(400).json({ message: 'something went wrong' });
        }
        else{
            res.send(docs)
        }

    })
  
});

router.post("/getOrderById", (req, res) => {

    const orderId = req.body.orderId
    Order.find({_id: orderId} , (err , docs)=>{
        if(err){
            return res.status(400).json({ message: 'something went wrong' });
        } else{
            res.send(docs[0])
        }

    })
});

module.exports =router
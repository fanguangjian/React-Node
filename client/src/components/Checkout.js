/*
 * @Author: G.F
 * @Date: 2021-07-27 22:18:24
 * @LastEditTime: 2021-07-28 20:57:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /React-Node/client/src/components/Checkout.js
 */

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {useDispatch , useSelector} from 'react-redux';
import { placeOrder } from '../actions/orderAction';
import Loader from '../components/Loader'
import Error from '../components/Error'
import Success from '../components/Success'

export default function Checkout(amount) {
    const dispatch = useDispatch()
    const orderstate = useSelector(state=>state.placeOrderReducer)
    const { loading , success , error } = orderstate

    function tokenHandler(token){
        //  console.log(token);
         console.log(amount);
         dispatch(placeOrder(token,amount.amount))
    }
    function validate(){
        if(!localStorage.getItem('currentUser')){
             window.location.href ='/login'
        }
    }
    return (
        <div>
            <StripeCheckout
                token={tokenHandler}
                amount={amount}
                shippingAddress
                currency='AUD'
                stripeKey='pk_test_51JHp25J2lXQ2I7SnwFYcdZj3StD6qEY3uytQx6b6d1IPJwvUJJBdEXpbSSdQ32gcI80LZfLXSdj39mIiSHlVcJ2O009psOXMKd'
            >
                <button className="btn" onClick={validate}>PAY NOW</button>
            </StripeCheckout>
            
        </div>
    )
}

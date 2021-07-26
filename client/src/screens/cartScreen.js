/*
 * @Author: your name
 * @Date: 2021-07-25 22:06:08
 * @LastEditTime: 2021-07-25 22:28:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mern-cloudmel/client/src/screens/cartScreen.js
 */

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Money } from "react-format";
import { addToCart , deleteFromCart } from '../actions/cartAction';
// import Checkout from '../components/Checkout'

export default function Cartscreen() {

    const cartreducerstate = useSelector(state=>state.cartReducer)
    const dispatch = useDispatch()
    const {cartItems} = cartreducerstate

    let subtotal = cartItems.reduce((acc , item) => acc + (item.price*item.quantity) , 0) 

    return (
        <div>
            
            <div className="row mt-3 justify-content-center">
                 <div className="col-md-8 card text-center shadow p-3 mb-5 bg-white rounded">
                     <h2 className='text-center m-5'>MY CART</h2>
                     <table className='table table-bordered table-responsives-sm'>
                      <thead>
                      <tr>
                           <th>Name</th>
                           <th>Price</th>
                           <th>Quantity</th>
                           <th>Total Price</th>
                           <th>Delete</th>
                       </tr>
                      </thead>
                      <tbody>

                          {cartItems.map(item=>{

                            return <tr>
                                <td>{item.name}</td>
                                <td> <Money>{item.price}</Money></td>
                                <td><select value={item.quantity} onChange={(e)=>{dispatch(addToCart(item , e.target.value))}}>
                                    
                                    {[...Array(item.countInStock).keys()].map((x , i)=>{
                                          return <option value={i+1}>{i+1}</option>
                                    })}
                                    
                                    </select></td>
                                <td><Money>{item.quantity * item.price}</Money></td>
                                <td><i style={{color:'red'}} class="far fa-trash-alt" onClick={()=>{dispatch(deleteFromCart(item))}}></i></td>
                            </tr>
                          })}

                      </tbody>
                     </table>
                     <hr/>
                     <h2 className='text-center'>SubTotal : <Money>{subtotal}</Money></h2>
                     <hr/>                    
                     {/* <Checkout amount={subtotal}/>                    */}

                 </div>

            </div>

        </div>
    )
}
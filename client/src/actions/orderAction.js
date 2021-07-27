/*
 * @Author: G.F
 * @Date: 2021-07-27 22:51:56
 * @LastEditTime: 2021-07-28 00:15:09
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /React-Node/client/src/actions/orderAction.js
 */
import axios from "axios";
export const placeOrder =(token , subtotal) =>(dispatch , getState)=>{

     const currentUser = getState().loginReducer.currentUser
     const demoItems = getState().cartReducer.cartItems
     console.log(subtotal);

     const cartItems = new Array();
     for(var i=0 ; i<demoItems.length ; i++) {
          var item ={
               name : demoItems[i].name ,
               quantity : demoItems[i].quantity,
               price : demoItems[i].price,
               _id : demoItems[i]._id
          }
          cartItems.push(item)
     }

     dispatch({type:'PLACE_ORDER_REQUEST'})
     axios.post('/api/orders/placeorder' , {token , subtotal , currentUser , cartItems}).then(res=>{
          dispatch({type:'PLACE_ORDER_SUCCESS'})
          console.log(res);
     }).catch(err=>{
         dispatch({type:'PLACE_ORDER_FAILED'})
     })


}
/*
 * @Author: your name
 * @Date: 2021-07-25 20:59:17
 * @LastEditTime: 2021-07-25 21:00:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mern-cloudmel/client/src/actions/addtocartAction.js
 */

export const addToCart=(product , quantity)=>(dispatch , getState)=>{

    const cartItem = {
      name : product.name , 
      _id : product._id ,
      price : product.price ,
      countInStock : product.countInStock , 
      quantity : quantity
    }
    dispatch({type : 'ADD_TO_CART' , payload : cartItem})
    localStorage.setItem('cartItems' , JSON.stringify(getState().cartReducer.cartItems))
}


export const deleteFromCart=(item)=>(dispatch , getState)=>{
   dispatch({type:'DELETE_FROM_CART' , payload:item})
   localStorage.setItem('cartItems' , JSON.stringify(getState().cartReducer.cartItems))

}
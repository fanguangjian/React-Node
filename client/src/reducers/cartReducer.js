/*
 * @Author: your name
 * @Date: 2021-07-25 21:14:33
 * @LastEditTime: 2021-07-25 21:16:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mern-cloudmel/client/src/reducers/cartReducer.js
 */


export const cartReducer=(state={cartItems : []} , action)=>{

    switch(action.type)
    {
        case 'ADD_TO_CART' :        
        const alreadyexist = state.cartItems.find(item => item._id == action.payload._id)
        if(alreadyexist)
        {
            return {
                ...state ,
                cartItems : state.cartItems.map((item) => item._id == action.payload._id ? action.payload : item)
            }
        }
        else{
            return {
                ...state ,
                cartItems : [...state.cartItems , action.payload] 
         }
        }
        case 'DELETE_FROM_CART' : return{
              ...state , 
              cartItems : state.cartItems.filter(item=> {return item._id !==action.payload._id})
        }
        default : return state
    }


}
/*
 * @Author: G.F
 * @Date: 2021-07-27 23:08:55
 * @LastEditTime: 2021-07-27 23:10:16
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /React-Node/client/src/reducers/orderReducer.js
 */


export const placeOrderReducer =(state={} , action)=>{

    switch(action.type)
    {
        case 'PLACE_ORDER_REQUEST' : return{
            ...state ,
            loading : true
        }
        case 'PLACE_ORDER_SUCCESS' : return{
            ...state ,
            loading : false,
            success : true
     }
     case 'PLACE_ORDER_FAILED' : return{
            ...state ,
            loading : false,
            error : true
     }
     default : return{state}
    }

}
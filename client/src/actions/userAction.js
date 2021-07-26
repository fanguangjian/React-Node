/*
 * @Author: your name
 * @Date: 2021-07-26 20:18:37
 * @LastEditTime: 2021-07-26 23:02:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mern-cloudmel/client/src/actions/userAction.js
 */
import axios from "axios";

export const registerNewUser=(user)=>dispatch=>{
    dispatch({type: 'USER_REGISTER_REQUEST'})
    axios
        .post('/api/user/register', user)
        .then(res=>{
            dispatch({type:'USER_REGISTER_SUCCESS'})
            console.log(res);
        })
        .catch(err=>{
            dispatch({type:'USER_REGISTER_FAILED'})
            console.log(err);
        })
}

export const loginUser=(user)=>dispatch=>{
   dispatch({type:'USER_LOGIN_REQUEST'})
   axios
     .post("/api/user/login" , user)
     .then(res => {
        dispatch({type:'USER_LOGIN_SUCCESS'}) 
        localStorage.setItem('currentUser' , JSON.stringify(res.data)) 
        window.location.href='/' 
     })
     .catch(err => {
        dispatch({type:'USER_LOGIN_FAILED' , payload : err})
        console.log(err); 
     });
}


export const logoutUser = ()=>dispatch=>{
    localStorage.removeItem('currentUser')
    localStorage.removeItem('cartItems')
    dispatch({type : 'USER_LOGOUT'})
    window.location.href='/login'
}
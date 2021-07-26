/*
 * @Author: your name
 * @Date: 2021-07-25 14:49:54
 * @LastEditTime: 2021-07-26 22:25:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mern-cloudmel/client/src/store.js
 */

import { getAllProductsReducer, getProductByIdReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer"; 
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from "redux";

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loginReducer, registerNewUserReducer } from "./reducers/userReducer";

const finalReducer = combineReducers({
    getAllProductsReducer: getAllProductsReducer,
    getProductByIdReducer: getProductByIdReducer,
    cartReducer: cartReducer,
    registerNewUserReducer: registerNewUserReducer,
    loginReducer: loginReducer,

})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : [];


const initialState = {
    cartReducer : {cartItems : cartItems},
    loginReducer : {currentUser : currentUser}
}


/**
 * @description:  copy from ; https://www.npmjs.com/package/redux-devtools-extension
 */

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(
    finalReducer,
    initialState, // store cartItem
    // applyMiddleware(thunk)
    composeEnhancers(
        applyMiddleware(thunk)
        // other store enhancers if any
    )
)

export default store
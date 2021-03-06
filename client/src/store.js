/*
 * @Author: your name
 * @Date: 2021-07-25 14:49:54
 * @LastEditTime: 2021-08-04 22:53:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /React-Node/client/src/store.js
 */

import { getAllProductsReducer, getProductByIdReducer, addProductReviewReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer"; 
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from "redux";

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loginReducer, registerNewUserReducer } from "./reducers/userReducer";
import { placeOrderReducer,  getOrdersByUserIdReducer,  getOrderByIdReducer } from "./reducers/orderReducer";

const finalReducer = combineReducers({
    getAllProductsReducer: getAllProductsReducer,
    getProductByIdReducer: getProductByIdReducer,
    cartReducer: cartReducer,
    registerNewUserReducer: registerNewUserReducer,
    loginReducer: loginReducer,
    placeOrderReducer: placeOrderReducer,
    getProductByIdReducer : getProductByIdReducer,
    getOrdersByUserIdReducer : getOrdersByUserIdReducer,
    getOrderByIdReducer : getOrderByIdReducer,
    addProductReviewReducer: addProductReviewReducer,

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
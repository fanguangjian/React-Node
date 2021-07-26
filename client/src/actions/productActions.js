/*
 * @Author: your name
 * @Date: 2021-07-25 14:18:03
 * @LastEditTime: 2021-07-25 18:30:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mern-cloudmel/client/src/actions/productActions.js
 */

import axios from "axios";

export const getAllProducts = () => dispatch=> {
    dispatch({type: 'GET_PRODUCTS_REQUEST'})
    axios.get('./api/products/getAllProducts')
      .then( res => {
        console.log(res);
        dispatch({type: 'GET_PRODUCTS_SUCCESS', payload: res.data.data.data});
      }).catch(err =>{
        console.log(err);
        dispatch({type: 'GET_PRODUCTS_FAILED', payload: err});
      })
}

export const getProductById = (productId) => (dispatch) => {
  dispatch({ type: "GET_PRODUCTBYID_REQUEST" });
  axios.post("/api/products/getProductbyId", { productId })
    .then((res) => {
      console.log(res);
      dispatch({ type: "GET_PRODUCTBYID_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_PRODUCTBYID_FAILED", payload: err });
    });
};
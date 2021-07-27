/*
 * @Author: your name
 * @Date: 2021-07-25 14:18:03
 * @LastEditTime: 2021-07-27 21:42:39
 * @LastEditors: Please set LastEditors
 * @Description: Dispatch action
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

export const filterProducts=(searchKey , sortKey , category)=>dispatch=>{
  let filteredproducts ;
  dispatch({type:'GET_PRODUCTS_REQUEST'})
  axios.get('/api/products/getAllProducts').then(res=>{
      const resData =  res.data.data.data;
      console.log(resData );
      filteredproducts = resData      
      if(searchKey){
           filteredproducts = resData.filter(product => {return product.name.toLowerCase().includes(searchKey)})
      }
      if(sortKey !=='popular'){
          if(sortKey=='htl'){
              filteredproducts = resData.sort((a,b)=>{                 
                  return -a.price + b.price
              })
          }else{
              filteredproducts = resData.sort((a,b)=>{                 
                  return a.price - b.price
              })
          }
      }
      if(category!=='all'){
          filteredproducts = resData.filter(product =>{return product.category.toLowerCase().includes(category)})
      }
      dispatch({type:'GET_PRODUCTS_SUCCESS' , payload : filteredproducts})
  }).catch(err=>{
      dispatch({type:'GET_PRODUCTS_FAILED', payload: err})
  })


}
/*
 * @Author: your name
 * @Date: 2021-07-25 14:18:03
 * @LastEditTime: 2021-08-04 22:41:59
 * @LastEditors: your name
 * @Description: Dispatch action
 * @FilePath: /React-Node/client/src/actions/productActions.js
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

export const addProductReview = (review , productid)=>(dispatch , getState)=>{    
  dispatch({type:'ADD_PRODUCT_REVIEW_REQUEST'})
  const currentUser = getState().loginReducer.currentUser
  axios.post('/api/products/addReview' , {review , productid , currentUser}).then(res=>{
    console.log(res);
    dispatch({type:'ADD_PRODUCT_REVIEW_SUCCESS'})
    alert('Your review submitted successfully')
    window.location.reload()

  }).catch(err=>{
    dispatch({type:'ADD_PRODUCT_REVIEW_FAILED'})
  })
}
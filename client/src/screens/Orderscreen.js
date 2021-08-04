/*
 * @Author: G.F
 * @Date: 2021-07-28 22:07:47
 * @LastEditTime: 2021-08-01 14:46:49
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /React-Node/client/src/screens/Orderscreen.js
 */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersByUserId } from "../actions/orderAction";
import Loader from "../components/Loader";
import Error from '../components/Error'
import { Link } from "react-router-dom";
import { Money, Date } from "react-format"

export default function Orderscreen() {

  const orderstate=useSelector(state=>state.getOrdersByUserIdReducer)
  const {orders , error , loading} = orderstate  
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      dispatch(getOrdersByUserId());
    } else {
      window.location.href = "/login";
    }
  }, [dispatch]);

  const [btnColor, setBtnColor] = useState(false);

  const changeColorHandler = () => {
    setBtnColor(!btnColor);
  }


    return (
        <div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <h2>MY ORDERS</h2>
            <button onClick={changeColorHandler} style={{ backgroundColor: btnColor ? 'red' : 'green'}}>按钮1</button>
             <button onClick={changeColorHandler}  style={{ backgroundColor: !btnColor ? 'red' : 'green'}}>按钮2</button>
  
            <table className="table table-striped table-responsive-sm">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Transaction ID</th>
                  <th>Status</th>
                </tr>
              </thead> 
  
              <tbody>  
                    {loading && (<Loader/>)}
                    {orders && (orders.map(order=>{
                      return <tr onClick={()=>{window.location=`/orderInfo/${order._id}`}}>
                        <td>{order._id}</td>
                        <td><Money>{order.orderAmount}</Money> </td>
                        <td> <Date>{order.createdAt.substring(0,10)}</Date> </td>
                        <td>{order.transactionId}</td>
                        <td>{order.isDelivered ? (<li>Delivered</li>) : (<li>Order Placed</li>)}</td>
                        </tr>
                     
                    }))}
  
                    {error && (<Error error='something went wrong'/>)}
  
              </tbody>
              
            </table>
          </div>
        </div>
      </div>
    )
}

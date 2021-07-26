/*
 * @Author: your name
 * @Date: 2021-07-24 10:03:32
 * @LastEditTime: 2021-07-26 23:55:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /client/src/components/Navbar.js
 */
import React from "react";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/userAction";

export default function Navbar() {
  const cartReducer = useSelector(state => state.cartReducer);
  const {cartItems}  = cartReducer;
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const dispatch = useDispatch();
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="/profile">Profile</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="/orders">Orders</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3"  onClick={()=>{dispatch(logoutUser())}}>  <IconFont type="icon-tuichu" />Logout</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" href="/">
          Mern CloudMel
        </a>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav" style={{"margin-left":"auto"}}> 
            {currentUser ? (
                <Dropdown overlay={menu} trigger={['click']} >
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{'margin-right':"20px", 'top': '10px', 'position': 'relative'}}>
                    <span >  {currentUser.name}</span>
                  <DownOutlined />
                  </a>
              </Dropdown>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}
            <li className="nav-item">
              <a
                className="nav-link"
                href="/cart"
              >
               <i class="fas fa-shopping-cart"></i>{cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav> 

    </div>
  );
}

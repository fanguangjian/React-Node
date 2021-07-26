/*
 * @Author: your name
 * @Date: 2021-07-26 21:08:53
 * @LastEditTime: 2021-07-26 21:08:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mern-cloudmel/client/src/components/Loader.js
 */
import React from "react";

export default function Loader() {
  return (
    <div className='mt-5'>
      <div className="spinner-border mt-5" role="status" style={{width:'100px' , height:'100px'}}>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
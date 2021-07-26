/*
 * @Author: your name
 * @Date: 2021-07-26 21:10:20
 * @LastEditTime: 2021-07-26 21:10:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mern-cloudmel/client/src/components/Success.js
 */
import React from "react";

export default function Success({ success }) {
  return (
    <div>
      <div className="alert alert-success" role="alert">
        {success}
      </div>
    </div>
  );
}
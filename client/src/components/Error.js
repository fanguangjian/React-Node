/*
 * @Author: your name
 * @Date: 2021-07-26 21:09:17
 * @LastEditTime: 2021-07-26 21:09:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mern-cloudmel/client/src/components/Error.js
 */
import React from "react";

export default function Error({ error }) {
  return (
    <div>
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    </div>
  );
}
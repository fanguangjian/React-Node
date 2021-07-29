/*
 * @Author: G.F
 * @Date: 2021-07-29 23:16:14
 * @LastEditTime: 2021-07-30 00:07:48
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /React-Node/conf/db.js
 */
const env = process.env.NODE_ENV  //环境参数
console.log(env);

//配置
let REDIS_CONF
//开发环境
if (env === "dev") {  
    REDIS_CONF = {
        port:6379,
        host:'127.0.0.1'
    }
}
//生产环境
if (env === "production") {
    REDIS_CONF = {
        port:6379,
        host:'127.0.0.1'
    }
}

module.exports = {
    REDIS_CONF
}
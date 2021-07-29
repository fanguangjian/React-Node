/*
 * @Author: G.F
 * @Date: 2021-07-29 23:18:14
 * @LastEditTime: 2021-07-29 23:18:30
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /React-Node/db/redis.js
 */
const redis = require('redis')
const { REDIS_CONF } = require('../conf/db.js')

const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)

redisClient.on('error', err => {
    console.error(err)
})

module.exports = redisClient
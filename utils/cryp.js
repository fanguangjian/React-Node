/*
 * @Author: G.F
 * @Date: 2021-07-29 19:57:22
 * @LastEditTime: 2021-07-29 19:58:08
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /React-Node/utils/cryp.js
 */
const crypto = require('crypto')

// 密匙
const SECRET_KEY = 'WJiol_8776#'

// md5 加密
function md5(content) {
    let md5 = crypto.createHash('md5')
    return md5.update(content).digest('hex')
}

// 加密函数
function genPassword(password) {
    const str = `password=${password}&key=${SECRET_KEY}`
    return md5(str)
}

module.exports = {
    genPassword
}
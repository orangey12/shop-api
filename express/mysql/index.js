/*
 * @Author: yanmin 
 * @Date: 2018-12-08 21:03:12 
 * @Last Modified by: yanmin
 * @Last Modified time: 2018-12-08 21:03:50
 */

var mysql = require("mysql");

// 基本配置信息
var config={
    host:"localhost",
    port:"3306",
    user:"root",
    password:"1214.*",
    database:"week2"
}

// 创建连接池
var connection = mysql.createPool(config);
/**
 * 
 * @param {* string } sql sql语句
 * @param {* array } data 参数
 */
function query(sql,data){
    return new Promise((resolve,reject)=>{
        connection.getConnection((err,connect)=>{
            connect.query(sql,data,(sqlerr,rows)=>{
                if(sqlerr){
                    console.log(sqlerr)
                    reject(sqlerr);
                    return;
                }
                resolve(rows);
                // 释放连接
                connect.release();
            })
        })
    })
}

//抛出模块

module.exports = {
    query
}



// var sql = require("./sql.js")
// query(sql["SELECT"],[0,4])
// .then((data)=>{
//   console.log(data)
// })
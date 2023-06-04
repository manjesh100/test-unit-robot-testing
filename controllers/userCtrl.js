const { rejects } = require("assert");
const { promises } = require("dns");
const express = require("express");
const { resolve } = require("path");


const userList =(req, res)=>{     
       let data = {
                    "list":"hello"
                   }
    return res.status(200).json({data, statusText:'success'}); 
}
const newsData = ()=>{
   return new Promise((resolve, reject)=>{
    resolve({opt:9000})
   })
   
}


module.exports = {
    userList,
    newsData
}  
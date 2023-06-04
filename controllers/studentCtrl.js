const express = require('express');
const { resolve } = require('path');

const axios = require('axios');

class student
{
    constructor()
    {

    }

    home(type)
    {
     let data= this.getInfor(type, 1)
    // this.getInfor(type, 189)
     
      {
        return data + 5;

      } 

    }
    getInfor(type,status)
    {
        return 10;
    }

    userId()
    {
       return 12;
    }

      dbData()
      {
           return new Promise((resolve, reject)=>{
                      setTimeout(()=> resolve(10), 1000);
           })
      }

      thirdPartApi(){
        return new Promise((resolve, reject)=>{
            axios.get('http://restapi.adequateshop.com//api/Tourist')
            .then(response=>{
                resolve(response.data)
            })

            .catch(error=>{

                   reject(error);
            })



        })

          


      }



    
    

}

module.exports = student;



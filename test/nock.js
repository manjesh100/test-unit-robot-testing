 
const chai = require('chai');
const expect = chai.expect;
const student = require('../controllers/studentCtrl');
let studentObject = new student();

 const nock = require("nock");
const { error } = require('console');
 
 


describe('-----------------------nock test result-------------------------', function(){ 
   

    // it('api test  calling data', function(done){
    //     this.timeout(0);
    //      let obj = {status:'ok', statusCode:200, data:[]}         
    //      const aphint = nock('http://restapi.adequateshop.com/api')
    //      .get('/Tourist')
    //      .reply(200, obj);
    //      studentObject.thirdPartApi()
    //      .then(function(record){          
    //         expect(record).to.be.equal(obj);
    //        done();
    //      })
    //      .catch(error)
    //      {
    //         return error; 
    //      }
    // })

 
 


})





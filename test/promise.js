const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const student = require('../controllers/studentCtrl');
let studentObject = new student();

const userCtrl = require('../controllers/userCtrl');
  // let userCtrlObject =new userCtrl();

const chaipromise = require('chai-as-promised');
chai.use(chaipromise);
 


describe('-----------------------promise-------------------------', function(){

    it('test user function', function(){
        expect(studentObject.userId()).to.be.equal(12);
    })

     

    it('check normal value function', function(done){

        studentObject.dbData().then(function(result){
               expect(result).to.be.equal(10)
               done();
        })
                   
    }) 

    it('check chai promised value function', function()
    {
       return expect(studentObject.dbData()).to.eventually.equal(10)                   
    }) 


    it('OTP function', function()
    {
        this.timeout(0);
       return expect(userCtrl.newsData()).to.eventually.have.deep.property('opt');                   
    }) 



})





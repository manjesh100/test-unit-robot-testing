const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const student = require('../controllers/studentCtrl');
let studentObject = new student();



describe('-----------------------spa-------------------------', function(){

    it('test user function', function(){
        expect(studentObject.userId()).to.be.equal(12);
    })

    // it('function count', function(){
    //       var spaObj = sinon.spy(studentObject, 'getInfor')
    //       studentObject.home(5);
    //      expect(spaObj.calledOnce).to.be.true; 
    //     // expect(spaObj.calledTwice).to.be.true;              
    // })

    it('function argument check', function(){
        var spaObj = sinon.spy(studentObject, 'getInfor')
        studentObject.home(12);
       expect(spaObj.calledWith(12,1)).to.be.true; 
                   
       }) 



})





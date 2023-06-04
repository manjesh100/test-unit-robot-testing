const chai = require('chai');
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;

let chaiHttp = require('chai-http');
chai.use(chaiHttp)

const Server = require('../app');
const { response } = require('express');


describe('Task Api', function(){

   it('get user data', function(done){
     chai.request(Server)
     .get('/user')
     .end((err, response)=>{
        expect(response.status).to.be.equal(200);
        expect(response.body).to.have.all.keys('data', 'statusText');
        done();
     })


   })


})
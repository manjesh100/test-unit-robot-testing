const chai = require('chai');
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;



//##@############ ASSERT  ###################################

describe('Aspect check IT', function(){

     let userName= 'code improve';   
     let mylist ={
                        item:[{
                            id:1,
                            name:'demo',                
                        }],
                        title:'user list',
            } 


    it("check string data", function(){
        assert.typeOf(userName, 'string');
    })

    it("check string equal", function(){
        assert.equal(userName, 'code improve');
    })

    it("length match match  ", function(){
      assert.lengthOf(mylist.item,1);

    })
})
    //############################# should ###############################


    describe('Aspect check IT', function(){
        let userName="process";   
        let mylist ={
                    item:[{
                        id:1,
                        name:'demo'              
                    }],
                    title:'user list',
                    } 

        it('check string', function(){
            userName.should.be.a('string');
            
        })

        it('check equal', function(){
            userName.should.equal('process');
            
        })

        it('length check', function(){
            mylist.should.have.property('item').with.lengthOf(1);
            
        }) 

    })


    //################################################# EXPECT #################################################################

    describe("check expect", function(){

        let userName="process";   
        let mylist ={
                    item:[{
                        id:1,
                        name:'demo'              
                    }],
                    title:'user list',
                     adress:{
                        country:'india',
                        phoneNo:['9654009214','9654009000']
                    }            
                }
        it('string match', function(){
          expect(userName).to.be.a('string');
        }) 
        
        
        it('equal match String', function(){
            expect(userName).to.equal('process');
          }) 


          it('EXPECT length match', function(){
            expect(userName).to.lengthOf(7);
          }) 

          it('object length', function(){
            expect(mylist).to.have.property('item').with.length(1);
          }) 

          
          it('api object math', function(){
            expect(mylist).to.have.all.keys('item','title','adress')
          }) 



          it('phone no', function(){
            expect(mylist).to.have.nested.property('adress.phoneNo[1]')
          }) 
                
          
          it('country check', function(){
            expect(mylist).to.have.nested.include({'adress.country':'india'})
          }) 







    })

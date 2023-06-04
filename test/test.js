var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(3), 2);
    });
  });
});


describe('my first test live case', function(){

    it('value check', function(){
        assert.equal([1, 2, 3].indexOf(3), 2);
    })

    it('value check 2', function(){
        assert.equal([1, 2, 3].indexOf(2), 1);
    })

})
var minClockAngle = require('../src/minClockAngle.js');
var assert = require('chai').assert;

describe('Minimum 24 hour clock angle', function(){
  describe('getMinAngle', function(){
    it('should exist', function(){
      assert.doesNotThrow(function(){
        minClockAngle.getMinAngle("01:23");
      });
    });
    it('should return 90 if given 6:00 as time string', function(){
      var result = minClockAngle.getMinAngle('6:00');
      var expected = 90;
      assert.equal(result, expected);
    });
    it('should return 7.75 if given 6:17 as time string', function(){
      var result = minClockAngle.getMinAngle('6:17');
      var expected = 7.75;
      assert.equal(result, expected);
    });
    it('should return 90 if given 18:00 as time string', function(){
      var result = minClockAngle.getMinAngle('18:00');
      var expected = 90;
      assert.equal(result, expected);
    });
    it('should return 172.25 if given 18:17 as time string', function(){
      var result = minClockAngle.getMinAngle('18:17');
      var expected = 172.25;
      assert.equal(result, expected);
    });
  });
});

var spiral = require('../src/spiralTraversal');
var assert = require('chai').assert;
var fixtures = require('./fixtures.js')

describe('Spiral Traversal', function(){
  describe('traverseClockwise()', function(){
    it('should exist', function(){
      assert.doesNotThrow(function(){
        spiral.traverseClockwise([[]]);
      });
    });
    it('should return an empty array if given an empty matrix', function(){
      var result = spiral.traverseClockwise(fixtures.traverseClockwise.emptyMatrix.inputValue);
      var expected = fixtures.traverseClockwise.emptyMatrix.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with 1 element if given a 1x1 matrix', function(){
      var result = spiral.traverseClockwise(fixtures.traverseClockwise.oneByOne.inputValue);
      var expected = fixtures.traverseClockwise.oneByOne.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with correct order and 3 elements if given a 1x3 matrix', function(){
      var result = spiral.traverseClockwise(fixtures.traverseClockwise.oneRow.inputValue);
      var expected = fixtures.traverseClockwise.oneRow.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with correct order and 3 elements if given a 3x1 matrix', function(){
      var result = spiral.traverseClockwise(fixtures.traverseClockwise.oneColumn.inputValue);
      var expected = fixtures.traverseClockwise.oneColumn.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with correct order and 4 elements if given a 2x2 matrix', function(){
      var result = spiral.traverseClockwise(fixtures.traverseClockwise.twoByTwo.inputValue);
      var expected = fixtures.traverseClockwise.twoByTwo.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with correct order and 9 elements if given a 3x3 matrix', function(){
      var result = spiral.traverseClockwise(fixtures.traverseClockwise.threeByThree.inputValue);
      var expected = fixtures.traverseClockwise.threeByThree.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with correct order and 9 elements if given a 3x4 matrix', function(){
      var result = spiral.traverseClockwise(fixtures.traverseClockwise.threeByFour.inputValue);
      var expected = fixtures.traverseClockwise.threeByFour.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with correct order and 9 elements if given a 4x4 matrix', function(){
      var result = spiral.traverseClockwise(fixtures.traverseClockwise.fourByFour.inputValue);
      var expected = fixtures.traverseClockwise.fourByFour.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with correct order and 9 elements if given a 4x5 matrix', function(){
      var result = spiral.traverseClockwise(fixtures.traverseClockwise.fourByFive.inputValue);
      var expected = fixtures.traverseClockwise.fourByFive.outputExpected;
      assert.deepEqual(result, expected);
    });
  });

  describe('traverseCounterClockwise()', function(){
    it('should exist', function(){
      assert.doesNotThrow(function(){
        spiral.traverseCounterClockwise([[]]);
      });
    });
    it('should return an empty array if given an empty matrix', function(){
      var result = spiral.traverseCounterClockwise(fixtures.traverseCounterClockwise.emptyMatrix.inputValue);
      var expected = fixtures.traverseCounterClockwise.emptyMatrix.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with 1 element if given a 1x1 matrix', function(){
      var result = spiral.traverseCounterClockwise(fixtures.traverseCounterClockwise.oneByOne.inputValue);
      var expected = fixtures.traverseCounterClockwise.oneByOne.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with correct order and 3 elements if given a 1x3 matrix', function(){
      var result = spiral.traverseCounterClockwise(fixtures.traverseCounterClockwise.oneRow.inputValue);
      var expected = fixtures.traverseCounterClockwise.oneRow.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with correct order and 3 elements if given a 3x1 matrix', function(){
      var result = spiral.traverseCounterClockwise(fixtures.traverseCounterClockwise.oneColumn.inputValue);
      var expected = fixtures.traverseCounterClockwise.oneColumn.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with correct order and 4 elements if given a 2x2 matrix', function(){
      var result = spiral.traverseCounterClockwise(fixtures.traverseCounterClockwise.twoByTwo.inputValue);
      var expected = fixtures.traverseCounterClockwise.twoByTwo.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with correct order and 9 elements if given a 3x3 matrix', function(){
      var result = spiral.traverseCounterClockwise(fixtures.traverseCounterClockwise.threeByThree.inputValue);
      var expected = fixtures.traverseCounterClockwise.threeByThree.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with correct order and 9 elements if given a 3x4 matrix', function(){
      var result = spiral.traverseCounterClockwise(fixtures.traverseCounterClockwise.threeByFour.inputValue);
      var expected = fixtures.traverseCounterClockwise.threeByFour.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with correct order and 9 elements if given a 4x4 matrix', function(){
      var result = spiral.traverseCounterClockwise(fixtures.traverseCounterClockwise.fourByFour.inputValue);
      var expected = fixtures.traverseCounterClockwise.fourByFour.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with correct order and 9 elements if given a 4x5 matrix', function(){
      var result = spiral.traverseCounterClockwise(fixtures.traverseCounterClockwise.fourByFive.inputValue);
      var expected = fixtures.traverseCounterClockwise.fourByFive.outputExpected;
      assert.deepEqual(result, expected);
    });
  });
});

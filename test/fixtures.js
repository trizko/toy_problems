var fixtures = {};

//fixtures for traverseClockwise tests
fixtures.traverseClockwise = {};
fixtures.traverseClockwise.emptyMatrix = {
  inputValue: [[]],
  outputExpected: []
};
fixtures.traverseClockwise.oneByOne = {
  inputValue: [[1]],
  outputExpected: [1]
};
fixtures.traverseClockwise.oneRow = {
  inputValue: [[1,2,3]],
  outputExpected: [1,2,3]
};
fixtures.traverseClockwise.oneColumn = {
  inputValue: [[1],[2],[3]],
  outputExpected: [1,2,3]
};
fixtures.traverseClockwise.twoByTwo = {
  inputValue: [
    [1,2],
    [3,4]
  ],
  outputExpected: [1,2,4,3]
};
fixtures.traverseClockwise.threeByThree = {
  inputValue: [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ],
  outputExpected: [1,2,3,6,9,8,7,4,5]
};
fixtures.traverseClockwise.threeByFour = {
  inputValue: [
    [1  ,2  ,3  ,4],
    [5  ,6  ,7  ,8],
    [9  ,10 ,11 ,12]
  ],
  outputExpected: [1,2,3,4,8,12,11,10,9,5,6,7]
};
fixtures.traverseClockwise.fourByFour = {
  inputValue: [
    [1  ,2  ,3  ,4],
    [5  ,6  ,7  ,8],
    [9  ,10 ,11 ,12],
    [13 ,14 ,15 ,16]
  ],
  outputExpected: [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]
};
fixtures.traverseClockwise.fourByFive = {
  inputValue: [
    [1  ,2  ,3  ,4  ,5],
    [6  ,7  ,8  ,9  ,10],
    [11 ,12 ,13 ,14 ,15],
    [16 ,17 ,18 ,19 ,20],
  ],
  outputExpected: [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]
};

//fixtures for traverseCounterClockwise tests
fixtures.traverseCounterClockwise = {};
fixtures.traverseCounterClockwise.emptyMatrix = {
  inputValue: [[]],
  outputExpected: []
};
fixtures.traverseCounterClockwise.oneByOne = {
  inputValue: [[1]],
  outputExpected: [1]
};
fixtures.traverseCounterClockwise.oneRow = {
  inputValue: [[1,2,3]],
  outputExpected: [1,2,3]
};
fixtures.traverseCounterClockwise.oneColumn = {
  inputValue: [[1],[2],[3]],
  outputExpected: [1,2,3]
};
fixtures.traverseCounterClockwise.twoByTwo = {
  inputValue: [
    [1,2],
    [3,4]
  ],
  outputExpected: [1,3,4,2]
};
fixtures.traverseCounterClockwise.threeByThree = {
  inputValue: [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ],
  outputExpected: [1,4,7,8,9,6,3,2,5]
};
fixtures.traverseCounterClockwise.threeByFour = {
  inputValue: [
    [1  ,2  ,3  ,4],
    [5  ,6  ,7  ,8],
    [9  ,10 ,11 ,12]
  ],
  outputExpected: [1,5,9,10,11,12,8,4,3,2,6,7]
};
fixtures.traverseCounterClockwise.fourByFour = {
  inputValue: [
    [1  ,2  ,3  ,4],
    [5  ,6  ,7  ,8],
    [9  ,10 ,11 ,12],
    [13 ,14 ,15 ,16]
  ],
  outputExpected: [1,5,9,13,14,15,16,12,8,4,3,2,6,10,11,7]
};
fixtures.traverseCounterClockwise.fourByFive = {
  inputValue: [
    [1  ,2  ,3  ,4  ,5],
    [6  ,7  ,8  ,9  ,10],
    [11 ,12 ,13 ,14 ,15],
    [16 ,17 ,18 ,19 ,20],
  ],
  outputExpected: [1,6,11,16,17,18,19,20,15,10,5,4,3,2,7,12,13,14,9,8]
};


module.exports = fixtures;

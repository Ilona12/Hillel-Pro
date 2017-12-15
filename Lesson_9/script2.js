console.log('This\'s task 2:');
var sum = function (a, b) {
  return a + b
};

var measuredExecutionTime = function (targetFunction) {
  return function () {
    var label = 'execution time';
    console.time(label);
    var result = targetFunction.apply(this, arguments);
    console.timeEnd(label);
    return result;
  }
};

var math = {
  measuredSum: measuredExecutionTime(sum)
};

console.log(math.measuredSum(10, 2));
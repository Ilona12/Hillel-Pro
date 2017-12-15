var array = prompt('Enter any number of digits separated by commas').split(',');
var sumEven = howmanyOdd = howmanyEven = 0;
var multipOdd = 1;
var min = max = array[0];

for (var i = array.length - 1; i >= 0; i--) {
  array[i] = parseInt(array[i], 10);
  if (isNaN(array[i])) {
    array.splice(i, 1);
    continue;
  }
}
console.log(array);

for (var i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
  if (array[i] < min) {
    min = array[i];
  }
  if (array[i]%2 == 0) {
    sumEven += array[i];
    howmanyEven++;
  }
  if (array[i]%2 !== 0) {
    multipOdd *= array[i];
    howmanyOdd++;
  }
}

console.log('The sum of even elements:' +sumEven);
console.log('The number of even elements:' + howmanyEven);
console.log('The number of odd elements:' + howmanyOdd);
console.log('The product of odd elements:' + multipOdd);
console.log('The largest element:' + max);
console.log('the smallest element:' + min);

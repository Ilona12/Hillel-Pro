var x = Math.floor(Math.random()*10+1);
var y = Math.floor(Math.random()*10+1);
console.log(x, y);

var z = +prompt('Enter any digit from 0 to 10');
alert('The first random number is: ' + x);
alert('The second random number is: ' + y);

if (isNaN(z)) {
  alert('Unfortunately, your entered value is not a number. Try again!');
}

if ( (x<=y && z>=x && z<=y) || (x>=y && z<=x && z>=y) ) {
  alert('Congratulations! You are in the range!');
} else {
  alert('Unfortunately, you didn`t fall into the range');
}


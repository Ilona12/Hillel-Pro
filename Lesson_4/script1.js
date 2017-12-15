var x = Math.floor(Math.random()*10+1);
var y = Math.floor(Math.random()*10+1);
console.log(x, y);
var i = 1;
var z = +prompt('The attempt № 1: enter any digit from 0 to 10');
while (i <= 3) {
  if (isNaN(z)) {
    alert('Unfortunately, your entered value is not a number. Try again!');
  }
  if ((x <= y && z >= x && z <= y) || (x >= y && z <= x && z >= y)) {
    alert('Congratulations! You are in the range!');
    break;
  }
  else {
    i++;
    if (i == 4) {
      alert('Unfortunately, you didn`t fall into the range. These were numbers: ' + x + ' and ' + y + '.');
      break;
    }
    alert('You are not guessing: it\'s not '+ z + '. The attempt № ' + i+ '');
    var z = +prompt('Enter any digit from 0 to 10 else');
  }
}
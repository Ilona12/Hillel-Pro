confirm('This is the SECOND TASK')
var x = +prompt('Enter the first digit from 0 to 7');
var y = +prompt('Enter the second digit from 0 to 7');
if (isNaN(x, y)) {
  alert('Unfortunately, your entered values are not a number. Try again!');
}
if (x >= 7 || y >= 7) {
  alert('Unfortunately, you didn`t fall into the range. Try again!')
}

if (x < y) {
  for (var i = x; i <= y; i++) {
    switch (i) {
      case 1:
        alert(i + ':Monday');
        console.log(i + ':Monday');
        break;
      case 2:
        alert(i + ':Tuesday');
        console.log(i + ':Tuesday');
        break;
      case 3:
        alert(i + ':Wednesday');
        console.log(i + ':Wednesday');
        break;
      case 4:
        alert(i + ':Thursday');
        console.log(i + ':Thursday');
        break;
      case 5:
        alert(i + ':Friday');
        console.log(i + ':Friday');
        break;
      case 6:
        alert(i + ':Saturday');
        console.log(i + ':Saturday');
        break;
      case 7:
        alert(i + ':Sunday');
        console.log(i + ':Sunday');
        break;
    }
  }
}

if (x > y) {
  for (var i = x; i >= y; i--) {
    switch (i) {
      case 1:
        alert(i + ':Monday');
        console.log(i + ':Monday');
        break;
      case 2:
        alert(i + ':Tuesday');
        console.log(i + ':Tuesday');
        break;
      case 3:
        alert(i + ':Wednesday');
        console.log(i + ':Wednesday');
        break;
      case 4:
        alert(i + ':Thursday');
        console.log(i + ':Thursday');
        break;
      case 5:
        alert(i + ':Friday');
        console.log(i + ':Friday');
        break;
      case 6:
        alert(i + ':Saturday');
        console.log(i + ':Saturday');
        break;
      case 7:
        alert(i + ':Sunday');
        console.log(i + ':Sunday');
        break;
    }
  }
}
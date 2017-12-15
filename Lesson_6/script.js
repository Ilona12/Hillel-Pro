var matrix = [];
var cols = rows = 10;
var temp;
var initialMatrix = 'The initial array:' + '\n';
var obtainedMatrix = 'The obtained array:' + '\n';

for (var i = 0; i < cols; i++){
  matrix[i] = [0];
  for (var j=0; j < rows; j++){
    matrix[i][j] = (Math.round(Math.random()*100));
  }
}

for (var j = 0; j < matrix[0].length; j++){
  for (var i = 0; i < matrix.length; i++){
    initialMatrix += matrix[i][j] + '\t';
  }
  initialMatrix += '\n';
}
console.log(initialMatrix);

var attempts = 5;
var correctData = false;

while (attempts-- && !correctData) {
  var rowA = parseInt(prompt('Enter first row number: ')) - 1;
  var rowB = parseInt(prompt('Enter second row number: ')) - 1;
  var differentRows = rowA !== rowB;
  var inTheRange = rowA >= 0 && rowA < rows - 1 && rowB >= 0 && rowB < rows;
  correctData = differentRows && inTheRange;

  if (!differentRows){
    alert('Enter different numbers! You have ' + attempts + 'attempts.');
  }
  if (!inTheRange){
    alert('The rows with such numbers don\'t exist. Enter numbers from 1 to 10. You have ' + attempts + 'attempts.');
  }
}

for (var i = 0; i < matrix.length && correctData; i++){
  temp = matrix[i][rowA];
  matrix[i][rowA] = matrix[i][rowB];
  matrix[i][rowB] = temp;
}

for (var j = 0; j < matrix[0].length && correctData; j++){
  for (var i = 0; i < matrix.length; i++){
    obtainedMatrix += matrix[i][j] + '\t';
  }
  obtainedMatrix += '\n';
}

if (correctData){
  console.log(obtainedMatrix);
  alert('Press F12 and look at console for result');
} else {
  alert('Your attempts is end. Press OK to reload page');
  window.location.reload();
}


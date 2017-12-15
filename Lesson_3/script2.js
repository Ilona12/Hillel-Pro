confirm('And this is the second task.');
var firstName = prompt("Enter your First Name");
var userCity = prompt("What city are you from?");
var userChoice = prompt('Make your choice: add, replace or cut.');
var str = ('My name is ' + firstName + ' ' + 'and I am from '+ userCity);

if(userChoice === 'add') {
  alert('My name is ' + firstName + ' ' + 'and I am from '+ userCity);
}

if(userChoice === 'replace') {
  var newCity = prompt('Enter another city...', 'New York');
  alert('My name is ' + firstName + ' ' + 'and I am from ' + userCity.replace(userCity, newCity));
}

if(userChoice === 'cut') {
  alert(str.split(' ', 4) );
}

if(userChoice !== 'add' && userChoice !== 'replace' && userChoice !== 'cut') {
  alert('Try again!');
}
console.log(str);
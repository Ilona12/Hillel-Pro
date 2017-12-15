var userA = {
  firstName: 'Ilona',
  surName: 'Parkhomenko',
};

var userB = {
  firstName: 'Artem',
  surName: 'Tkachov'
};

var printName = function () {
  console.log(this.firstName + ' ' + this.surName);
};
var boundPrintName = printName.bind(userA);

console.log(printName.call(userA));
console.log(printName.call(userB));
console.log(boundPrintName.call(userA));
console.log(boundPrintName.call(userB));
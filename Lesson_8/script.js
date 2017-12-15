/*firstName = John, email=example@gmail.com, balance=300; firstName=Test, lastName=Test, email=admin@gmail.com, balance=1000*/

var userInputString = prompt('Enter a string of this type: \n firstName = John, email=example@gmail.com, balance=1000; \n firstName=Test, email=admin@gmail.com, balance=1000;').split(';');
console.log(userInputString);

var userObjectsArray = userInputString.map(function(userString){
   var userObject = {};
   userString.split(',').forEach(function (keyValueString) {
    var keyValueParts = keyValueString.split('=');
    userObject[keyValueParts.shift().trim()] = keyValueParts.shift().trim();
  });
  return userObject;
});
console.log(userObjectsArray);

var groupBy = function (fieldName, usersList) {
  var groupedUsers = {};
  usersList.forEach(function (user) {
    for (key in user) {
      if (key === fieldName) {
        groupedUsers[user[key]].push(user);
      }
    }
    }
  );
  return groupedUsers;
}

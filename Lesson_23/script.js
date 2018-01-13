const setCookies = function (name, value, domian, path) {
  document.cookie = name + '=' + value + '; domian=' + domian + '; path=' + path;
};
setCookies ( 'homework', 'true');

const getCookie = function (name){
  var begin = document.cookie.indexOf(name+'=') + name.length + 1;
  if ( begin == -1 ) {
    return null;
  }
  var end = document.cookie.indexOf('; ',begin);
  if (end == -1 ) {
    end = document.cookie.length;
  }
  return document.cookie.substring(begin,end);
};
console.log(getCookie('homework'));
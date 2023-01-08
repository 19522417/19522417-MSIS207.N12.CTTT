const fs = require('fs');
var jsonData = '{"student":[{"name":"Tai","mssv":"19522151"}]}';

var jsonObj = JSON.parse(jsonData);
console.log(jsonObj);

var jsonContent = JSON.stringify(jsonObj);
console.log(jsonContent);
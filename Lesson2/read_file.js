var fs = require ('fs');

console.log("Going to read file");
var data = fs.readFileSync('example_text.txt')

console.log(data.toString());
console.log("Program Ended!")
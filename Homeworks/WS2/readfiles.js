var fs = require('fs');

console.log('Programm started');
var data = fs.readFileSync('text_file.txt');
var data2 = fs.readFileSync('second_text_file.txt')
console.log(data.toString());
console.log(data2.toString());


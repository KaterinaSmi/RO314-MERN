var fs = require('fs');

const data = "This is the data that will be written toy the file";

fs.writeFile('write.txt', data, function(err){
    if(err) throw err;
    console.log("data written successfully");
})
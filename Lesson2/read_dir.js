var fs = require ('fs');
//read directories

fs.readdir('.', function(err, data){
    if(err) throw err;
    console.log('results of readdir : ');
    console.log(data.toString());
    console.log(data);
});
console.log("Program ended")
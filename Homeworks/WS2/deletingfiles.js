var fs = require('fs');

const fileToDelete = 'combined.txt';

fs.unlink(fileToDelete, (err)=> {
    if(err){
        console.error("Error deleting file", err);
    }else{
        console.log(`${fileToDelete} was deleted successfully`)
    }
});
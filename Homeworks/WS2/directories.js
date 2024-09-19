var fs = require('fs');

//Step 1: Creating a new folder called 'newdata'
fs.mkdir('newdata', {recursive: true}, (err)=> {
    if(err){
        return console.error("Error creating directory")
    }
    console.log("Directory was created successfully")
    //Step2: Writing a file inside newely created directory
    fs.writeFile('newdata/combined.txt', 'File insie newdata',(err)=>{
        if(err){
            return console.error("Error writing file")
        }
        console.log('File "combineReducers.txt" was written successfully inside new data ');
        //Step3: Deleting/removing directory with the data inside
        fs.rm('newdata',{recursive: true, force: true} , (err) => {
            if(err){
                return console.log("Error removing directory", err)
            }else{
                console.log('Directory was removed successfully')
            }
        })
    });
});
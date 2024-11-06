var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send("Listening data from a file")
});

app.get('/add', (req,res)=>{
    res.send('<h1>Lets add some data to the file</h1>')
});

app.get('*',(req,res)=>{
    res.send("Cant find the requested page,", 404)
})


app.listen(3000, ()=>{
    console.log("Exampke is running on port 3000")
})
var fs = require('fs');
require("dotenv").config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
// Serve static files from the public folder
app.use(express.static("./public"));

// Sign-in route
app.post('/signin', (req, res) => {
    let email = req.body.email;
    let pass = req.body.pass;

    console.log("Email: " + email);
    console.log("Password: " + pass);

    if(email == process.env.USERID && pass == process.env.PASSWORD){
        res.redirect('/studentpages');
    }else{
        res.status(200).send("Form submitted with email: " + email + "and password: " +pass)
    }
    res.send("Sign-in details received"); // Respond to the client
});
app.get('/studentpages', (req,res)=>{
    res.status(200).send("SECRET PAGE");
    
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running");
});

const {response, request} = require('express');
const fs = require('fs');
const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());
//static files from public folder
app.use(express.static('./public'))

app.set("view engine", "ejs");


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.post('/signin', (req,res)=>{
    let email = req.body.email;
    let pass = req.body.pass;

    console.log("email: " +email);
    console.log("password: " +pass);

    if(email === process.env.USERID && pass === process.env.PASSWORD){
        res.redirect("studentpages");
    } else{
        res.status(401).send("Invalid credentials");
    }

});

app.get('/blog', (req,res)=>{
    let data = {
        heading: 'Blog Page',
        text: "Thi is the blog page"
    }
    res.render("pages/blog", data);
});
app.get('/shopping',(req,res)=>{
    let data = {
        heading: "Shopping List",
        listItem: ["Milk","Bread",'Cheese']
    }
    res.render("pages/shopping", data)
})
app.get('/studentpages', (req,res)=>{
    res.status(200).send("SECRET PAGE")
});
app.listen(3000, ()=>{
    console.log('Server is running')
})
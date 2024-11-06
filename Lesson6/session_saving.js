const express = require('express');
const session = require("express-session");

const MySQLStore = require("express-mysql-session")(session);
//connection parameters:
const options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'logindemo',
};
//Create new db for the session
const sessionStore = new MySQLStore(options);

const bodyParser = require('body-parser');

const app = express();

app.use(session({
    name:'logindemo',
    resave: true,
    saveUninitialized: true,
    secret: 'secretkey', //to save safely
    cookie: {maxAge: 60 * 1000 * 30}, //30 min session
    store: sessionStore,
}));

//For static pages
app.use(express.static('./'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//New POST-type page request route
app.post('/Log in', (req, res)=>{
    console.log(req.body);
    let email = req.body.email;
    let pass = req.body.pass;
    //if credentials are valid:
    if(email === 'lucky@sci.fi' && pass ==='student'){

        req.session.loggedin = true;
        req.session.username = email;
        console.log(req.session);

        res.redirect("/userpage");
    } else res.redirect('/Log in')
});

//New route to a logged user.
app.get("/userpage", (req,res)=>{
    if(req.session.loggedin == true){
        res.send("Welcome, "+ req.session.username + ". You are now logged in")
    }else res.redirect("/");
});
//if anything else - false ID & password:
app.get("*", (req,res)=>{
    res.send("Cant find the requested page", 404);
});
app.listen(3001, ()=>{
    console.log("App is running")
})

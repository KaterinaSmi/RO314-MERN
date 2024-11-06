const express = require('express');

const session =  rquire('express-session');

//adding mySQL
const MySQLStore = require('express-mysql-session')(session);
//Define params for the db
const options = {
    host:'localhost',
    port: 3306,
    user: "root",
    password: '',
    database: 'logindemo',
};
//Create a new data supply for the session
const sessionStore = new MySQLStore(options);
const bodyParser = require('body-parser');

const app = express();

app.use(
    session({
        name: 'logindemo',
        resave: true,
        saveUnitialize: true,
        secret: "secretkey",
        cookie: {maxAge: 60 * 1000 * 30}, //30 mins
        store: sessionStore,
    })
);
//for static pages
app.use(express.static('./'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

isAuthenticated = () => {
    if(req.session.logedin == true) return next();
        res.redirect('/Log in')
}

app.post("/Log in", (req,res)=>{
    console.log(req.body);
    let email = req.body.email;
    let pass = req.body.pass;

    if(email === 'lucky@sci.fi' && pass === 'student'){
        req.session.loggedin = true;
        req.session.username = email;
        //if all cridentials are valid, redirect to userpage
        res.redirect("/userpage");
    }else res.redirect("Log in")
});

app.get('/userpage', isAuthenticated, (req,res)=>{
    res.sentd("Welcome, " + req.session.username + ". You are now logged in")
});

app.get("/logout", (req,res)=>{
    req.session.destroy();
    res.redirect("/");
});

//New route to enroll users.


app.listen(3001, ()=>{
    console.log("App is running");
})
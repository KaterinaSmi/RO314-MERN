const session =  require('express-session')

const express = require('express');

const bodyParser = require("body-parser");

const app = express();

app.use(
    session({
        name:'logindemo',
        resave: true,
        saveUninitialized: true,
        secret: "secretkey",
        cookie: {maxAge: 60 * 1000 * 30} //60ms * 1000 = 60s * 30 = 30 min
    })
);
//offer static files
app.use(express.static('./'));
//create application/x-www-from-urlencoded parser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

//New POST-type page request route
app.post("/booking", (req,res)=>{
    console.log(req.body)
    const email = req.body.email;
    const pass = req.body.pass;
    
    //if identifiers are right, guitde user to a new route
    if(email == 'lucky@sci.fi' && pass === 'student'){
        //when identifiers are right the session variables are changed to show
        //that the login is lucky and the user name is saved
        req.session.loggedin = true;
        req.session.username = email;

        //Route to where the user will be sent
        res.redirect('/userpage')
    } else res.redirect('/')
});
app.get('/userpage', (req,res)=>{
    //Checks if the info is actually true
    if(req.session.loggedin == true){
        //user name can be found from the session variable
        res.send(
            "Welcome, " +
            req.session.username +
            ". You are now logged in!. You can log out <a href='/logout'>here</a>"
        )
    }
});
app.get('/logout', (req, res)=>{
    req.session.destroy((err)=>{
        console.log("Session info deleted.");
        res.redirect('/');
    })
});

app.get('*', (req,res)=>{
    res.send("Cant find the requested page", 404)
});

app.listen(3001, ()=>{
    console.log("App is running on port 3001")
});
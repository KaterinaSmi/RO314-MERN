const {response, request} = require('express');
const fs = require('fs');
const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
var mysql = require('mysql');
const session = require('express-session')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());
//static files from public folder
app.use(express.static('./public'));

app.use(session({
    name: 'session_demo',
    resave: true,
    saveUninitialized: true,
    secret: "secretkey",
    SameSite: "Lax",
    //how long the session will be valid 
    cookie: {maxAge: 60 * 1000 * 30} //30 mins
}));


app.set("view engine", "ejs");


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.post('/signin', (req,res)=>{
    let email = req.body.email;
    let pass = req.body.pass;

    console.log("email: " +email);
    console.log("password: " +pass);

    //define connection params

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "logindemo",
    });
    //create query to db

    let query = `SELECT * FROM users WHERE userid = '${email}' and password ='${pass}';`
    console.log(query);
    
    con.connect((err)=>{
        if(err){
            console.log("Error connecting to db");
            return  res.status(500).send("Database connection failed");
        }
        con.query(query,(err,result)=>{
            if(err){
                console.log("error in query");
                return res.status(500).send("Database query failed");
            } 
            console.log("Rows from query: " + result.length);
            if(result.length === 1){
                req.session.loggedin = true;
                req.session.email = email;
                console.log("Connectedt to db")
                res.send("SUCCESS");
                //res.redirect("/studentpages");
            } else {
               console.log("Wrong email or password")
               res.send("WRONG EMAIL OR PASSWORD")
            }
        });
        con.end()
    });

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

app.get('/logout', (req,res)=>{
    req.session.destroy((err)=>{
        console.log("Session is destroyed");
        res.send("Session is closed")
    });
});

app.get('/studentpages', (req,res)=>{
   if(req.session.loggedin == true){
    let data = {
        email: req.session.email,
    };
    console.log("Session connection");
    res.render('./pages/student',data);
   } else{
    res.redirect("./form_axios.html")
   }
});
app.listen(3000, ()=>{
    console.log('Server is running')
})
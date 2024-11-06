const mongoose = require('mongoose')
const uri='mongodb+srv://katjasmirnovaa:6humzSeLv3u1ij4Q@cluster0.1hvem.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0';



//connection itself:
mongoose.connect(uri, {userNewUrlParser: true, useUnifiedTopology: true});

const User = mongoose.model("User", {
    username: String,
    password: Number,
    birthday: Date
})
var newUser = new User({
    username: 'carlsmith',
    password: 1234,
    birthday: '2000-12-24'
})

newUser
.save()
.catch(err => console.error(error))
.then(r => console.log("Inserter result: ", r) )

///find object introduced in query and update it with new data
const query = {username: ' carlsmith'}
const newData = {username: 'New demouser', password: 9999}

//the changed val is requested and find, otherwise the old value:
const options = {new:true}

//run the func
User.findOneAndUpdate(
    query,
    newdata,
    options,
    (err,res) => {
        console.log(res)
    }
)
///////////////////
//OR introducing schema separetly:

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength:3
    },
    password: {
        type:Number,
        min:[1000, "Too small value"],
        max: [99999, "Too big value"]
    },
    birthday: Date
})

//funny function:
userSchema.methods.sayHi = () => {
    let greetings = 
    'Hello my name is ' + this.username +
    ". I was born on " + this.burthday;
    console.log(greetings)
}

const User1 = mongoose.model("User", userSchema)
//connect to DB:
mongoose.connect(uri, {userNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Connected to DB')
})

var newUser = new User1 ({
    username: 'carlsmith',
    password: 2635,
    birthday: '2001-06-26'
})

newUser.sayHi();

User.find({},(err,result) => {
    result.map(user => user.sayHi())
})


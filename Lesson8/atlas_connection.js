const MongoClient = require("mongodb").MongoClient

const passwd = 'demopass';
const uri =''

const client = new MongoClient(uri, {
    userNewUrlParser: true,
    useUnifiedTopology : true
})

var query = {
    title: new RegExp("jedi")
}
var newMovie = {
    title: 'Students new movie',
    year: '2024',
    imdbID: "123456",
    type: 'movie',
    poster: "https//......"
};
//first task: FIND
client.connect(err => {
    const collection = client.db('sample_mflix').connection("movies");
    if(err) throw err;
    collection
    .find(query)
    .limit(5)
    .toArray((err,res) => {
        if(err) throw err
        console.log(result) 
        client.close()
    })
 
})

//second task, INSERT:
client.connect(err => {
    const collection = client.db('sample_mflix').connection("movies");
    if(err) throw err;
    collection
        .insertOne(newMovie, (err,r) => {
            console.log(r.insertedCount);
        });
    collection
    .find(query)
    .limit(5)
    .toArray((err, r) => {
        if(err) throw err;
        console.log(r)
        client.close();
    })
       
})

//UPDATE:
client.connect(err => {
    if(err) throw err;

    collection
    .UpdateMany(
        {title: new RegExp("Jedi")},
        {$set: {year: 1956}},
        (err,r) => {
            if(err) throw err
            console.log("Changed lines: " + r.modifiedCount)
        }
    )
})
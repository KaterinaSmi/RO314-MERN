const MongoClient = require('mongodb').MongoCliet;

const uri = 'mongodb://localhost'

const dbName = 'moviedb'

MongoClient.connect(uri, {useNewUrlParser: true, UseUnifiedTopology: true}, (err, client) => {
    if(err){
        console.log("Problem connected")
    } else {
        console.log("Connected successfully")

        const db = client.db(dbName);
        var query = {year: {$gt:2000}};
        db.collection("movies")
            .find(query)
            .linit(5)
            .toArray((err,r) => {
                if(err) throw err
                console.log(r)
            })
    }
    client.close()
})
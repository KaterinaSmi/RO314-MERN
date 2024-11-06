const MongoClient = require('mongodb').MongoCliet;

const uri = 'mongodb://localhost'

const dbName = 'moviedb'
const collection = 'movies';

let newMovie = {
    title: "Star Wars: The last Jedi",
    year: "2017",
    imdbID: 'tt25223336',
    type: 'movie',
    poster: 'http//....'
}

let manyMovies = [
    {
        title: "A Star Wars Story",
    year: "2016",
    imdbID: 'tt25256336',
    type: 'movie',
    poster: 'http//....' 
    },
    {
        title: "Star Wars: Episode 11",
        year: "2002",
        imdbID: 'tt2527336',
        type: 'movie',
        poster: 'http//....'
    }
]

MongoClient.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true}, (err,client) => {
    if (err) throw err

    const db = client.db(dbName)

    db.collection(collection).insertOne(newMovie, (err,r) => {
        console.log(r.insertedCount);
        db.collection("inserts").insertMany(manyMovies,(err,r) => {
            console.log(r.insertedCount);
            client.close()
        })
    })
})
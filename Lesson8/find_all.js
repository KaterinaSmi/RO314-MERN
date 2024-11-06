const MongoClient =  require('mongodb').MongoClient

const uri = ' mongodb+srv://<username>:<password>...'

MongoClient.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, (err,client) => {

    const db = client.db('moviedb')

    const collection = db.collection('movies')

    collection.find({}).toArray((err,r)=> {
        if(err) throw err;
        console.log(res)
        client.close()
    })
})
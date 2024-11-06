const mongoose = require('mongoose');
require('dotenv').config();



const url = process.env.MONGODB_URI;

mongoose.set('strictQuery', false);

mongoose.connect(url)
.then(result =>{
    console.log('connected to MongoDB')
})
.catch(error =>{
    console.log('error connecting to MongoDB', error.message)
});

const personSchema = new mongoose.Schema({
    name:String,
    number: String,
});

personSchema.set('toJSON', {
    transform: (document, returnObject) =>{
        returnObject.id = returnObject._id.toString()
        delete returnObject._id
        delete returnObject.__v
      }
});
const Person = mongoose.model('People', personSchema)

module.exports = mongoose.model('People', personSchema)
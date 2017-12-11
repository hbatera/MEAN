const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance',{
    useMongoClient: true, 
    // other options
})
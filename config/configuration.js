const mongoose = require('mongoose')
const constants = require('../util/util').Constants

function configureMongoose() {
    // Mongoose Configuration
    mongoose.connect(constants.MONGODB_HOST, {dbName: constants.MONGODB_DBNAME, useNewUrlParser: true, useUnifiedTopology: true})
    mongoose.set('useCreateIndex', true)
}

module.exports = {
    configureMongoose
}
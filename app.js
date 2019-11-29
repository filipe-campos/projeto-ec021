const restify = require('restify')
const cors = require('cors')
const bodyParser = require('body-parser')

const constants = require('./util/util').Constants
const configuration = require('./config/configuration')

// Routes
var authRoute = require('./routes/auth')
var memeRoute = require('./routes/meme')

// Mongoose Configuration
configuration.configureMongoose()

// Server Configuration
const server = restify.createServer({
        name: "EC021"
})

server.use(cors())
server.use(bodyParser.json())

authRoute.applyRoutes(server)
memeRoute.applyRoutes(server)

server.listen(constants.PORT, () => {
    console.log('%s listening at %s.', server.name, server.url)
})
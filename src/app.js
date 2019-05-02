const http = require('http')
const express = require('express')
const hbs = require('hbs')
const webRouter = require('./routers/webRouter')

const app = express()
const server = http.createServer(app)

// Define paths for Express config
const path = require('path')
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// Maintenance mode check
const maintenance = (process.env.APP_MAINTENANCE === 'true') || false
app.use((req, res, next) => {
    if (maintenance) {
        res.status(503).send('maintenance mode');
    }
    next()
})

app.use(express.json())

app.use(webRouter)

require('./socket')(server)

module.exports = server

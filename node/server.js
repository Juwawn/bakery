const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')
const router = require('./app/routes/router')
const port = process.env.port || 3005

server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOrginResourcePolicy: false,
    crossOrginEmbedderPolicy: false,
    directives: {
        "img-src": ["'self'", "https: data"],
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"]
    }
}))

server.use(cors())
    .use(express.json())
    .use(express.urlencoded({extended: true}))

server.use('/', router)
server.set('view engine', 'ejs')

server.listen(port, ()=> {console.log(`PORT ${port} is listening....?`)})

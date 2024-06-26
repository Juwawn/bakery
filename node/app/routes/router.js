const express = require('express')
const router = express.Router()

const port = process.env.port || 3005

const tables = ['flavor','size', 'cookie', 'brownie', 'cake', 'cupcake', 'specialty', 'snackbox', 'user']

router.get('/api', (req, res)=> {
    res.json({
        'All Flavors': `http://localhost:${port}/api/flavor`,
        'All Sizes': `http://localhost:${port}/api/size`,
        'All Cookies': `http://localhost:${port}/api/cookie`,
        'All Brownies': `http://localhost:${port}/api/brownie`,
        'All Cakes': `http://localhost:${port}/api/cake`,
        'All Cupcakes': `http://localhost:${port}/api/cupcake`,
        'All Specialties': `http://localhost:${port}/api/specialty`,
        'All Snackboxes': `http://localhost:${port}/api/snackbox`,
        'All Users': `http://localhost:${port}/api/user`
    })
})

tables.forEach(table => {
    router.use(`/api/${table}`, require(`./api/${table}Routes`))
})

router.get('*', (req, res)=> {
    if(req.url === '/favicon.ico') {
        res.end()
    } else {
        res.send('<h1>404 Error. This page does not exist.</h1>')
    }
})





module.exports = router
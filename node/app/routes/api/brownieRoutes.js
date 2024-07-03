const express = require('express')
const router = express.Router()

// localhost:3005/api/brownie

// Destructure brownieDao
const { brownieDao: dao } = require('../../daos/dao')

router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

router.get('/sort', (req, res)=> {
    dao.sort(req, res, dao.table)
})

router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

router.post('/create', (req, res)=> {
    dao.create(req, res, dao.table)
})

router.patch('/update/:id', (req, res)=> {
    dao.update(res, dao.table, req.params.id)
})

module.exports = router
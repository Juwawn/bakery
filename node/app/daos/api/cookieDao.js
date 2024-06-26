const con = require('../../config/dbconfig')
const { findAll } = require('../common/daoCommon')
const { findById } = require('./flavorDao')

const cookieDao = {

    table: 'cookie',
    
    findAll: (res, table)=> {

        con.execute(
            `SELECT ${table}_id, fv.name, size, qty, price, fv.description, fv.flavorImg
            FROM ${table} c
            LEFT OUTER JOIN flavor fv USING (flavor_id)
            LEFT OUTER JOIN size s USING (size_id);`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR: ', error)
                }
            }
        )
    },

    findById: (res, table, id)=> {

        con.execute(
            `SELECT ${table}_id, fv.name, size, qty, price, fv.description, fv.flavorImg
            FROM ${table} c
            LEFT OUTER JOIN flavor fv USING (flavor_id)
            LEFT OUTER JOIN size s USING (size_id)
            WHERE ${table}_id = ${id};`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR: ', error)
                }
            }
        )
    },

    sort: (req, res, table)=> {

        con.execute(
            `SELECT ${table}_id, fv.name, size, qty, price, fv.description, fv.flavorImg
            FROM ${table} c
            LEFT OUTER JOIN flavor fv USING (flavor_id)
            LEFT OUTER JOIN size s USING (size_id)
            ORDER BY name;`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR: ', error)
                }
            }
        )
    },

    create: (req, res, table)=> {
        if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `INSERT INTO ${table} SET ${fields.join(' = ?, ')} = ?;`,
                values,
                (error, dbres)=> {
                    if (!error) {
                        res.json({
                            Last_id: dbres.insertId
                        })
                    } else {
                        console.log('DAO ERROR: ', error)
                    }
                }
            )
        }
    },

    update: (req, res, table)=> {
        if (isNaN(req.params.id)) {
            res.json({
                "error": true,
                "message": "Id must be a number"
            })
        } else if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to update"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `UPDATE ${table}
                    SET ${fields.join(' = ?, ')} = ? WHERE ${table}_id = ?;`,
                    [...values, req.params.id],
                    (error, dbres)=> {
                        if (!error) {
                            res.send(`Changed ${dbres.changedRows} row(s)`)
                        } else {
                            console.log('DAO ERROR', error)
                            res.send('Error creating record')
                        }
                    }
            )
        }
    }
}

module.exports = cookieDao
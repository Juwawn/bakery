// dao.js is where all the daos meet

const daoCommon = require('./common/daoCommon')

const brownieDao = {...daoCommon, ...require('./api/brownieDao')}

const cakeDao = {...daoCommon, ...require('./api/cakeDao')}

const cookieDao = {...daoCommon, ...require('./api/cookieDao')}

const cupcakeDao = {...daoCommon, ...require('./api/cupcakeDao')}

const flavorDao = {...daoCommon, ...require('./api/flavorDao')}

const sizeDao = {...daoCommon, ...require('./api/sizeDao')}

const snackboxDao = {...daoCommon, ...require('./api/snackboxDao')}

const specialtyDao = {...daoCommon, ...require('./api/specialtyDao')}

const userDao = {...daoCommon, ...require('./api/userDao')}

module.exports = {
    flavorDao,
    brownieDao,
    cakeDao,
    cookieDao,
    cupcakeDao,
    flavorDao,
    sizeDao,
    snackboxDao,
    specialtyDao,
    userDao
}
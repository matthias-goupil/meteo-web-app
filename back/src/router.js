const {Router} = require('express')
const apiRouter = new Router()

const meteoRoutes = require('./meteo/routes')

apiRouter.use(meteoRoutes)

module.exports = apiRouter
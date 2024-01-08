const {Router} = require('express')
const {getWeatherByCityName, getWeatherByLocation} = require('./controller')

const meteoRoutes = new Router()

meteoRoutes.get('/meteo/city/:cityName', getWeatherByCityName)
meteoRoutes.get('/meteo/location/:lon/:lat', getWeatherByLocation)

module.exports = meteoRoutes
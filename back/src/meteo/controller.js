const fetch = require('node-fetch-commonjs')

const meteoApiKey = process.env.METEO_API_KEY
const meteoApiUrl = process.env.METEO_API_URL

const getWeatherByCityName = async (req, res) => {
    const {cityName} = req.params
    const {lang = 'fr'} = req.query
    try {
        const data = await fetch(`${meteoApiUrl}?appid=${meteoApiKey}&q=${cityName}&lang=${lang}&units=metric`)
        .then(res => res.json())
        data.weather = data.weather.map(element => ({
            ...element,
            icon: {
                id: element.icon,
                url: `http://openweathermap.org/img/w/${element.icon}.png`
            }
        }))
        return res.json({data})
    } catch({message}) {
        return res.status(500).json([
            message
        ])
    }
}

const getWeatherByLocation = async (req, res) => {
    const {lon, lat} = req.params
    const {lang = 'fr'} = req.query
    try {
        const data = await fetch(`${meteoApiUrl}?appid=${meteoApiKey}&lon=${lon}&lat=${lat}&lang=${lang}&units=metric`)
        .then(res => res.json())
        console.log(data)
        data.weathers = data.weathers.map(element => ({
            ...element,
            icon: {
                id: element.icon,
                url: `http://openweathermap.org/img/w/${element.icon}.png`
            }
        }))
        return res.json({data})
    } catch({message}) {
        return res.status(500).json([
            message
        ])
    }
}

module.exports = {
    getWeatherByCityName,
    getWeatherByLocation
}
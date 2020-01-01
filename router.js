const express = require('express');
const router = express.Router();
const WeatherController = require('./src/controller/weatherController')


router.get('/', WeatherController.getweather);

router.post('/', WeatherController.postweather);

module.exports = router;
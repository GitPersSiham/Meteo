const express = require('express');
const router = express.Router();
const WeatherController = require('./controller/weatherController')


router.get('/', WeatherController.getweather);

router.post('/', WeatherController.postweather);

module.exports = router;
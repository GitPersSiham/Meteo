const express = require('express');
const router = express.Router();
const WeatherController = require('./src/controller/weatherController')


router.get('/', WeatherController.getLogin);

router.post('/', WeatherController.postLogin);

module.exports = router;
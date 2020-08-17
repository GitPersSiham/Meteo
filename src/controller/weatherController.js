
const request = require('request')

const WeatherController = {
    getweather:(request,response) =>{
response.render('weather', {weather: null, error: null})
      
    },
    postweather:(req,res) =>{
        let city = req.body.city;
       
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=7bbf0a4863848b4b548765f3e5f3ddf2`
      
        request(url, function (err, response, body) {
          if(err){
            res.render('index', {weather: null, error: 'Error, please try again'});
          } else {
            let weather = JSON.parse(body)
            if(weather.main == undefined){
              res.render('weather', {weather: null, error: 'Error, please try again'});
      
            } else {
              let weatherText = `Il est ${weather.main.temp} degrés en ${weather.name}!`;
              let weatherTextExpanded = `Il est ${weather.main.temp} degrés, avec
                ${weather.main.humidity}% humidité dans ${weather.name}!`;
              res.render('weather', {weather: weatherTextExpanded, error: null});
              
            }
          }
        }); 
    }
}

module.exports = WeatherController;
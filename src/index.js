const dotenv =require('dotenv')
const express = require('express');
const bodyParser = require('body-parser');


const app = express()

dotenv.config();

const router  = require ('./router')


app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', 'views');
app.set('view engine', 'ejs')
app.use(express.static('public'));

app.use (router);


app.listen(3001, function () {
    console.log('Example app listening on port 3001!')
  })
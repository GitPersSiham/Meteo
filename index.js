const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const router  = require ('./router')

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.use (router);


app.listen(3001, function () {
    console.log('Example app listening on port 3001!')
  })
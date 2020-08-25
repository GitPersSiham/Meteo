const dotenv =require('dotenv')
const express = require('express');
const bodyParser = require('body-parser');


const app = express()
const port = process.env.PORT ||5050;

dotenv.config();

const router  = require ('./router')


app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', 'views');
app.set('view engine', 'ejs')
app.use(express.static('public'));

app.use (router);


app.listen(port, function () {
    console.log(`App running on port ${port}`);
  })
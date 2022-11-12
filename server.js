require('./models/db');

const express = require('express');  //start express server
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const bookController = require('./controllers/bookController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));  //to connect with handlebar
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' })); //extension name & default file and its location
app.set('view engine', 'hbs'); //set view engine

app.listen(3000, () => {
    console.log('Express server started at port : 3000'); //message that express server has beeen started
});

app.use('/book', bookController);  //base url /book now use '/' only in routes
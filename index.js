const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const app = express();
const port = config.get('defaultAddress.port');
require('./app/data/models');

var routes = require('./app/routes/index')();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routes);
app.listen(port, () => {
    console.log('Server running in ' + port);
});



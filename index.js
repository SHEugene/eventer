const express = require('express');
const config = require('config');
const app = express();
const port = config.get('defaultAddress.port');
require('./app/models');

var routes = require('./app/routes/index')();
app.use('/', routes);
app.listen(port, () => {
    console.log('Server running in ' + port);
});



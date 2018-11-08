const express = require('express');
const config = require('config');
const app = express();
const port = config.get('defaultAddress.port');
require('./app/models');

app.listen(port, () => {
    console.log('Server running in ' + port);
});

var routes = require('./app/routes');
app.use('/', routes);

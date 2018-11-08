const express = require('express');
const config = require('config');
const app = express();

const port = config.get('defaultAddress.port');

app.listen(port, () => {
    console.log('Server running in ' + port);
});

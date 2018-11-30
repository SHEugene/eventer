const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = config.get('defaultAddress.port');
require('./app/data/models');

const routes = require('./app/routes/index')();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public'), { maxAge: 3600 * 24 }));
app.use('/api', routes);
app.use((req, res) => {
	res.send(renderFullPage());
});
function renderFullPage() {
	return `
    <!doctype html>
    <html>
      <head>
        <title>server side</title>
        <link href="public/main.css" rel="stylesheet">
      </head>
      <body>
        <div id="app"></div>
        <script src="/public/bundle.js"></script>
      </body>
    </html>
    `;
}

app.listen(port, () => {
	console.log(`Server running in ${port}`);
});

const express = require('express');
const app = express();
const helmet = require('helmet');
const bodyParser = require('body-parser');

const stackRoute = require('./routes/stack');
const storeRoute = require('./routes/store');

app.use(helmet());
app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.info('Listening on ' + port);
});

app.use('/stack', stackRoute);
app.use('/store', storeRoute);

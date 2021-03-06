const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')


const configDB = require('./config');

mongoose.Promise = global.Promise;
mongoose.connect(configDB.url);

app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

require('./server/routes.js')(app);

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

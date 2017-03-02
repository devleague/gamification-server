const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Promise = require('bluebird');
const player = require('./routes/player');
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const db = require('./model');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

Promise.onPossiblyUnhandledRejection((err) => {
  throw new Error(err);
});

app.use('/api/player', player);

const onStart = (err) => {
  if (err) {
    throw new Error(err);
  }
  console.info(
    `==> 🌎 Listening on port ${port}. ` +
    `Open up http://localhost:${port}/ in your browser.`
  );
};

if (!module.parent) {
  app.listen(port, '0.0.0.0', onStart);
}

module.exports = app;
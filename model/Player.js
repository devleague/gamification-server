'use strict';

require('./index');
const Promise = require('bluebird');
const mongoose = Promise.promisifyAll(require('mongoose'));
mongoose.Promise = require('bluebird');

var playerSchema = mongoose.Schema({
    name: String
});

var Player = mongoose.model('Player', playerSchema);

module.exports = Player;

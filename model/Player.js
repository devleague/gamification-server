'use strict';

require('./index');
const Promise = require('bluebird');
const mongoose = Promise.promisifyAll(require('mongoose'));
mongoose.Promise = require('bluebird');

var playerSchema = mongoose.Schema({
    name: String,
    createdAt: { type: Date, default: Date.now },
    rank: { type: Number, default: 0 },
    reputation: { type: Number, default: 0 },
    badges: [{
      name: { type: String, default: 'New Badge' },
      points: { type: Number, default: 0 },
      createdAt: { type: Date, default: Date.now },
    }],
});

var Player = mongoose.model('Player', playerSchema);

module.exports = Player;

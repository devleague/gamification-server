'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// console.log(mongoose)
const Player = require('../model/Player');
// console.log(Player)
// const Player = mongoose.model('Player');
// console.log(Player)

router.route('/')
  .get((req, res) => {
    Player.find()
      .then((players) => {
        res.send(players);
      })
      .catch((err) => {
        res.send(err);
      });
  })
  .post((req, res) => {
    const newPlayer = new Player({ name: req.body.name});
    newPlayer.save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  })

module.exports = router;

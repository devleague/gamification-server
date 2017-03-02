'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Player = require('../model/Player');

router.route('/new')
  // Creates a new player and returns the new player
  .post((req, res) => {
    const newPlayer = new Player({
      name: req.body.name,
      rank: 0,
      reputation: 0,
      badges: {
        name: 'New User',
        points: 10
      },
    });
    newPlayer.save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  })

router.route('/id/:id')
  // Returns array of all the players
  .get((req, res) => {
    Player.find({ _id: req.params.id }).exec()
      .then((player) => {
        res.send(player);
      })
      .catch((err) => {
        res.send(err);
      });
  })

router.route('/name/:name')
  // Returns array of all the players
  .get((req, res) => {
    Player.find({ name: req.params.name }).exec()
      .then((player) => {
        res.send(player);
      })
      .catch((err) => {
        res.send(err);
      });
  })

router.route('/name/:name/badges')
  // Returns array of all the players
  .get((req, res) => {
    Player.find({ name: req.params.name }).exec()
      .then((player) => {
        res.send(player[0].badges);
      })
      .catch((err) => {
        res.send(err);
      });
  })

router.route('/name/:name/assign_badges')
  // Returns array of all the players
  .get((req, res) => {
    Player.find({ name: req.params.name }).exec()
      .then((player) => {
        res.send(player[0].badges);
      })
      .catch((err) => {
        res.send(err);
      });
  })

router.route('/')
  // Returns array of all the players
  .get((req, res) => {
    Player.find()
      .then((players) => {
        res.send(players);
      })
      .catch((err) => {
        res.send(err);
      });
  })

module.exports = router;

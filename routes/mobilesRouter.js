const express = require("express");
const mongoose = require("mongoose");
const mobilesRouter = express.Router();
const mobiles = require("../models/mobiles");

mobilesRouter
  .route("/")
  .post((req, res) => {
    var cloth = new mobiles(req.body);
    cloth.id = cloth._id;
    cloth.save().then(res.status(200).send("item added"));
  })
  .get((req, res) => {
    var clothes = mobiles.find({}).then(function (result) {
      if (result) {
        res.type("application/json");
        res.status(200).json(result);
      } else {
        res.status(500).send("please try again");
      }
    });
  });

mobilesRouter
  .route("/:id")
  .get((req, res) => {
    mobiles
      .findOne({ _id: req.params.id })
      .then((result) => {
        if (result) {
          res.type("application/json");
          res.status(200).send(result);
        } else {
          res.status(404).send("not found");
        }
      })
      .catch((err) => res.status(404).send("Not valid so not found"));
  })
  .delete((req, res) => {
    mobiles
      .findByIdAndRemove(req.params.id)
      .then(function (result) {
        if (result) {
          res.status(200).send("delete completed");
        } else {
          res.status(404).send("Not found");
        }
      })
      .catch((err) => res.status(404).send("Not success"));
  })
  .put((req, res) => {
    // res.status(200).send(req.body);
    mobiles
      .findByIdAndUpdate(req.params.id, req.body)
      .then(function (result) {
        if (result) {
          res.status(200).send("item updated");
        } else {
          res.status(404).send("item not found");
        }
      })
      .catch((err) => {
        res.status(500).send("something not correct please try again later");
      });
  });

module.exports = mobilesRouter;

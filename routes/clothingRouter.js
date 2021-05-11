const express = require("express");
const mongoose = require("mongoose");
const clothingRouter = express.Router();
const clothing = require("../models/clothing");

clothingRouter
  .route("/")
  .post((req, res) => {
    var cloth = new clothing(req.body);
    cloth.save().then(res.status(200).send("item added"));
  })
  .get((req, res) => {
    var clothes = clothing.find({}).then(function (result) {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(500).send("please try again");
      }
    });
  });

clothingRouter
  .route("/:id")
  .get((req, res) => {
    clothing
      .findOne({ _id: req.params.id })
      .then((result) => {
        if (result) {
          res.type("application/json");
          res.status(200).json(result);
        } else {
          res.status(404).send("not found");
        }
      })
      .catch((err) => res.status(404).send("Not valid so not found"));
  })
  .delete((req, res) => {
    clothing
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
    clothing
      .findByIdAndUpdate(req.params.id, req.body)
      .then(function (result) {
        if (result) {
          res.status(200).send("itam updated");
        } else {
          res.status(404).send("itam not found");
        }
      })
      .catch((err) => {
        res.status(500).send("something not correct please try again later");
      });
  });

module.exports = clothingRouter;

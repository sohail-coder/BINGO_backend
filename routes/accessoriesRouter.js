const express = require("express");
const mongoose = require("mongoose");
const accessoriesRouter = express.Router();
const accessories = require("../models/accessories");
const bodyParser = require("body-parser");
ObjectId = require("mongodb").ObjectID;
// express.use(bodyParser.json());
// res.status(200).send(cloth._id);
accessoriesRouter
  .route("/")
  .post((req, res) => {
    console.log(req.body);
    var cloth = new accessories(req.body);
    cloth.id = cloth._id;
    // console.log(cloth);
    cloth
      .save()
      .then(function (result) {
        if (result) res.status(200).send("yes");
        else res.status(500).send("try again later");
      })

      .catch((err) => res.status(404).send("Not valid so not found"));
  })
  .get((req, res) => {
    var clothes = accessories.find({}).then(function (result) {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(500).send("please try again");
      }
    });
  });

accessoriesRouter
  .route("/:id")
  .get((req, res) => {
    accessories
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
    accessories
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
    accessories
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

module.exports = accessoriesRouter;

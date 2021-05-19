const express = require("express");
const mongoose = require("mongoose");
const usersRouter = express.Router();
const users = require("../models/users");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
usersRouter
  .route("/")
  .post((req, res) => {
    const user = new users(req.body);
    bcrypt.hash(user.password, 10).then(function (hash) {
      user.password = hash;

      user
        .save()
        .then((data) => {
          res.json({ status: "ok", data: "uploaded" });
        })
        .catch((err) => {
          res.status(403);
          res.json({ status: "error", data: err.keyPattern });
        });
    });
  })
  .get((req, res) => res.status(403).send("oh boy u cant access this route"));

usersRouter.route("/:id").get((req, res) => {
  // res.status(200).send(req.params.id);

  users
    .findOne({ email: req.params.id })
    .then(function (result) {
      // console.log(req.body);
      res.status(200);
      // console.log(result.name);
      res.json({ data: result.name });
    })
    .catch(function (err) {
      res.status(404).send("hello");
    });
});

// .get((req, res) => {
//   // res.status(200);
//   // res.json({ status: "ok", data: req.body.email });
//   console.log(req.params);
//   users
//     .findOne({ email: req.params.email })
//     .then(function (result) {
//       // console.log(req.body);
//       res.status(200);
//       res.json({ status: "ok", name: result.name });
//     })
//     .catch(function (err) {
//       res.status(404).send("hello");
//     });
// });

module.exports = usersRouter;

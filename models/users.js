const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const user = mongoose.model("user", users);
module.exports = user;

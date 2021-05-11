const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var AccessoriesSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    uri: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    description: String,
    rating: Number,
    brand: String,
  },
  { timestamps: true }
);

const accessories = mongoose.model("accessory", AccessoriesSchema);
module.exports = accessories;

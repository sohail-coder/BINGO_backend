const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var MobileSchema = new Schema(
  {
    id: String,
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

const mobile = mongoose.model("mobile", MobileSchema);
module.exports = mobile;

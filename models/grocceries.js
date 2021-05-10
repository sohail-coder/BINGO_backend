const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var GrocceriesSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
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

const grocceries = mongoose.model("groccery", GrocceriesSchema);
module.exports = grocceries;

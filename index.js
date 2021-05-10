var express = require("express");
var app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
var PORT = 5000;
var mongoose = require("mongoose");

const clothingRouter = require("./routes/clothingRouter");
const accessoriesRouter = require("./routes/accessoriesRouter");
const grocceriesRouter = require("./routes/grocceriesRouter");
const homeApplianceRouter = require("./routes/homeApplianceRouter");
const laptopsRouter = require("./routes/laptopsRouter");
const mobilesRouter = require("./routes/mobilesRouter");

app.use(cors());
app.use(bodyParser.json());
app.use("/clothing", clothingRouter);
app.use("/accessories", accessoriesRouter);
app.use("/mobiles", mobilesRouter);
app.use("/laptops", laptopsRouter);
app.use("/grocceries", grocceriesRouter);
app.use("/homeAppliance", homeApplianceRouter);
require("dotenv").config();
// console.log(process.env.MURL);
mongoose.connect(
  "mongodb+srv://admin:Sohail99@cluster0.qypoy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});
app.get("/", (req, res) => {
  res.status(200).send("HELLO WELCOME TO SERVER");
});
app.get("*", (req, res) => {
  res.status(404).send("oops cant find");
});

app.listen(process.env.PORT, function () {
  console.log("listening to port " + process.env.PORT);
});

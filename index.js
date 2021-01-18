const express = require("express");
const app = express();
const routes = require("./routes/api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 8081;

//set up connection
mongoose.connect("mongodb://localhost/projects");
mongoose.Promise = global.Promise;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//serve static files
app.use(express.static("client/public"));

app.use(bodyParser.json());

//init routes
app.use("/api", routes);

//error handling middleware
app.use(function (err, req, res, next) {
  //log errors along with a 422 status
  res.status(422).send({ error: err.message });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

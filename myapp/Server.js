var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var app = express();
var bodyparser = require("body-parser");
var cookieSession = require("cookie-session");
// var cookieParser = require('cookie-parser')
var rout1 = require("./Router/NewUserRouter.js");
var rout2 = require("./Router/NewPostRouter.js");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.set("trust proxy", 1);

app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2", "key3"]
  })
);
// app.use(cookieParser());

var url = "mongodb://localhost/merndb";

mongoose
  .connect(url)
  .then(() => {
    console.log("database connected");
    rout1(app);
    rout2(app);
  })
  .catch(err => {
    console.log("database not connected");
  });

app.listen(5000);

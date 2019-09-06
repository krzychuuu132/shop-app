const express = require("express");
const config = require("../config");
const app = express();
const register = require("../routes/register");
const login = require("../routes/login");
const startSide = require("../routes/start-side");
require("dotenv/config");
const bodyParser = require("body-parser");
//mongoose
const moongose = require("mongoose");
//static files
app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(express.static("public"));
app.set("view engine", "ejs");
/*"nodemon --exec @babel-node lib/server.js "*/
app.use("/", register);
app.use("/", login);
app.use("/", startSide);

//Connecting to DB

moongose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, err => {
  console.log("connected to DB!");
});
//listening
app.listen(config.port, () => {
  console.log("server is listenning...");
});

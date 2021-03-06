const express = require("express");
const router = express.Router();
const { loginValidation } = require("../validation");

let data;
const bcrypt = require("bcryptjs");
// MODEL
const User = require("../models/User");
router.get("/mainSide/home", (req, res) => {
  res.render("index", { anser: 4545 });
});
router.get("/login", (req, res) => {
  res.render("index");
});
router.post("/login", async (req, res) => {
  //const { error } = loginValidation(req.body);

  const checkingDataOfLogin = await User.findOne({ email: req.body.email });
  if (!checkingDataOfLogin) return res.render("index");
  //CHECKING PASSWORD / CORRECT
  const compareHidePassword = await bcrypt.compare(
    req.body.password,
    checkingDataOfLogin.password || false
  );
  if (!compareHidePassword) return res.render("index");
  //if (!error) return console.log(error.details[0].message);
  //res.json(checkingDataOfLogin);
  res.status(300).redirect("/mainSide/home/All");
  data = checkingDataOfLogin;
});

(module.exports = router), data;

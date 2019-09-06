const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const bcrypt = require("bcryptjs");

// MODEL
const User = require("../models/User");
// VALIDATION MODULE
const { registerValidation } = require("../validation");

router.post("/register", upload.single(), async (req, res) => {
  const { name, surname, email, password, repeatPassword } = req.body;

  // VALIDATION THE DATA BEFORE MAKE A USER
  // HIDING THE PASSWORD
  const salt = await bcrypt.genSalt(10);
  const hidePassword = await bcrypt.hash(password, salt);
  const hideRepeatPassword = await bcrypt.hash(repeatPassword, salt);

  const { error } = registerValidation(req.body, hidePassword);

  // SEARCHING DOES EMAIL IS IN DATA BASE
  const emailThere = await User.findOne({ email: req.body.email });
  if (emailThere)
    return res.status(200).json({
      text: "taki email juz istenieje w bazie",
      type: "email"
    });

  if (error && error !== null)
    return res.json({
      text: error.details[0].message,
      type: error.details[0].path[0]
    });
  else if (password !== repeatPassword)
    return res
      .status(200)
      .json({ text: "hasla musza byc takie same", type: "password" });
  else {
    const user = new User({
      name,
      surname,
      email,
      password: hidePassword,
      repeatPassword: hideRepeatPassword
    });

    try {
      const savedUser = await user.save();

      res.status(200).json({
        createdUser: `Gratulacje${name}!Udalo ci sie stworzyc uzytkownika o mailu:${email}`
      });
    } catch (err) {
      res.status(404).send(err);
    }
  }
});

module.exports = router;

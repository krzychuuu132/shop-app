const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User")

router.post("/account", (req, res) => {
  const { email }  =req.body;
  User.findOne({email},(err,data)=>{
    if(err) throw err
    else res.json(data)
  })

 
});

module.exports = router;

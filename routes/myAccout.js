const express = require("express");
const router = express.Router();
const { data } = require("./login");

router.get("/accout", (req, res) => {
  return res.json({
    userData: data
  });
});

module.exports = router;

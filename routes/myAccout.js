const express = require("express");
const router = express.Router();

router.get("/accout", (req, res) => {
  return res.json({
    text: "elo"
  });
});

module.exports = router;

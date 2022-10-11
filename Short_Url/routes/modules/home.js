const express = require('express')
const router = express.Router()
const url = require('../../models/Url')
router.get("/", (req, res) => {
  res.render("index");
});

router.post("/", (req, res) => {
  const url = req.body.url
  console.log('1' + url);
  res.render("copy", { url });
})

router.get("/copy", (req, res) => {
  res.render("copy");
});

module.exports = router
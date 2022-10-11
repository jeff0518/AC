const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
  res.render("index");
});

router.post('/', (req, res) => {
  let keyword = req.body.keyword
  return res.render('copy', {keyword})
})

router.get("/copy", (req, res) => {
  res.render("copy");
});

module.exports = router
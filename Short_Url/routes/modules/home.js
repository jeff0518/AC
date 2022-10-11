const express = require('express')
const router = express.Router()
const url = require('../../models/Url')
router.get("/", (req, res) => {
  res.render("index");
});

router.post("/", (req, res) => {
  const url = req.body.url
  console(url);
  return Url.create({ origin_url: url }) // 存入資料庫
   .then(() => res.render("/copy", {url})) // 新增完成後導回首頁
   .catch((error) => console.log(error));
})

router.get("/copy", (req, res) => {
  res.render("copy");
});

module.exports = router
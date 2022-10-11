// 基本連線設定
const express = require("express");
const app = express();
const POST = 3000;
//handlebars
const exphbs = require("express-handlebars");

app.engine("hbs", exphbs({ defaultLayout: "main", extname: 'hbs'}));
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));

//設定 Express 路由以提供靜態檔案
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index");
});

app.get('/copy', (req, res) => {
  res.render('copy')
})

app.listen(POST, () => {
  console.log(`App is running on http://localhost:${POST}`);
});

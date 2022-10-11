// 基本連線設定
const express = require("express");
const app = express();
// 引用路由器
const routes = require('./routes')
const POST = 3000;
//handlebars
const exphbs = require("express-handlebars");

app.engine("hbs", exphbs({ defaultLayout: "main", extname: 'hbs'}));
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));
// 將 request 導入路由器
app.use(routes)
//設定 Express 路由以提供靜態檔案
app.use(express.static("public"));


app.listen(POST, () => {
  console.log(`App is running on http://localhost:${POST}`);
});

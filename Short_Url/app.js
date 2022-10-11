// 基本連線設定
const express = require("express");
const app = express();
// 引用路由器
const routes = require("./routes");
const POST = 3000;
//handlebars
const exphbs = require("express-handlebars");

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", () => {
  console.log("mongodb error!");
});
db.once("open", () => {
  console.log("mongodb connected!");
});
module.exports = db;


app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));
//設定 Express 路由以提供靜態檔案
app.use(express.static("public"));
app.use(routes);

app.listen(POST, () => {
  console.log(`App is running on http://localhost:${POST}`);
});

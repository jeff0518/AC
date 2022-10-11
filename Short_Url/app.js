// 基本連線設定
const express = require("express");
const app = express();
const POST = 3000;
//handlebars
const exphbs = require("express-handlebars");

app.engine("hbs", exphbs({ defaultLayout: "main" }));
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("測試用");
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${port}`);
});

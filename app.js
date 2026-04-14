const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];

app.get("/", (req, res) => {
  res.render("list", { items: items });
});

app.post("/", (req, res) => {
  const newItem = {
    text: req.body.newItem,
    done: false
  };

  items.push(newItem);
  res.redirect("/");
});

app.post("/check", (req, res) => {
  const index = req.body.index;
  items[index].done = !items[index].done;
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
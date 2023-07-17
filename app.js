const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.engine("ejs", ejsMate);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("mains/home");
});

app.get("/about", (req, res) => {
  res.render("mains/about");
});

app.get("/contact", (req, res) => {
  res.render("mains/contact");
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});

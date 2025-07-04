const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("dice.ejs", { diceVal });
});

app.get("/instagram/:username", (req, res) => {
  let username = req.params.username;
  let follower = ["avineet", "tushar", "ram"];
  res.render("insta.ejs", { username, follower });
});
app.listen(port, console.log("server started"));

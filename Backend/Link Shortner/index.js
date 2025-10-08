const express = require("express");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");
const urlRoute = require("./routes/url");
const userRoute = require("./routes/user");
const { connectToMongoDB } = require("./connect");
const URL = require("./models/url");
const PORT = 8000;
const staticRoute = require("./routes/staticRouter");
const { restricteToLogginedUserOnly } = require("./middleware/auth");

connectToMongoDB("mongodb://localhost:27017/short-url");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/url", restricteToLogginedUserOnly, urlRoute);
app.use("/user", userRoute);
app.use("/", staticRoute);

app.get("/test", async (req, res) => {
  const allURL = await URL.find({});
  return res.render("home", {
    urls: allURL,
  });
});

app.listen(PORT, () => console.log("Server Started"));

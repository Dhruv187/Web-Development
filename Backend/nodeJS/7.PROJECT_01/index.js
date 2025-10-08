const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");
const mongoose = require("mongoose");
let port = 3000;
const fs = require("fs");

mongoose
  .connect("mongodb://127.0.0.1:27017/First-try")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => ("mongo ERROR", err));

//! Schema for mongoose

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    jobTitle: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
);

//! model for Schema

const User = mongoose.model("user", userSchema);

//! Middleware:- A function that runs before your route handler
app.use(express.urlencoded({ extended: false }));
//! What is Body Parsing in Express? When a client (like Postman, a form, or frontend app) sends a request to your server — especially POST, PUT, or PATCH — the request body contains the data you want to use. But by default, Express does not know how to read or parse this body. That’s where body parsing comes in.

//! Using middleware to create a log file to register entries
app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `\n${Date.now()}:${req.method}:${req.path}`,
    (err, data) => {
      next();
    }
  );
});

app.get("/user", async (req, res) => {
  const allDbUsers = await User.find({});
  const html = `
    <ul>
    ${allDbUsers.map((users) => `<li>${users.firstName}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});

app.get("/api/user", async (req, res) => {
  const allDbUsers = await User.find({});
  res.json(allDbUsers);
});

app
  .route("/api/user/:id")
  .get(async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
  })
  .patch(async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { lastName: "happy" });
    return res.json({ status: "success" });
  })
  .delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "success" });
  });

app.post("/api/user", async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.job_title ||
    !body.gender
  ) {
    return res.status(400).json({ msg: "All fields are req.." });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });
  console.log("result", result);
  return res.status(201).json({ msg: "success" });
});

app.listen(port, () => {
  console.log(`Server Started on PORT:-${port}`);
});

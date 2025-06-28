//! FRAMEWORK :- a framework is a pre written collection of code that provide structure and building tools of web application

//! EXPRESS:- Express is a backend framework for NodeJS

//! PORT: a port is a number used by computer to request and response that data to a specific point.

const express = require("express");

const app = express();
const port = 8000;

//! app.use():- Register req for all methods

app.use((req, res, next) => {
  console.log("Request Recieved");
  next();
});

//! ROUTING:- It is the process of selecting path for traffic on network or between or across multiple network

app.get("/", (req, res) => {
  //! res.send():- it is used to send response to client. This can be a html code, text, boolean, object.
  return res.send(`Welcome to Home Page ${req.query.name}`);
});

app.get("/about", (req, res) => {
  return res.send(`Welcome to About Page ${req.query.name} ${req.query.id}`);
});

app.get("/hello", (req, res) => {
  return res.send(`${req.query.name}`);
});

app.get("*", (req, res) => {
  return res.send("404 No Page found");
});

app.listen(port, () => {
  console.log("Server started");
});

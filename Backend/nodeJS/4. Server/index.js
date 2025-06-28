let http = require("http");

let fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url}: New request Recieved\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home Page");
        console.log("Visted Home");
        break;
      case "/about":
        res.end("I am Author of this server");
        console.log("Visted About");
        break;
      default:
        res.end("404 Not Found");
        console.log("Visted other");
        break;
    }
  });
});

myServer.listen(8000, () => console.log("server started"));

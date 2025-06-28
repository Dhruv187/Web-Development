let http = require("http");

let fs = require("fs");

let url = require("url");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url}: New request Recieved\n`;
  const myUrl = url.parse(req.url, true);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        const username = myUrl.query.name;
        res.end(`Hi ${username} Welcome to Page`);
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

//! HTTPS METHODS there are various methods which are GET (Retrieve data from the server), POST (Send data to the server), PUT (Update/replace an existing resource completely with new data.),DELETE(Remove the specified resource from the server.), PATCH(Update part of an existing resource)

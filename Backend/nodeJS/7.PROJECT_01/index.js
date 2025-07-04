const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");
let port = 3000;
const fs = require("fs");

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

app.get("/user", (req, res) => {
  const html = `
    <ul>
    ${users.map((users) => `<li>${users.first_name}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});

app.get("/api/user", (req, res) => {
  //! HTTP headers are key-value pairs included in HTTP requests and responses, providing additional information about the communication between a client and a server

  //! These are avaviable both at request and response side
  //! Its a good partice to write X before writing key of custom header as it define it as a custom header
  res.setHeader("X-Name", "CustomHeader");
  res.json(users);
});

app
  .route("/api/user/:id")
  .get((req, res) => {
    //! id store the id that is needed obtain using params
    const id = Number(req.params.id);
    //! user store the user that is needed obtain using find fn
    const user = users.find((user) => user.id === id);
    res.json(user);
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    Object.assign(user, req.body);
    //! as there is no database so fs module is used to make changes in json file
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      res.json(user);
    });
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const user = users.filter((user) => user.id !== id);
    //! push function is used to update the data of users
    user.length = 0;
    users.push(user);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      res.json(user);
    });
    console.log("user deleted");
  });

app.post("/api/user", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    res.status("201").json(newUser);
  });
});

app.listen(port, () => {
  console.log(`Server Started on PORT:-${port}`);
});

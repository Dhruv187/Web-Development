const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 4500;

mongoose
  .connect("mongodb://127.0.0.1:27017/Cars-info")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("ERROR", err));

const carsSchema = new mongoose.Schema({
  brand: {
    type: String,
  },
  type: {
    type: String,
  },
  colour: {
    type: String,
  },
  fuel: {
    type: String,
  },
  numPlate: {
    type: Number,
    required: true,
    unique: true,
  },
});

const Cars = mongoose.model("Cars", carsSchema);

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  next();
});

app
  .route("/Cars/:id")
  .get(async (req, res) => {
    const cars = await Cars.findById(req.params.id);
    res.json(cars);
  })
  .patch(async (req, res) => {
    const cars = await Cars.findByIdAndUpdate(req.params.id, {
      colour: "black",
    });
    res.json({ stauts: "sucess" });
  })
  .delete(async (req, res) => {
    const cars = await Cars.findByIdAndDelete(req.params.id);
    res.json({ status: "success" });
  });

app.post("/Cars", async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.brand ||
    !body.type ||
    !body.colour ||
    !body.fuel ||
    !body.numPlate
  ) {
    return res.status(400).json({ msg: "ALL FIELDS REQ" });
  }

  const result = await Cars.create({
    brand: body.brand,
    type: body.type,
    colour: body.colour,
    fuel: body.fuel,
    numPlate: body.numPlate,
  });
  console.log("result", result);
  res.status(200).json({ msg: "Success" });
});

app.listen(port, () => console.log("Server Started"));

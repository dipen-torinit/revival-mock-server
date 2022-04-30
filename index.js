const fs = require("fs");
const bodyparser = require("body-parser");
const cors = require("cors");
const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/resources"));

function printLog(log) {
  console.log("SERVER: " + log);
}

//Starting server
app.listen(PORT, () => {
  printLog("server running on " + PORT);
});

app.get("/", (req, res) => {
  res.send("Server is running on PORT " + PORT);
});

app.post("/api/get", (req, res) => {
  printLog("POST /api/get");

  const name = req.body.name;
  const surname = req.body.surname;
  const body = req.body;

  console.log(name);
  console.log(surname);

  res.send(body);
});

app.get("/image/*", (req, res) => {
  printLog("GET image");
  const imagepath = path.join(__dirname, "/resources/images/" + req.params[0]);
  console.log(imagepath);
  res.sendFile(imagepath);
});

const express = require("express");
require("dotenv").config();

const port = process.env.PORT || 4000;

const app = express();

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ai Server is Running!");
});

app.listen(port, () => {
  console.log("Server is running on Port:", port);
});

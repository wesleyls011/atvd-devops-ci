const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Olá Mundo DevOps! v2 - CD funcionando");
});

module.exports = app;

const path = require("path");
const express = require("express");
const app = express();

// here is where you combine note and html

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = app;

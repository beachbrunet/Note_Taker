const path = require("path");
const app = require("express");

app.get("/"),
  function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  };

// GET route
app.get("notes"),
  function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  };
module.exports = app;

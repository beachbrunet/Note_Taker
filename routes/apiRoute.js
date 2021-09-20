//  add dependancies
const path = require("path");
const get = require("./db/db.json");

// ROUTES (to get notes, create notes, then delete)-------------------------------------------------

app.get("/"),
  function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  };

app.get("notes"),
  function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  };

app.get("notes"),
  function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  };

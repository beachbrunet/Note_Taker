//  add dependancies
const path = require("path");
const express = require("express");
const app = express();
const { fstat } = require("fs");
const db = require("../db/db.json");
const notes = [];

// ROUTES (to get notes, create notes, then delete)-------------------------------------------------
// get note
app.get("/notes", function (req, res) {
  res.json(notes);
});

// create note
app.post("/notes", (req, res) => {
  req.body.id = notes.length.toString();
  console.log(req.body);
  notes.push(req.body);
  res.json(true);
});

module.exports = app;

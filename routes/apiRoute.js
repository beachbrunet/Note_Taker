//  add dependancies
const path = require("path");
const express = require("express");
const app = express();
const { fstat } = require("fs");
const db = require("../db/db.json");

// ROUTES (to get notes, create notes, then delete)-------------------------------------------------
// get note
app.get("notes", function (req, res) {
  res.json(notes);
});

// create note

app.post("/notes", (req, res) => {
  req.body.id = notes.length.toString();
  console.log(req.body);
});

// writeNote.push(req.body);

// fs.writeFileSync(
//   path.join(__dirname, "./db/db.json"),
//   JSON.stringify(content, null, 2),
//   (err) =>
//     err ? console.error(err) : console.info(`\nData written to ${destination}`)

// example from 21
// const writeToFile = (destination, content) =>
//   fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
//   err ? console.error(err) : console.info(`\nData written to ${destination}`)
// );

// get routes
// app.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "/public/index.html"))
// );

// app.get("/notes", (req, res) =>
//   res.sendFile(path.join(__dirname, "/public/index.html"))
// );

module.exports = app;

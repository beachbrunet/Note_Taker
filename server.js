// MVP
// write and save notes
// landing page with a link to notes page
// click on saved notes display that note
// add note
// then that presents empty feilds to enter a new note

// Features
// notes exsiting notes on left hand side
// save icon on top of page
// existing notes are shown after the user saves their notes and both apear
// click on saved notes display that note on the right hand column
// adds note via icon
// then that presents empty feilds to enter a new note on the right column

// The application’s front end has already been created.
// It's your job to build the back end, connect the two, and then deploy
// the entire application to Heroku.
// GET /notes should return the notes.html file.
// GET * should return the index.html file.
// The following API routes should be created:
// GET /api/notes should read the db.json file and return all saved notes as JSON.
// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

// Bonus
// You haven’t learned how to handle DELETE requests,
// but this application offers that functionality on the front end.
// As a bonus, try to add the DELETE route to the application using the following guideline:

// DELETE /api/notes/:id should receive a query parameter that contains the id of a note to delete.
// To delete a note, you'll need to read all notes from the db.json file,
// remove the note with the given id property, and then rewrite the notes to the db.json file.

//  add dependancies
const express = require("express");
const fs = require("fs");
const path = require("path");
const api = require("./routes/apiRoute");
const html = require("./routes/HTMLroutes");

// API route will
const PORT = process.env.PORT || 3001;
const app = express();

//  Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", api);
app.use("/", html);

app.listen(PORT, function () {
  console.log("App listening on PORT http://localhost:" + PORT);
});

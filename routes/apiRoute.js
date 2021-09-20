//  add dependancies
const fs = require("fs");
const path = require("/db/db.json");

const PORT = 3001;
const app = express();

//  Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

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

//  add dependancies
const fs = require("fs");
const path = require("path");

const PORT = 3001;
const app = express();

//  Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// ROUTES -------------------------------------------------

// GET request to index.html
app.get("/"),
  function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  };

// GET route
app.get("notes"),
  function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  };

// Posts
app.post("/api/reviews", (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);
});

// (bonus) delete note

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
// module.exports = routes;

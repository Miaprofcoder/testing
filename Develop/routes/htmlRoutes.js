// import path module to handle file paths and express
const path = require("path"); 
const express = require("express"); 

// declare variable router for express
const router = express.Router(); 

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
  // When a GET request is made to '/notes' endpoint,
  // send the 'notes.html' file located in the 'public' directory
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
  // For any other GET request (wildcard '*'),
  // send the 'index.html' file located in the 'public' directory
});

module.exports = router;
// Exporting the router module for use in other files

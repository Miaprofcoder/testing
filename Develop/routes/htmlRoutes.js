// import path module to handle file paths and express
const path = require("path"); 
const express = require("express"); 

// declare variable router for express
const router = express.Router(); 


// when a get request is made to /notes, then notes.html in public directory is sent to user
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
  
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
  // For any other GET request (wildcard '*'),
  // send the 'index.html' file located in the 'public' directory
});

module.exports = router;
// Exporting the router module for use in other files

// import path module to handle file paths and express
const path = require("path"); 
const express = require("express"); 

// declare variable router for express
const router = express.Router(); 


// when a get request is made to /notes, then notes.html in public directory is sent to user
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
  
});


//for other get request, uses wildcard *, will respond by sending the index.html file
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
  
});

module.exports = router;
// Exporting the router module for use in other files

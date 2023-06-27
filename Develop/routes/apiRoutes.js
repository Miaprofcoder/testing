//import express module, declare variable for express router
const express = require("express");
const router = express.Router();

// import store.js from db folder for adding and removing notes
const store = require("../db/store");

//when a get request is made to /notes, retrieve the notes using getNotes() in store.js
router.get("/notes", (req, res) => {
  store
    .getNotes()

    //send the notes as a JSON response
    .then((notes) => res.json(notes))

    //if error occurs, will send 500 status code
    .catch((err) => res.status(500).json(err));

});


// when a post is made to /notes, add a new note using addNote() declared in store.js with the request body
router.post("/notes", (req, res) => {
  store
    .addNote(req.body)

    //sends the newly added note as JSON response
    .then((note) => res.json(note))

    //sends 500 status code if an error occurs
    .catch((err) => res.status(500).json(err));
  
});

router.delete("/notes/:id", (req, res) => {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json(err));
  // When a DELETE request is made to '/notes/:id' endpoint,
  // remove the note with the specified ID using the store's removeNote() method,
  // and send a JSON response indicating success
  // If an error occurs, send a 500 status code and the error message as JSON
});

module.exports = router;
// Exporting the router module for use in other files

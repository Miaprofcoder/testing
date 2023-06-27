//import express module, declare variable for express router
const express = require("express");
const router = express.Router();

// import store.js from db folder for adding and removing notes
const store = require("../db/store");

router.get("/notes", (req, res) => {
  store
    .getNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
  // When a GET request is made to '/notes' endpoint,
  // retrieve the notes using the store's getNotes() method,
  // and send the notes as a JSON response
  // If an error occurs, send a 500 status code and the error message as JSON
});

router.post("/notes", (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
  // When a POST request is made to '/notes' endpoint,
  // add a new note using the store's addNote() method with the request body,
  // and send the newly added note as a JSON response
  // If an error occurs, send a 500 status code and the error message as JSON
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

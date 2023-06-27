// import fs module
const fs = require("fs");


//define class Store to handle reading, writing, retrieving notes, add and delete notes
class Store {

  //read data from db.json file
  async read() {
    try {
      //read the data from db.json and store it in data variable
      const data = await fs.promises.readFile("db/db.json", "utf8");

      //return content of file
      return data;

      //for any error that occurs, catch and throw the error
    } catch (error) {
      throw error;
    }
  }


  //write data from db.json file
  async write(data) {
    try {
      await fs.promises.writeFile("db/db.json", JSON.stringify(data));
    } catch (error) {
      throw error;
    }
  }



  //retrieve the notes from file
  async getNotes() {
    try {
      const notes = await this.read();
      let parsedNotes;
      try {
        parsedNotes = [].concat(JSON.parse(notes));
      } catch (error) {
        parsedNotes = [];
      }
      return parsedNotes;
    } catch (error) {
      throw error;
    }
  }



  // function to add new note
  async addNote(note) {
    const { title, text } = note;
    if (!title || !text) {
      throw new Error("Note 'title' and 'text' cannot be blank");
    }
    const newNote = { title, text, id: Math.random() };

    try {
      const notes = await this.getNotes();
      const updatedNotes = [...notes, newNote];
      await this.write(updatedNotes);
      return newNote;
    } catch (error) {
      throw error;
    }
  }


  // remove note by specific id
  async removeNote(id) {
    try {
      const notes = await this.getNotes();
      const filteredNotes = notes.filter((note) => note.id !== parseFloat(id));
      await this.write(filteredNotes);
    } catch (error) {
      throw error;
    }
  }
}


//export class store to be used in other file
module.exports = new Store();

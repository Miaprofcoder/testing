// Importing the Express framework, apiRoutes and htmlRoutes module
const express = require("express");
const apiRoutes = require("./routes/apiRoutes"); 
const htmlRoutes = require("./routes/htmlRoutes"); 

const app = express(); // Creating an instance of the Express application
const PORT = process.env.PORT || 3000; // Setting the port number for the server

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.static("public")); // Serving static files from the "public" directory

app.use("/api", apiRoutes); // Using the apiRoutes module for routes starting with "/api"
app.use("/", htmlRoutes); // Using the htmlRoutes module for routes starting with "/"

app.listen(PORT, () => {
  // Starting the server and listening on the specified port
  console.log(`Server is running on http://localhost:${PORT}`);
});

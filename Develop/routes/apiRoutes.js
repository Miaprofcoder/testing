// Importing the Express framework, apiRoutes and htmlRoutes module
const express = require("express");
const apiRoutes = require("./routes/apiRoutes"); 
const htmlRoutes = require("./routes/htmlRoutes"); 

// Creating variable for express application and set the port number in the server
const app = express(); 
const PORT = process.env.PORT || 3000; 

//Setting middleware to parse url, json bodies and static file from the public directory
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
app.use(express.static("public")); 

app.use("/api", apiRoutes); // Using the apiRoutes module for routes starting with "/api"
app.use("/", htmlRoutes); // Using the htmlRoutes module for routes starting with "/"

app.listen(PORT, () => {
  // Starting the server and listening on the specified port
  console.log(`Server is running on http://localhost:${PORT}`);
});

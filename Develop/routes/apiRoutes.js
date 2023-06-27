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

//using the apiRoutes.js module for routes starting with /api
app.use("/api", apiRoutes); 

//using the htmlRoutes.js module for routes starting with /
app.use("/", htmlRoutes);

//initiating the server and listening to the port declared above 
app.listen(PORT, () => {

  console.log(`Server is running on http://localhost:${PORT}`);
});

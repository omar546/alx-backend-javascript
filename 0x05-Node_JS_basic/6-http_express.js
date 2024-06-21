const express = require('express');

const app = express();

// Define the root route
app.get('/', (req, res) => {
  res.statusCode = 200; // Set response status code to 200 (OK)

  res.setHeader('Content-Type', 'text/plain'); // Set response content type to plain text
  
  res.send('Hello Holberton School!'); // Send response body
});

// Start the server and listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
